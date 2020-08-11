const http = require('http');

//createServer는 express없이 서버를 띄우는 것임
http.createServer((request, response) => {
    //writeHead 200은 http 응답상태코드임 그리고 문서타입도 지정해줌
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    //response.write는 이 서버에 적힌 텍스트나 컨텐츠임
    response.write('Hello Server');
    response.end();
    //listen(3000)은 port 3000에 서버를 띄운다는 말임 ex) localhost:3000
}).listen(3000);

/**
http 상태코드
1xx : 조건부응답
2xx : 응답성공
3xx : 리다이렉션
4xx : 요청오류
5xx : 서버오류
*/