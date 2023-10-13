const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://rentme-0vht.onrender.com',
      changeOrigin: true,
    })
  );
};
