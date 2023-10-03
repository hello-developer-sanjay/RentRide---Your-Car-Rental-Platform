const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://rent-nqhh.onrender.com',
      changeOrigin: true,
    })
  );
};
