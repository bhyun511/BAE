// 코딩 1
var even = 0, odd = 0;
for (var i = 1 ; i <= 50 ; i++) { i % 2 === 0 ? even += i : odd += i;};
console.log("짝수합:", even);
console.log("홀수합:", odd);
console.log("총합:", (even+odd));

// switch문 
var month = 7, season;
switch(month){
    case 12:
    case 1:
    case 2:
        season = "겨울";
        break;
    case 3:
    case 4:
    case 5:
        season = "봄";
        break;
    case 6:
    case 7:
    case 8:
        season = "여름";
        break;
    case 9:
    case 10:
    case 11:
        season = "가을";  
        break;
};
console.log(season);

// debugger;

var obj = new Number("123");
// console.log(obj.valueOf());
// [123]

var value = 20;
// console.log(20 === value.toString());
// console.log(value.toString(16));
// [false]
// [14]

// console.log(20.toString()); // .이 두개여야한다
console.log(20..toString());
// [20]

var value = "ABC";
for (var k = 0; k < value.length; k++){
    // console.log(value[k]);
};
// [A]
// [B]
// [C]

var value = "  ABCD  ";
// console.log(value.length);
// console.log(value.trim().length); // trim()은 공백을 지워준다.
// [8]
// [4]

var value = "01234567";
console.log(value.substring(2,5)); // 뒷 인덱스는 직전까지만 반환
// [234]
console.log(value.substring(5)); // 첫 번쨰 파라미터만 작성하면 첫 번째 인덱스부터 끝까지 반환
// [567]
console.log(value.substring()); // 파라미터를 모두 작성하지 않으면 전체 반환
// [01234567]

console.log(value.substr(2,3)); // 시작 인덱스부터 지정한 문자수를 반환
// [234]

console.log(value.slice(1,4)); // 
// [123]


var value = "Sports";
console.log(value.match(/s/)); // Sports 에 s가 있으므로 매치되어 매치 된 문자를 배열로 반환
console.log(value.match("spo")); // Sports 에 spo가 있지만 대문자 s이므로 null 반환
// [[s]]
// [null]

console.log(value.replace("p", "바꿈")); // 매치 결과를 파라미터에 작성한 값으로 대체하여 반환
// [S바꿈orts]
function change(){
    return "함수";
};
console.log(value.replace(/p/, change())); // 두 번째 파라미터에 함수를 작성하면 먼저 함수를 실행하고 함수에서 반환한 값을 대체
// [S함수orts]

console.log(value.search(/p/)); // 매치 된 첫 번째 인덱스 반환 p가 두 번째 자리에 있으므로 1
// [2]
console.log(value.search("K")); // 매치되지 않으면 -1 반환 K가 없으므로 -1
// [-1]

console.log("12_34_56".split("_")); // 분리 대상을 분리자로 분리하여 배열로 반환
// ['12', '34', '56']

var value = "123";
console.log(value.split("")); // 분리자를 작성하지 않은 경우
// ['1', '2', '3']
console.log(value.split());
// [123]
var value = "12_34_56_78";
console.log(value.split("_", 3)); // 두 번째 파라미터에 반환 수를 작성
// ['12', '34', '56']
console.log(value.split("A")); // 분리자가 분리 대상에 없으면 분리 대상 전체를 하나의 배열로 반환
// [12_34_56_78]

// Object.create();
// console.log(Object.create); // object에 create가 존재하므로 함수 출력
// console.log(object.prototype.create); // object.prototype에 create 가 존재하지 않으르로 undefined 출력

var obj = {value: 123};
var own = obj.hasOwnProperty("value"); // 인스턴스에 파라미터 이름이 존재하면 true 반환
console.log(own);
// [true]
var own = obj.hasOwnProperty("v"); // 인스턴스에 파라미터 이름이 존재하지 않으면 false 반환
console.log(own);
// [false]
console.log(obj.propertyIsEnumerable("value")); // 오브젝트에서 프로퍼티를 열거할 수 있으면 true 반환
// [true]

var numObj = new Number(123);
console.log(Object.prototype.isPrototypeOf(numObj)); // 파라미터에 작성한 오브젝트에 object 위치에 작성한 prototype이 존재하면 true, 존재하지 않으면 false 반환
// [true]

function getTotal(one, two){
    return one + two;
};
var result = getTotal.call(this, 10, 20);
console.log(result);
// [30]

var value = {one: 10, two: 20};
function getTotal(){
    return this.one + this.two;
};
var result = getTotal.call(value);
console.log(result);
// [30]

function getTotal(one) {
    return one + arguments[1] + arguments[2];
};
var result = getTotal.apply(this, [10,20,30]);
console.log(result);
// [60]

console.log(parseInt(123.56)) // 값을 정수로 변환하여 반환
// [123]
console.log(parseInt("-123.45")); // 값만 반환
console.log(parseInt("123px"));
console.log(parseInt("12AB34")); // 34는 변환되지 않고 12에서 잘림
// [-123]
// [123]
// [12]
console.log(parseInt(0012)) // 0 또는 빈 문자열 제외
console.log(parseInt("    123"))
console.log(parseInt()); // 값을 작성하지 않으면 NaN, undefined가 아닌 것은 기준이 Number이기 때문
// [10]
// [123]
// [NaN]
console.log(parseInt(13, 16)); // 진수를 적용하여 값을 변환
console.log(parseInt("0x13"));
// [19]
// [19]

console.log(parseFloat("-123.45")+6); // 값을 실수로 변환하여 반환
console.log(parseFloat("12.34AB56"));
// [-114.45]
// [12.34]

console.log(isNaN("ABC")); // 숫자 값이 아니면 true 반환
console.log(isNaN());
// [true]
// [true]
console.log(isNaN(123)); // 숫자 값이면 false 반환 또는 값이 숫자로 변환이 되면 False
console.log(isNaN("123"));
console.log(isNaN(null));
// [false]
// [false]
// [false]

// 값이 Infinity, NaN이면 false 반환, 아니면 즉 finite(유한) 이면 true 반환
console.log(isFinite(0 / 0)); // NaN
console.log(isFinite(1 / 0)); // Infinity
console.log(isFinite("ABC"));
// [false]
// [false]
// [false]
console.log(isFinite(123)); // 값이 숫자로 변환되면 숫자로 인식
console.log(isFinite("123"));
console.log(isFinite(false));
// [true]
// [true]
// [true]

var uri = "data?a=번&b=호"; // 인코딩 제외 문자를 제외하고 "%16진수%16진수" 형태로 변환
console.log(encodeURI(uri));
// [data?a=%EB%B2%88&b=%ED%98%B8]

// 파라미터에 encodeURI()로 인코딩한 문자열 작성
var uri = "data?a=%EB%B2%88&b=%ED%98%B8"; // 파라미터에 encodeURI()로 인코딩한 문자열 작성
console.log(decodeURI(uri));
// [data?a=번&b=호]

var result = eval("parseInt('-123.45')"); // 파라미터의 문자열을 JS 코드로 간주하여 실행
console.log(result);
// [-123]

// 1차원 배열
var list = [12,34,56];
for (var k = 0; k < list.length; k++) {
    console.log(list[k]);
};
// [12]
// [34]
// [56]

// 2차원 배열
var list = [[12,34,56]];
for (var k = 0; k < list.length; k++){
    var one = list[k];
    for (var m = 0; m < one.length; m++){
        console.log(one[m]);
    };
};
// [12]
// [34]
// [56]

// 3차원 배열
var list = [[[12,34,56]]];
for (var k = 0; k < list.length; k++){
    var one = list[k];
    for (var m = 0; m < one.length; m++){
        var two = one[m];
        for (var p = 0; p < two.length; p++){
            console.log(two[p]);
        };
    };
};
// [12]
// [34]
// [56]

var obj = new Array(); // 파라미터를 작성하지 않으면 빈 배열
console.log(typeof obj);
console.log(obj.length);
// [object]
// [0]
var one = new Array(10, 20); // 작성한 순서로 엘리먼트에 설정
console.log(one);
var two = new Array([30, 40]);
console.log(two);
// [[10, 20]]
// [[[30,40]]]
var obj = new Array(3); // new Array(3) 처럼 파라미터에 숫자를 작성하면 3개의 엘리먼트 생성
console.log(obj);
// [undefined,undefined,undefined]

var value = [1,2,3]; //  Array 오브젝트에 {length: 3} 형태로 설정
console.log(value.length);
// [3]
var value = [1,2,3]; // length 값을 변경하면 배열의 엘리먼트 수가 변경됨 
value.length = 5;
console.log(value);
// [1,2,3,undefined,undefined]
var value = [1,2,3];
value.length = 2;
console.log(value);
// [1,2]


console.log(Array.isArray([1,2])); // isArray()는 함수
console.log(Array.isArray(123));
// [true]
// [false]
console.log(typeof {a: 1});
console.log(typeof [1, 2]);
console.log(typeof null);
// [object]
// [object]
// [object]

var value = [1,2,5,2,5]; // 값이 같은 엘리먼트가 있으면 검색 종료
console.log(value.indexOf(5));
// [2]
var value = [1,2,5,2,5]; // 데이터 타입까지 체크
console.log(value.indexOf("5"));
// [-1]
var value = [1,2,5,2,5]; // 두 번째 파라미터의 인덱스부터 검색
console.log(value.indexOf(5,3));
// [4]
console.log("ABCDE".indexOf("C",-2)); // String과 Array의 indexOf() 차이
var list = ["A","B","C","B","C"];
console.log(list.indexOf("C", -2));
// [2]
// [4]

var list = ["A", "B", "C"];
list.forEach(function(el, index, all){
    console.log(el + ":" + index + ":" + all);
});
// [A:0:A,B,C]
// [B:1:A,B,C]
// [C:2:A,B,C]
var list = ["A", "B", "C"];
var fn = function(el, index, all){
    console.log(el + ":" + index + ":" + all);
};
list.forEach(fn);
// [A:0:A,B,C]
// [B:1:A,B,C]
// [C:2:A,B,C]
var list = [1,2];
var fn = function(el, index, all){
    console.log(el+ this.ten);
};
list.forEach(fn, {ten: 10});
// [11]
// [12]

var list = [1,2,3];
var fn = function(el, index, all){
    if (index === 0){
        list.push("AB");
    };
    console.log(el);
};
list.forEach(fn);
// [1]
// [2]
// [3]

var list = [1,2,3];
var fn = function(el, index, all){
    if (index === 0){
        list[2] = 345;
    };
    console.log(el);
};
list.forEach(fn);
// [1]
// [2]
// [345]

var list = [1,2,3];
var fn = function(el, index, all){
    if (index === 0){
        delete list[2];
    };
    console.log(el);
};
list.forEach(fn);
// [1]
// [2]

var value = [20, 10, 30, 40];
var fn = function(el, index, all){
    console.log(el);
    return el > 15;
};
var result = value.every(fn);
console.log("결과:", result);
// [20]
// [10]
// [결과: false]

var value = [10, 20, 30, 40];
var fn = function(el, index, all){
    console.log(el);
    return el > 15;
};
var result = value.some(fn);
console.log("결과:", result);
// [10]
// [20]
// [결과: true]

var value = [10, 20, 30, 40];
var fn = function(el, index, all){
    return el > 15;
};
var result = value.filter(fn);
console.log(result);
// [20]
// [30]
// [40]

var value = [10, 20, 30];
var fn = function(el, index, all){
    return el + this.add;
};
var point = {add: 100};
var result = value.map(fn, point);
console.log(result);
// [110]
// [120]
// [130]

var value = [1,3,5,7];
var fn = function(prev, curr, index, all){
    console.log(prev+"."+curr);
    return prev+curr;
};
var result = value.reduce(fn);
console.log("결과:", result);
// [1,3]
// [4,5]
// [9,7]
// [결과: 16]

var value = [1,3,5,7];
var fn = function(prev, curr, index, all){
    console.log(prev+"."+curr);
    return prev+curr;
};
var result = value.reduceRight(fn);
console.log("반환:", result);
// [7,5]
// [12,3]
// [15,1]
// [반환: 16]

var value = [undefined, null, NaN, 0, ""];
for (var k = 0; k < value.length; k++){
    var obj = new Boolean(value[k]);
    console.log(obj + 1);
};
// [1] *5
var value = [12,"1","0","false"];
for (var k = 0; k < value.length; k++){
    var obj = new Boolean(value[k]);
    console.log(obj + 1);
};
// [2] *4

var value = [12,"1","0","false"];
for (var k = 0; k < value.length; k++){
    console.log(Boolean(value[k]) + 1);
};
// [2] *4

var value = 123;
var book = function(){
    var point = 456;
    var getPoint = function(){
        return point;
    };
    getPoint();
};
book();

var obj = {};
Object.defineProperty(obj, "book", {
    value: "JS북",
    enumerable: true
});
console.log(obj);
// [{book: 'JS북'}]

var obj = {};
Object.defineProperties(obj, {
    soccer: {
        value: " 축구", enumerable: true
    },
    basketball: {
        value: "농구", enumerable: true
    }
});
for (var name in obj){
    console.log(name+":"+obj[name]);
};
// [soccer: 축구]
// [basketball:농구]

// for~in에서 "JS북"이 프로퍼티 값이 됨
var obj = {};
Object.defineProperty(obj, "book", {
    value: "JS북",
    enumerable: true
});
for (var name in obj){
    console.log(name);
    console.log(obj[name]);
};
// [book]
// [JS북]

var obj = {};
Object.defineProperty(obj, "book", {
    value: "JS북",
    // get: function(){}
});

var obj = {};
Object.defineProperty(obj, "book", {
    value: "JS북",
    // 변경 가능
    writable: true
});
obj.book = "변경 가능";
console.log(obj.book);
// [변경 가능]
var obj = {};
Object.defineProperty(obj, "book", {
    value: "JS북",
    // 변경 가능
    writable: false
});
obj.book = "변경 불가";
console.log(obj.book);


var obj = {};
Object.defineProperty(obj, "book", {
    value: "JS북",
    // 열거 가능
    enumerable: true
});
for (var name in obj){
    console.log(name, ":" + obj[name]);
};
// [book :JS북]

var obj = {};
Object.defineProperty(obj, "book", {
    value: "JS북",
    // 열거 불가
    enumerable: false
});
for (var name in obj){
    console.log(name, ":" + obj[name]);
};

var obj = {};
Object.defineProperty(obj, "book", {
    value: "JS북",
    // 삭제 가능
    configurable: true
});
delete obj.book;
console.log(obj.book);
// [undefined]

var obj = {};
Object.defineProperty(obj, "book", {
    value: "JS북",
    // 삭제 불가
    configurable: false
});
delete obj.book;
console.log(obj.book);
// [JS북]

var obj = {};
Object.defineProperty(obj, "book", {
    get: function(){
        return "JS책";
    }
});
var result = obj.book;
console.log(result);
// [JS책]

var obj = {}, data = {};
Object.defineProperty(obj, "book", {
    set: function(param){
        data.title = param;
    },
    get: function(){
        return data.title;
    }
});
obj.book = "JS책";
console.log(obj.book);
// [JS책]







function Book(point){
    this.point = point;
};
Book.prototype.getPoint = function(){};
Book.prototype.setPoint = function(){};
var obj = new Book(100);

var result = Object.getPrototypeOf(obj);
for (var key in result){
    console.log(key + ":" + result[key]);
};
// [getPoint:function(){}]
// [setPoint:function(){}]

var obj = {};
Object.defineProperties(obj, {
    book: {value: "책"},
    point: {value: 123}
});
var names = Object.getOwnPropertyNames(obj);
for (var k = 0; k < names.length; k++){
    console.log(names[k]);
};
// [book]
// [point]

var obj = {};
Object.defineProperties(obj, {
    book: {
        value: "책", enumerable: true
    },
    point: {value: 123}
});
var names = Object.keys(obj);
for (var k = 0; k < names.length; k++){
    console.log(names[k]);
};
// [book]

var obj = {};
Object.defineProperty(obj, "book", {
    value : "책",
    writable: true, enumerable: true
});
var desc = 
Object.getOwnPropertyDescriptor(obj, "book");
for (var key in desc){
    console.log(key + ":" + desc[key]);
};
// [value:책]
// [writable:true]
// [enumerable:true]
// [configurable:false]

var obj = {};
Object.preventExtensions(obj);
try {
    Object.defineProperty(obj, "book", {
        value: "책"
    });
}catch (e) {
    console.log("추가 불가");
};
// [추가 불가]

var obj = {};
Object.defineProperty(obj, "book", {
    value: "책",
});
console.log(Object.isExtensible(obj));
Object.preventExtensions(obj);
console.log(Object.isExtensible(obj));
// [true]
// [false]

var obj = {};
Object.defineProperty(obj, "book", {
    value: "책", writable: true
});
Object.seal(obj);
try{
    Object.defineProperty(obj, "sports", {
        value: "스포츠"
    });
} catch(e){
    console.log("추가 불가");
};
// [추가 불가]

var obj = {};
Object.defineProperty(obj, "book", {
    value:"책", writable: true
});
console.log(Object.isSealed(obj));
Object.seal(obj);
console.log(Object.isSealed(obj));
// [false]
// [true]

var obj = {};
Object.defineProperty(obj, "book", {
    value: "JS책", writable: true
});
Object.freeze(obj);
try {
    Object.defineProperty(obj, "book", {
        value: "포인트"
    });
} catch(e) {
    console.log("변경 불가");
};
console.log(obj.book);
// [변경 불가]
// [JS책]

var obj = {};
Object.defineProperty(obj, "book", {
    value: "책",
    writable: true
});
console.log(Object.isFrozen(obj));
Object.freeze(obj);
console.log(Object.isFrozen(obj));
// [false]
// [true]














// 코딩 2


