const http = require('http');
const httpProxy = require('http-proxy');
const proxy = httpProxy.createProxyServer({});
const server = http.createServer((req, res) => {
  proxy.web(req, res, { target: 'http://fred.hidencloud.com:25901/webhook' });
});
server.listen(8080, () => {
  console.log('Proxy server is running on http://localhost:8080');
});
