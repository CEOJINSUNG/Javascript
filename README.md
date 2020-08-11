Node.js에 관하여

1. Semantic Versioning
   - npm에서 버전관리를 위해서 사용하는 경우를 말한다. 이를 통해 간단하게 버전을 관리할 수 있다. 

2. npx와 관련하여
   - npx는 자동으로 설치되어 있음
   - npx는 테스트용으로 잠깐동안 사용하기 위해서 쓰는 도구임
   - npm은 노드 모듈에 설치되는데 npx는 임시폴더에 저장되어 1회성의 목적을 가짐
   - npx를 왜 사용하냐? npm update를 하게 되면 지난 버전을 업데이트하면서 불필요한 것들이 발견되어 오류가 발생할 수 있음

3. nodemon에 대하여
   - npm install nodemon -g으로 실행시킴
   - File -> Auto Save를 미리 설정해놔야 nodemon이 결과를 가져올 수 있음
   - nodemon은 파일에 변화가 생기면 nodemon은 결과를 바로 볼수 있게 도와줌

4. Module.exports에 대하여
   - 외부에서 해당 모듈을 불러모으기 위해 사용하는 방식임
   - module.exports 사용법

         function edit () {}
         function write () {}
         클래스도 호출가능
         class update {}
         module.exports = {
           edit: edit(모듈이름과 함수이름이 같으므로 밑처럼 적음)
           edit,
           write
         }
         module.exports = {
           id: ''
           token: ''
           fn: () => {
             console.log('this is a function')
           }
         }
         or
         module.exports = edit
