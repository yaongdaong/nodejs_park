const http = require("http");
const url = require("url");
http.createServer((req, res) => {
    const path = url.parse(req.url, true).pathname;
    res.setHeader("Content-Type", "text/html");
    if (path in urlMap) {
        urlMap[path](req, res);
        // if (path === "/user") {
        //     user(req, res);
        // } else if (path === "/feed") {
        //     feed(req, res);
    } else {
        notFound(req, res);
    }
}).listen("3000", () => console.log("라우터를 만들어보자!"));

const user = (req, res) => {
    //  쿼리 스트링 데이터를 userInfo에 할당
    const userInfo = url.parse(req.url, true).query;
    // 결과값으로 이름과 나이 설정
    res.end(`[user] name: ${userInfo.name}, age: ${userInfo.age}`);
    // res.end("[user] name : andy, age: 30");
};

const feed = (req, res) => {
    res.end(`<ul>
        <li>picture1</li>
        <li>picture2</li>
        <li>picture3</li>
        </ul>
        `);
};

const notFound = (req, res) => {
    res.statusCode = 404;
    res.end("404 page not found");
};

const urlMap = {
    "/": (req, res) => res.end("HOME"),
    "/user": user,
    "/feed": feed,
};
