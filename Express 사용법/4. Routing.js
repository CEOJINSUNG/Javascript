//이 내용은 Router기반으로 이루어짐
const express = require('express');

const app = express();
const port = 3000;

//왜 이렇게 하냐면 수많은 페이지가 생성되었을 때 아래와 같은 방식으로 다 적기 힘들기 때문에 파일을 나눠서 함
const admin = require('./admin');

app.get('/', (req, res) => {
    res.send('hello express');
});

//아직 middleware를 알지는 못함 일단 admin을 만들어봄
app.use('/admin', admin);

app.listen(port, () => {
    console.log('Express listening on port', port);
});