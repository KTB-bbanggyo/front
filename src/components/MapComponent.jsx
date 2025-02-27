import React, { useEffect, useRef, useState } from 'react';

const MapComponent = ({ level = 3 }) => {
  const mapContainerRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [apiLoaded, setApiLoaded] = useState(false); // API 초기화 여부 추가
  const [currentPosition, setCurrentPosition] = useState({ lat: 33.450701, lng: 126.570667 });

  // Kakao Maps 스크립트 동적 로딩
  useEffect(() => {
    if (!document.getElementById('kakao-map-script')) {
      const script = document.createElement('script');
      script.id = 'kakao-map-script';
      script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${window.env.REACT_APP_KAKAO_JS_KEY}&autoload=false`;
      script.async = true;
      script.onload = () => {
        console.log("Kakao Maps API 스크립트 로드 완료");
        setScriptLoaded(true);
      };
      script.onerror = () => {
        console.error("Kakao Maps 스크립트 로드 실패!");
      };
      document.head.appendChild(script);
    } else {
      setScriptLoaded(true);
    }
  }, []);

  // API 완전히 로드될 때까지 기다리는 함수
  const waitForKakaoMaps = () => {
    if (window.kakao && window.kakao.maps && window.kakao.maps.Map) {
      console.log("Kakao Maps API 로드 완료!");
      setApiLoaded(true);
    } else {
      console.warn("Kakao Maps API가 아직 로드되지 않음. 500ms 후 재시도...");
      setTimeout(waitForKakaoMaps, 500);
    }
  };

  useEffect(() => {
    if (scriptLoaded) {
      console.log("window.kakao.maps.load() 실행...");
      window.kakao.maps.load(waitForKakaoMaps);
    }
    // eslint-disable-next-line
  }, [scriptLoaded]);

  // 현재 위치 가져오기
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCurrentPosition({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error("위치 정보를 가져올 수 없습니다.", error);
        }
      );
    } else {
      console.error("이 브라우저에서는 Geolocation을 지원하지 않습니다.");
    }
  }, []);

  // API 로드 완료 후 지도 생성
  useEffect(() => {
    if (apiLoaded && mapContainerRef.current) {
      console.log("지도 생성 시작...");
      if (!mapInstanceRef.current) {
        const container = mapContainerRef.current;
        const options = {
          center: new window.kakao.maps.LatLng(currentPosition.lat, currentPosition.lng),
          level: level,
        };
        mapInstanceRef.current = new window.kakao.maps.Map(container, options);
        console.log("지도 생성 완료!");
      } else {
        // 지도 중심 업데이트
        const newCenter = new window.kakao.maps.LatLng(currentPosition.lat, currentPosition.lng);
        mapInstanceRef.current.setCenter(newCenter);
        console.log("지도 중심 업데이트");
      }
    }
  }, [apiLoaded, currentPosition, level]);

  return (
    <div
      ref={mapContainerRef}
      style={{ width: "100%", height: "100%" }}
    />
  );
};

export default MapComponent;
