const fs = require('fs')

fs.writeFileSync('test.txt','hahahahahhaha')
fs.appendFileSync('test.txt','haahaahaahaa')
//fs.renameSync('test.txt','svecw.txt')
//fs.unlinkSync('svecw.txt')

const data = fs.readFileSync('test.txt', 'utf-8')
console.log(data)






const fs = require("fs");

fs.writeFile("asynctest.txt","async file contents",(err) => {
    if (err) throw err;
    else console.log("file created successfully:");
});
fs.readFile("asynctest.txt", "utf-8", (err,result) => {
    if (err) console.log("err", err)
})






const http = require('http')
const server = http.createServer((req,res) => {
    res.writeHead(200,{'content-Type ':' text/home'})
    res.end('<h1>HELLO</h1>')
    res.write('HELLO')
})
server.listen(3003,() => {
    console.log('server started')
})







const http = require('http')
const server = http.createServer((req,res) => {
    if(req.url == '/') {
        res.end('<h1>Home</h1>')
    } else if(req.url === '/about')
            {
                res.end('<h1>about</h1>')
            }
})
server.listen(3003,() => {
    console.log('server started...')
})
