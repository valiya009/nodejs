const http = require('http');
function data(req,resp)
{
    resp.write("<h1>student information</h1>")
    resp.write("<h4> Id :- 101</h4>")
    resp.write("<h4> Name :- Valiya Chandresh</h4>")
    resp.write("<h4> Bach no :- 2</h4>")
    resp.write("<h4> Cource :- Full stack devlopment</h4>")
    resp.end()
}
http.createServer(data).listen(3000);