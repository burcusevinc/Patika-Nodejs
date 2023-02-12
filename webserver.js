//http modül:
const http = require('http')

//server oluştur:
const server = http.createServer((req,res) => {
    console.log('istek oluşturuldu')

    //url bul
    const url = req.url
    if (url === '/') {
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write('<h2> Index sayfasina hosgeldiniz </h2>')
    } 
    else if (url === '/hakkimda') {
        res.write('<h2> Hakkimda sayfasina hoşgeldiniz </h2>')
    }
    else if (url === '/iletisim') {
        res.write('<h2> Iletişim sayfasina hoşgeldiniz </h2>')
    }else {
        res.write('404 NOT FOUND')
    }
    res.end()
})

//servera istek atarken dinleyeceğimiz port:
const port = 5000;
server.listen(port, () => {
    console.log(`dinlenen port : ${port}`)
})