const express = require('express');
const server = express();
const expressSession = require('express-session');
const bodyParser = require('body-parser');
const connect = require('./configs/database');
const router = require('./routers');
const PORT = 3000;

connect.query('show tables',(err,result) =>{
    console.log(result);
});

// ตั้งค่า Session สำหรับระบบ
server.use(expressSession({
    secret: 'ttvone.com',
    resave: false,
    saveUninitialized: true,
    cookie: {}
}));

// ตั้งค่าการ Parse ตัวแปรเมื่อ Client ส่งข้อมูลเข้ามา
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

// เรียกใช้ router
//server.use('/api',router);
// เรียกใช้งาน routes
server.use('/api',router);

// สร้าง Custom function
server.use(require('./configs/middleware'));

server.get('*', (req, res) => {
    res.end(`<h1>Backend server is started.</h1>`);
});

server.listen(PORT, () => console.log(`Server is started, Port ${PORT}.`))


/* const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
   // res.statusCode = 200;
   // res.setHeader('Content-Type', 'text/plain');
   res.end(`<h1>Backend server is started.</h1>`);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
}); */