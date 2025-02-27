const webpack = require("webpack");

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      "process.env.REACT_APP_KAKAO_JS_KEY": JSON.stringify(process.env.REACT_APP_KAKAO_JS_KEY),
      "process.env.REACT_APP_KAKAO_REST_API_KEY": JSON.stringify(process.env.REACT_APP_KAKAO_REST_API_KEY),
      "process.env.REACT_APP_BACKEND_URL": JSON.stringify(process.env.REACT_APP_BACKEND_URL),
    }),
  ],
};
