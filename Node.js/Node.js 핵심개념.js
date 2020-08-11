//Node.js의 모든 것

/**
 1. every
 every 함수는 조건이 맞으면 다 수행하고 True or False로 반환을 함.
 밑 결과는 2>2가 False이기 때문에 다음 것을 수행하지 않고 False로 반환함. 
 */
const arr = [1, 2, 3];
const isBiggerThanOne = arr.every(key => key > 2);
console.log(isBiggerThanOne);

/**
 2. Find, includes
 Find는 해당하는 데이터 값을 찾고 그 값을 return함
 includes는 이 행렬에 이 데이터를 가지고 있으면 True 없으면 False를 반환하는 함수임
 */

const arrg = ['node.js', '올인원'];

const ret = arrg.find(key => key === '올인원');
const res = arrg.includes('node.js');
console.log(ret);
console.log(res);

/**
  3. ForEach
  ForEach는 For문과 비슷한데 코드를 간단하게 함
  비동기 코드를 수행할 때 조심히 사용하여야 함
*/

const newArr = [];
arr.forEach(item => {
    newArr.push(item);
})
console.log(newArr);

/**
 4. Map과 Filter
 여기서 map은 모든 행렬에 각각 +1을 더해 반환함
 filter 1보다 큰 것만 반환함
*/

const a = [1, 2, 3];
const b = a.map(x => x + 1);
const f = a.filter(x => x > 1);
console.log(b);
console.log(f);

/**
 6. Object Assign vs Spread
 전자는 오브젝트에 할당하는 의미, 두개의 obj를 합침
 후자는 직관적으로 배열 또는 다른 객체들을 하나로 합칠 수 있음
*/

const obj = {
    title: 'node.js 올인원 패키지'
}

const newObj = {
    name: '패스트 캠퍼스'
}

//Object는 Global 변수를 의미함
const asd = Object.assign({}, obj, newObj);
console.log(asd);

//spread는 객체 뿐만 아니라 배열 등등 다 가능함
const qwe = {
    ...obj,
    ...newObj
}

console.log(qwe)

/**
 7. Set
 내장된 자료구조
*/

const test = new Set()

test.add(1)
test.add(1)
test.add(2)
    //자료가 중복되지 않음을 확인함
for (const item of test) {
    console.log(item)
}

//has는 자료구조 안에 이것이 있는지 확인하는 용도로 True or False를 반환함
const zxc = test.has(0)
console.log(zxc)

/**
 8. some
 최소 한개이상의 요소가 조건을 만족하면 True를 반환하는데 every와 다름
*/

const poi = arr.some(key => key < 2)
console.log(poi)

/**
 9. Template String
 한문자열안에서 +,-,x 등을 활용해 변수와 상수, 숫자 등 모든 것들을 표현 가능함
 이를 styled.componenet에서도 사용 가능함
*/

//기존 방법
let str = 'node.js'
str += '올인원 패키지'

//Template String을 활용한 방법
const details = '자세한 내용'
str += `올인원 패키지${details}`

const int = 1
str += `${str}의 값은 ${int}`

//()도 없이도 출력 가능함
console.log `입력`

/**
 10. String
 별도로 선언필요 없음
*/

//const는 상수형으로 변화x 그러나 let은 변수형이라 변화o임
let string = 'node.js 올인원 패키지'

//n으로 시작
let isStartWith = string.startsWith('n')

//올인원 포함
let isIncludes = string.includes('올인원')

//지로 끝남
let isEndWith = string.endsWith('지')

const checkIfContains = () => {
    if (isStartWith && isIncludes && isEndWith) {
        return true
    }
}

const nji = checkIfContains()
console.log(nji)

/**
 11. Type Checking
*/

const srt = 'node.js'
const array = []
const OBJ = {}

//이런식으로 돌려서 data type을 알 수 있음
console.log(typeof OBJ)

/**
 12. Hoisting
 함수의 사용이 정의보다 먼저 호출되어도 미리 메모리에 저장해놓는 것을 말함
*/

say('hi')

function sqy(word) {
    console.log(word)
}

/**
 13. IIFE
 즉시 실행함수로 다른 변수나 함수들이 함부로 접근하는 것을 막음
 즉시 해석해서 실행시킴
*/

(function() {
    var lang = 'js';
})();
//여기서 lang에 대해 접근할 수 없음 -> 오류 발생
//console.log(lang)

//이때는 함수를 정의하는 것이 아닌 함수 안에 return 값을 가져오게 됨
var r = (function() {
    var lang = 'js';
    return lang
})();
console.log(r)

/**
 14. setInterval
 특정 시간마다 이 함수가 실행되게 만듬
*/

setInterval(() => {
    console.log('hi')
}, 1000)

/**
 15. error Handling
*/

//a가 오류가 발생하면 catch가 실행되고 e는 오류내용임
try {
    a
} catch (e) {
    console.log('Err ' + e)
}

//예제 : a가 선언되지 않아도 해결됨
try {
    a
} catch (e) {}
console.log('a')

/**
 16. Arrow Functions
*/

//'use strict'는 뭐지?
const add = (var1, var2) => var1 + var2
console.log(add(1, 2))

API.prototype.get = (resource) => {
    new Promise((resolve, reject) => {
        http.get(this.uri + resource, (data) => {
            resolve(data);
        });
    });
};

//예제 : Curried Function
//Closure
const getDiscount = rate => price => price * rate;
const getTenpercentOff = getDiscount(0.1)
getTenpercentOff(price)

//17. Class
class cacheManager {
    constructor() {
        this.config = []
    }
    a
}