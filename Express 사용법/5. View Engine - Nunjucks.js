/**
view engine은 html 등 템플릿을 가져오는 방식인데 여기서 Nunjucks 방식을 가져옴
일단 npm install nunjucks으로 설치를 진행함 
*/

const express = require('express');
const nunjucks = require('nunjucks');

const app = express();
const port = 3000;

//template는 폴더이름
nunjucks.configure('template', {
    //화면 오류가 나왔을때 자바스크립트가 나오면 보안상 이슈가 있어서 방지해줌
    autoescape: true,
    //app은 위에 const app과 동일해야함
    express: app,
})

const admin = require('./admin');

app.get('/', (req, res) => {
    res.send('hello express');
});

app.use('/admin', admin);

app.listen(port, () => {
    console.log('Express listening on port', port);
});