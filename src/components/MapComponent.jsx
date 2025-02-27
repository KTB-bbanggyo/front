import React, { useEffect, useRef, useState } from 'react';

const MapComponent = ({ level = 3 }) => {
  const mapContainerRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [currentPosition, setCurrentPosition] = useState({ lat: 33.450701, lng: 126.570667 });

  // Kakao Maps 스크립트 동적 로딩
  useEffect(() => {
    if (!document.getElementById('kakao-map-script')) {
      const script = document.createElement('script');
      script.id = 'kakao-map-script';
      script.src = 'https://dapi.kakao.com/v2/maps/sdk.js?appkey=6d6afe6913ccff3a81671b12875b1e01&autoload=false';
      script.async = true;
      script.onload = () => {
        window.kakao.maps.load(() => {
          setScriptLoaded(true);
        });
      };
      script.onerror = () => {
        console.error("Kakao Maps 스크립트 로드에 실패했습니다.");
      };
      document.head.appendChild(script);
    } else {
      window.kakao.maps.load(() => {
        setScriptLoaded(true);
      });
    }
  }, []);

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

  // 스크립트 로드와 현재 위치가 준비되면 지도를 생성하거나 중심을 업데이트
  useEffect(() => {
    if (scriptLoaded && window.kakao && window.kakao.maps && mapContainerRef.current) {
      if (!mapInstanceRef.current) {
        // 최초 지도 생성
        const container = mapContainerRef.current;
        const options = {
          center: new window.kakao.maps.LatLng(currentPosition.lat, currentPosition.lng),
          level: level,
        };
        mapInstanceRef.current = new window.kakao.maps.Map(container, options);
      } else {
        // 지도 이미 생성되어 있으면 중심 업데이트
        const newCenter = new window.kakao.maps.LatLng(currentPosition.lat, currentPosition.lng);
        mapInstanceRef.current.setCenter(newCenter);
      }
    }
  }, [scriptLoaded, currentPosition, level]);

  return (
    <div
      ref={mapContainerRef}
      style={{ width: '40vw', height: '40vh', borderRadius: '12px' }}
    />
  );

};

export default MapComponent;