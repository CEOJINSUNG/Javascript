/**
npm install morgan을 설치함
*/
const express = require('express');
const nunjucks = require('nunjucks');
const logger = require('morgan');

//내장모듈이라 별도 npm install 필요 없음
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

nunjucks.configure('template', {
    autoescape: true,
    express: app,
})

//미들웨어 셋팅 app.use로 사용가능 'dev'는 호출 번호임
app.use(logger('dev'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

const admin = require('./admin');

app.get('/', (req, res) => {
    res.send('hello express');
});

function vipMiddleware(req, res, next) {
    console.log('최우선 미들웨어');
    next();
}

app.use('/admin', vipMiddleware, admin);

app.listen(port, () => {
    console.log('Express listening on port', port);
});