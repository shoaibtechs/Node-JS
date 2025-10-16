//Creating a HTTP srever 
//const  {console} = require('console');
const fs  = require('fs');

const http = require('http');

const port = process.env.PORT || 3001;

const server = http.createServer((req,res)=>{
    
    
    
    res.setHeader('Content-Type',"text/html")
    console.log(req.url)


    if(req.url == '/')
    {   
        
        
        
        res.statusCode = 200;

        res.end("<h1>Welcome to shoaibtechs.com </h1> <p> Shoaibtechs is one of the greatest websited </p> ");
    }

    else if(req.url == '/about')
    {
        res.statusCode = 200;
        
        res.end("<h1>Welcome to shoaibtechs.com..... This is About page </h1> <p> Shoaibtechs is one of the greatest website </p> ");
    }


    else if(req.url == '/hello')
    {
        res.statusCode = 200;
        
        const data = fs.readFileSync('index.html');

        res.end(data.toString());
    }


    else{

        res.statusCode = 404;
        res.end("<h1>The page was not found</h1>");
    }

        



});

server.listen(port,()=>{

    console.log(`Server is listening on port ${port}`);


});


//Nodemon 
