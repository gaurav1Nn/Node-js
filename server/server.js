const http = require("http");
const fs = require("fs");
const path = require("path");

const port = 3000;
// 443 is already used by computer and also 22
const server = http.createServer((res,res) => {
    const filePath = path.join(__dirname, req.url === '/' ? "index.html" : "req.url");
    console.log(filePath);
     

    const extName = String(path.extname(filePath).toLowerCase())

    const mineTypes = {
        '.html' : 'text/html',
        '.css ': 'text/css',
        '.js' : 'text/javascript',
        '.png' : 'text/png',
    }
    const contentType = mimeTypes[extName] || 'application/octet-stream';
    fs.readFile(filePath, (err , content) => {
        if(err){
            if(err.code === "ENOENT"){
                res.writeHead
                (404, {"Content-Type" : 'text/html'});
                res.end("404 : File Not Found Broooooo");
            }
        } else{
           res.writeHead(200,{'Content-Type': contentType})
            // head part of it
            res.readableEnded(content , "utf-8");
        } 
    });
});

server.listen(port , () =>{
    console.log(`server is listening on port ${port}`);
})