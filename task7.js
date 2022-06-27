/* Answer the following questions

1.Explain the nodejs event driven architecture.
When the node filename is executed, NodeJS wents throught the entire file and parses code, register variables and functions. Node Js event loop keeps on running as long as there are event listeners registered.

2.How can it basically scale to handle 1000 of requests a sec. What helps node JS even though it is single threaded? Node Js event loop keeps on running as long as there are event listeners registered. It uses event loop concept and keeps on running and executes code when a certain event occurs

3.What does process.exit do?
process.exit() method is used to quiting the process which is running and we can also quit process by by ctrl+c

4.What does req.url , req.header and req.method contain?
req.url contains the url of the page which user enters via browser. Url is everything after localhost.
req.header contains the header information like Content-Type.
req.method contains GET or POST

*/




/* Deliverable

1.Like the youtuber return a response like "Welcome to my Node Js project". Just follow the way he writes code in 30th video.
2.Based on the url the user hits , I want you to return custom responses.
When url = /home , return response ==> Welcome home
When url = /about, return response ==> Welcome to About Us page
When url =/node, return response ==> Welcome to my Node Js project */

const http = require('http')
const server = http.createServer((req,res) => {
    const url = req.url;
    if(url === '/home')
    {
        res.write('<html><head><title>Home</title></head> <body><h1>Welcome home</h1></body></html>')
        return res.end()
    }
    if(url === '/about')
    {
        res.write('<html><head><title>About Us</title></head> <body><h1>Welcome to About Us page</h1></body></html>')
        return res.end()
    }
    if(url === '/node')
    {
        res.statusCode = 302;
        res.setHeader('Location','/')
        return res.end()
    }
    
    res.setHeader('Content-Type','text/html')
    res.write('<html><head><title>Welcome to my Node Js project</title></head> <body><h1>Welcome to my Node Js project</h1></body></html>')
    res.end()
})
server.listen(4000)