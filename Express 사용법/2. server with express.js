/**
실행방법
0. npm init과 npm install express 실행
1. 터미널을 켜서 해당 폴더로 간다
2. node '파일이름'을 치면 실행이 됨
3. nodemon '파일이름'을 치면 내가 내용을 변경하면 바로 반영됨 
*/

const express = require('express');

const app = express();
const port = 3000;

//get은 화면을 띄었을 때 이렇게 보여줘라는 의미
//'/'은 url을 의미함
app.get('/', (req, res) => {
    res.send('hello express')
});

//여기서는 localhost: 3000/fastcampus를 의미
app.get('/fastcampus', (req, res) => {
    res.send('fastcampus get');
});

//이거는 실행되었는지 보려고 작성했던 것으로 터미널에서 보여짐
app.listen(port, () => {
    console.log('Express listening on port', port);
});

/*
package.js를 활용해 시작하려면 scripts를 바꾸면 됨
scripts: {
    start: "nodemon app.js",
    dev: "nodemon app.js",
}
dev인 경우 npm run dev만 해도 실행이 됨 다른 이름으로 해도 되나?
*/