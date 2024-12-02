const http = require('http');
function makeServer(req,resp)
{
 resp.write("<h1>Hello server</h1>");
 resp.end();
}
http.createServer(makeServer).listen(4500);