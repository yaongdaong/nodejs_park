const http = require("http"); // http 객체 생성

let count = 0;

// 노드 서버 객체 생성
const server = http.createServer((req, res) => {
    console.log((count += 1));
    res.statusCode = 200;
    res.setHeader("Content-Type","text/plain"); // 헤더 설정
    res.write("hello\n"); // 응답값 설정
    //prettier-ignore
    setTimeout(()=>{
        res.end("Node.js"); 
    },2000);
});

server.listen(8000,()=>console.log("Hello Node.js"));
