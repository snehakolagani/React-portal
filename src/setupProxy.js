// src/setupProxy.js

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api', // specify the API endpoint you want to proxy
    createProxyMiddleware({
      target: 'http://64.227.156.20/', // specify the target URL of the external API
      changeOrigin: true,
    })
  );
};
