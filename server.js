let http = require('http');
let url = require('url');
let fs = require('fs'); 

let myServer = function (req, res){
    let q = url.parse(req.url, true);
    //console.log(q); 
    let filename = "."+q.pathname;
    //console.log(filename); 

    fs.readFile(filename, 
    function (err, data) {
        if (err){ res.writeHead(404, {'Content-Type': 'text/html'});
        return res.end("404 Not Found");
        }

        if(req.url.endsWith('.html')){
            res.writeHead(200, {'Content-Type': 'text/html'});
        }
        if(req.url.endsWith('.js')){
            res.writeHead(200, { 'Content-Type': 'application/javascript'})
        }
        res.write(data);
        return res.end();
    });    
}

let server = http.createServer(myServer);

server.listen(8080);