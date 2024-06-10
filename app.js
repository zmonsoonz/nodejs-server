const http = require("http");
const fs = require('fs');
const path = require('path');

const port = 3000;
const server = http.createServer((req, res) => { // создаем сервер

    console.log('server request');

    res.setHeader('Content-Type', 'text/html'); // задаем заголовки

    // res.write('<h1>hello</h1>'); //пример с отправкой html
    // res.end();

    // const data = JSON.stringify([ //создаем данные
    //     {name: 'Tommy', age: 29},
    //     {name: "Arthur", age: 40}
    // ])
    // res.end(data); //отправляет данные

    const createPath = (page) => path.resolve(__dirname, 'views', `${page}.html`); //создаем путь до файла

    let basePath = '';

    switch(req.url) { //при различных адресах меняем basePath
        case '/':
        case '/home':
        case '/index.html':
            basePath = createPath('index'); 
            res.statusCode = 200;
            break
        case '/contacts':
            basePath = createPath('contacts');
            res.statusCode = 200;
            break
        case '/about-us': //с этого перекидывает на contacts
            res.statusCode = 301; 
            res.setHeader("Location", '/contacts')
            res.end();
            break
        default:
            basePath = createPath('error');
            res.statusCode = 404;
            break
    }

    fs.readFile(basePath, (err, data) => { //считываем нужный файл и возвращаем данные если нет ошибок
        if (err) {
            console.log(err);
            res.statusCode = 500;
            res.end();
        }
        else {
            res.end(data);
        }
    })
})

server.listen(port, (error) => {
    error ? console.log(error) : console.log(`listening port ${port}`); //устанавливаем порт и отселживаем ошибки
})