const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://sidea-backend-dev:8080',
      changeOrigin: true,
    })
  );
};