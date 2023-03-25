const http = require("http");
const fs = require("fs");
const { join } = require("path");
const server = http.createServer((req,res)=>{
    console.log(req.url);
    // if(req.url =='/favicon.ico'){
    //     console.log("Lấy icon biểu tượng web");
    // }else
    // if(req.url =='/'){
    //     res.writeHead(200,"OK",{'Content-type':'text/html'});
    //     res.write('<h1>Home</h1>',(err)=>{
    //         console.log(err);
    //     });
    //     res.end();
    // } else{
    //     fs.readFile(req.url.substring(1), (err, data)=>{
    //         if(err) {
    //             // throw err

    //             res.writeHead(404,{'Content-type':'text/html'});
    //             return res.end();
    //         };

    //         res.writeHead(200,"OK",{'Content-type':'text/html'});
    //         res.write( data.toString('utf-8'))
    //         return res.end("<meta charset='utf-8'/>");
    //     })
    // }
    switch (req.url) {
        case '/home.html': home(req,res); break;
        case '/contact.html':contact(req,res); break;
        case '/info.html':info(req,res); break;
        default:
            fs.readFile("home.html", (err, data)=>{
                if(err) {
                    // throw err
        
                    res.writeHead(404,{'Content-type':'text/html'});
                    return res.end();
                };
                if(req.url.indexOf('.css')>0)
            res.writeHead(200,"OK",{'Content-type':'text/css'});
        else
           res.writeHead(200,"OK",{'Content-type':'text/html'});
                res.write( data.toString('utf-8'))
                return res.end("<meta charset='utf-8'/>");
            })
            break;
    }
});
const home = (req,res)=>{
    fs.readFile(req.url.substring(1), (err, data)=>{
        if(err) {
            // throw err

            res.writeHead(404,{'Content-type':'text/html'});
            return res.end();
        };

        if(req.url.indexOf('.css')>0)
    res.writeHead(200,"OK",{'Content-type':'text/css'});
else
   res.writeHead(200,"OK",{'Content-type':'text/html'});
        res.write( data.toString('utf-8'))
        return res.end("<meta charset='utf-8'/>");
    })
};
const contact = (req,res)=>{
    fs.readFile(req.url.substring(1), (err, data)=>{
        if(err) {
            // throw err

            res.writeHead(404,{'Content-type':'text/html'});
            return res.end();
        };

        if(req.url.indexOf('.css')>0)
    res.writeHead(200,"OK",{'Content-type':'text/css'});
else
   res.writeHead(200,"OK",{'Content-type':'text/html'});
        res.write( data.toString('utf-8'))
        return res.end("<meta charset='utf-8'/>");
    })
}
const info = (req,res)=>{
    fs.readFile(req.url.substring(1), (err, data)=>{
        if(err) {
            // throw err

            res.writeHead(404,{'Content-type':'text/html'});
            return res.end();
        };

        if(req.url.indexOf('.css')>0)
    res.writeHead(200,"OK",{'Content-type':'text/css'});
else
   res.writeHead(200,"OK",{'Content-type':'text/html'});
        res.write( data.toString('utf-8'))
        return res.end("<meta charset='utf-8'/>");
    })
}
    
    // switch(req.url){
    //     case''
    // }


server.listen(8080);
console.log("server dang chay port 8080");