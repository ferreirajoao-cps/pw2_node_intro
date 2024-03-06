const fs = require('fs')
const http = require('http')
const url = require('url')

const port = 3000

const server = http.createServer((req, res) =>{
    var urlInfo = require('url').parse(req.url, true)
      const name = urlInfo.query.name

res.statusCode = 200
res.setHeader('Content-Type', 'text/html')
     if(!name){
         fs.readFile('index.html', function(err, data){
             res.writeHead(200, {'Content-Type':'text/html'})
             res.write(data)
             return res.end()
         })

     }
     else {

        // fs.appendFileSync('arquivo.txt', name + '\n')

        fs.writeFile('arquivo.txt', name, function(err, data){
            res.writeHead(302, {
                location:'/',
            })
            return res.end()
        })
     }

})

server.listen(port, () =>{
    console.log('FileSystem Server rodando!: '+port )
})