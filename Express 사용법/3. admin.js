//router를 활용한 서버코딩
const express = require('express');
const router = express.Router();

function testMiddleWare(req, res, next) {
    console.log('첫번째 미들웨어');
    next();
}

function loginRequired(req, res, next) {
    if (로그인이되어있지않으면) {
        res.redirect(로그인창으로);
    } else {
        next();
    }
}

//여기서 testMiddleWare를 거치고 (req, res)를 호출
router.get('/', testMiddleWare, (req, res) => {
    res.send('admin 이후 url');
});

router.get('/products', (req, res) => {
    //res.send('admin products');
    //여기서 template는 nunjucks 폴더를 이미 설정해놔서 상관없음
    res.render('admin/products.html', {
        message: 'hello',
        //여기서 autoescape: true 이므로 태그도 같이 나옴
        //만약 이걸 바꾸려면 {{online | safe}}를 하면 됨
        online: `<h1>태그가 출력됩니다.</h1>`
    });
});

//form bodyparser 내용임
router.get('/products/write', (req, res) => {
    res.render('admin/write.html');
});

//form bodyparser로 post를 받아준다
router.post('/products/write', (req, res) => {
    res.send(req.body);
});

/**
REST API
GET /users => 사용자정보
POST /users => 사용자추가
GET /users/(ID) => 한명만 볼때
PUT /users/(ID) => 한명 수정하기
DELETE /users/(ID) => 삭제
*/

module.exports = router;