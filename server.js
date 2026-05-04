const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3478;
const ROOT = __dirname;
const MIME = {'.html':'text/html','.css':'text/css','.js':'application/javascript','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.json':'application/json'};

http.createServer((req,res)=>{
  let urlPath = decodeURIComponent(req.url.split('?')[0]);
  if(urlPath==='/') urlPath='/index.html';
  const file = path.join(ROOT, urlPath);
  fs.readFile(file,(err,data)=>{
    if(err){res.writeHead(404);return res.end('Not Found');}
    res.writeHead(200,{'Content-Type':MIME[path.extname(file)]||'text/plain'});
    res.end(data);
  });
}).listen(PORT, ()=>console.log('DAH preview on http://localhost:'+PORT));
