const express = require('express');
const nunjucks = require('nunjucks');
const logger = require('morgan');

const bodyParser = require('body-parser');

const app = express();
const port = 3000;

nunjucks.configure('template', {
    autoescape: true,
    express: app,
})

app.use(logger('dev'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

//아래 내용은 정적 파일이나 이미지 등등을 말함
//이 폴더에 파일을 넣어서 url에 검색하면 나옴
app.use('/uploads', express.static('uploads'));

//글로벌 변수를 설정해 항상 로그인이 되어있는지 체크할 수 있음
app.use((req, res, nest) => {
    app.locals.isLogin = true;
    app.locals.req_path = req.path;
    next();
})

const admin = require('./admin');

app.get('/', (req, res) => {
    res.send('hello express');
});

function vipMiddleware(req, res, next) {
    console.log('최우선 미들웨어');
    next();
}

app.use('/admin', vipMiddleware, admin);

//사용하지 않는 next를 _로 처리 가능
app.use((req, res, next) => {
    res.status(400).render('common/404.html');
});

app.use((req, res, _) => {
    res.status(500).render('common/404.html');
});

app.listen(port, () => {
    console.log('Express listening on port', port);
});