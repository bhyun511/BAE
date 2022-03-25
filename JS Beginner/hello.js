/* 
JS 기본 문법 {
    확장자: html
    인코딩: utf-8
    들여쓰기 칸맞추기


    변수 Variable   - 변하는 값
    var book;   - 선언
    var book = "책";    - 값 할당
    var book = "책",    - 다수 작성 (콤마)
        point = 123;   
    - 의미를 부여하여 변수 이름 작명 (시맨틱 Semantic)

    var point = 123, point = 456;
    point = 789;
    - 왼쪽에서 오른쪽으로 처리 [123-> 456 -> 789]


    주석 
    //  - 한 줄 주석
    /* ~  * /   - 블록 주석 (4~5줄)
    /** ~ * /   - 코딩 관려, 프로그램 설명 문서를 자동으로 만들어주는 툴
    

    console.log()
    - 소괄호() 안에 작성 된 값을 브라우저 콘솔창에 출력
    - 소괄호() 안에 작성한 값을 파라미터 값이라 부름
    개발자도구 (Ctrl+Shift+I)


    정수 - 소수가 없는 숫자
    실수 - 소수가 있는 숫자 
    - 정수와 실수 구분 하지 않음

    상수 - 변경할 수 없는 값

    상수 변수 
    - 상수가 설정 된 변수
    - 하지만 변수기 때문에 값 변경 가능

    상수 변수 표기 법
    - 코딩관례 - 영문 대문자(var ONE = 1;)
    - 상수로 사용한다는 시맨틱 선언


    진수
    - 10진수 : 123
    - 16진수 : 0xff; [255]
        0x - 16진수를 나타냄 값X
        A:10,B:11,C:12,D:13,E:14,F:15
        0xff = (16*15 + 15)
        0xfff = (16*16*15) + (16*15)
    - 8진수
    - 2진수


    데이터 타입 (자료형)
    var value = 123;    - 숫자 타입
    var value = "sports";   - 문자 타입

    typeof 연산자
    - 데이터 타입 반환
    var point =123;
    log(typeof point);
    [number]
    var book = "책";
    log(typeof book);
    [string]

    언어타입 - JS 가능
    Undefined, Null, Boolean, String, Number, Object
    스펙타입 - JS 불가능
    Reference, List, Completion, Property, Descriptor...등등

    Number 타입 (숫자 타입)
    - 부호(+,-)를 가진 값
    - 특수한 3개 값
        - NaN : Not-a-Number
            var point = 1 * "A";
            log(point);
            [NaN]
        - Infinity : 양수 무한대
        - -Infintiy : 음수 무한대

    String 타입 (문자 타입)
    - "" 또는 '' 사이에 값을 작성
    - 값에 따옴표까지 작성할 시에는 작은 따옴표' 안에 큰 따옴표" , 큰 따옴표" 안에 작은 따옴표'

    Undefined 타입
    - undefined
    - 변수의 디폴트 값
    - 변수 선언시 초기 값으로 설정
    - 변수에 undefined 할당가능

    Null 타입 
    - null
    - null과 undefined 차이
        - null은 할당해야 null이 됨
    
    Boolean 타입
    - true, false

    Object 타입
    - {name: value}
        var book = {title: "책", 
                    point: 123};
        log(book);
        [title: 책, point: 123]
    - 프로퍼티: name과 value 하나를 지칭
    - Object는 프로퍼티의 집합

    데이터 타입 정리
    Number
    String
    Undefind
    Boolead
    Object
    (Null은 Object로 나옴)
        log(typeof null);
        log(typeof {book: "책"});
        [object]
        [object]


    연산자 

    연산자 형태
    +,-,*,/,%
    >,>=,<,<=
    ==,!=,===,!==
    콤마(,),typeof,delete,void
    instanceof,in,new 등

    표현식
    표현식 형태
    1+2
    var total = 1+2;
    var value = total / (2+3);
    "표현식을 평가"

    할당 연산자 
    단일 
        - = 하나만 사용
    복합
        - = 앞에 연산자 작성
        - 먼저 앞을 연산한 후 할당
            var point = 7;
            point +=3
            [10]

    + 연산자
    - 양쪽의 표현식을 더함
    - 평가 결과를 연결(한쪽이라도 숫자가 아니면 연결)
        var abc = "ABC";
        var value = 1+3+abc;
        log(value);
        log(typeof value);
        [4abc]
        [string]

    숫자로 변환
    - 연산하기전 우선 숫자로 변환
        값 타입             변환 값
        Undefined           NaN
        Null                +0
        Boolean             true:1, flase:0
        Number              변환 전/후 같음
        String              값이 숫자이면 숫자로 연산(+는 연결)
    
    - 연산자
    - String타입이지만 값이 숫자면 Number타입으로 변환하여 계산
        log("135"-2);
        [133]

    * 연산자
    - 변환 할 수 있으면 변환하여 계산
    - 하나라도 숫자가 아닐때 NaN 반환
        log(10*ture);   [10]
        log(10*"20");   [200]
        log(10*"A");    [NaN]

    / 연산자
    - 하나라도 숫자가 아닐 때 NaN 반환
    - 분모, 분자 모두 0일 때
        - 분모가 0이면 infinity 반환
        - 분자가 0이면 0 반환

    단항 + 연산자 (+value)
    - 값을 Number타입으로 변환
    - 코드 가독성
        - +(더하기)와 착각
        - Number() 도 같은 기능

    단항 - 연산자 (-value)
    - 값의 부호를 바꿈(+ -> - , - -> +)
    - 연산 할 때만 바꿈

    후치 ++ 연산자 (value++)
    - 값을 자동으로 1 증가
        - 문장을 수행한 후 증가
        - 세미콜론 다음부터 증가

    전치 ++ 연산자 (++value)
    - 값을 자동으로 1 증가
        - 바로 증가된 값으로 사용
        
    후치 -- 연산자 (value--)
    - 값을 자동으로 1 감소
        - 문장을 수행한 후 감소
        - 세미콜론 다음부터 감소

    전치 -- 연산자 (--value)
    - 값을 자동으로 1 감소
        - 바로 증가된 값으로 사용
        
    ! 연산자
    - 결과를 true, false로 변환 (true-> false , false -> true)
        - 사용할 때만 변환

    관계 연산자 
    - <, >, <=, >=
    - instanceof 연산자
    - in 연산자

    >,<,>=,<= 연산자
    - String 타입 시 
        - 한 쪽이 String 타입이면 False
            log(1 > "A");
            [false]
        - 양쪽이 모두 String 타입이면 유니코드 사전 순서로 비교
            log("다" > "가");
            [true]

    == 연산자
    - 동등 연산자
    - 값이 같으면 true 다르면 false
    - 값 타입은 비교하지 않음
        log(1 == "1");
        [true]

    != 연산자
    - 부등 연산자
    - 값이 같으면 flase 다르면 true
    - a != b 와 !(a == b) 가 같음

    === 연산자
    - 일치 연산자
    - 값 또는 타입이 모두 같으면 true 다르면 flase
        log(1 === 1);
        [true]
        log(1 === "1");
        [flase]

    !== 연산자
    - 불일치 연산자
    - 값 또는 타입이 같으면 flase 다르면 true

    || 연산자
    - 논리 OR 연산자
    - 표현식의 평과 결과가 하나라도 true 이면 true 아니면 flase
        var value, zero = 0, two = 2;
        log(value || zero || two);
        [2] - true
            - value 변수 값이 undefined 이므로 flase
            - 숫자는 true 이지만 0은 flase zero는 flase
            - two의 변수 값이 2이므로 true
            - true가 되는 변수 값을 반환 
    - 왼쪽 결과가 true 이면 오른쪽음 비교하지 않음
        var one = 1;
        log(one === 1 || two === 2);
        [true]
            - 왼쪽의 결과가 true 이므로 true 반환
            - 왼쪽이 true 이면 오른쪽은 비교하지 않음
            
    && 연산자
    - 논리 AND 연산자
    - 표현식의 평과 결과가 모두 true이면 true 아니면 flase
        var one = 1, two =2;
        log( one && two);
        [2]
            - one의 변수 값이 1이므로 true 
            - true이므로 오른쪽을 비교
            - two의 변수 값이 2이므로 true
            - 모두가 true이며 마지막의 2를 반환
    - 왼쪽 결과가 false 이면 오른쪽은 비교하지 않음

    조건 연산자
    - exp ? exp-1 : exp-2
        - 3항 연산자 라고도 함
    - exp 위치의 표현식을 먼저 평가
        - true이면 exp-1의 결과 반환
        - flase이면 exp-2의 결과 반환
            log(1 === 1 ? "같음" : "다름");
            log(1 === "1" ? "같음" : "다름");
            [같음]
            [다름]

    연산자 우선순위
    - mdn operator precedence (https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)


    문장 

    if
    - 형태
        - if(표현식) 문장1
        - if(표현식) 문장1 else 문장2
    - 조건에 따른 처리
        - 표현식을 평과
        - 평과 결과를 true/flase로 변환
        - true이면 문장1 실행
        - flase이면 문장2 실행
    
    debugger
    - debugger 위치에서 실행 멈춤
    - 중간중간 코드 확인 할떄 사용

    while 
    -  형태
        - while (표현식) 문장
    - 표현식의 평과 결과가 false가 될 때까지 문장을 반복하여 실행 
        - 반복이 종료되는 조건 필요
            var k = 1;
            while (k < 3){
                log(k);
                k++;
            };
            [1]
            [2]
                - 식이 반복되어 k의 값이 계속해서 증가하다가
                k의 값이 3이 되면 표현식에서 false가 되므로 반복 종료

    do ~ while 
    - 형태
        - do 문장 while (표현식)
    - 처리방법은 while문과 동일 
            - 단, do문을 먼저 실행
                var k = 0;
                do {
                    log("do:", k);
                    k++;
                } while (k < 3){
                    log("while:", k);
                };
                [do:0]
                [do:1]
                [do:2]
                [while:3]
                    - 먼저 do문을 실행
                    - while문의 표현식을 평가
                    - 평가 결과가 true이면 다시 do문을 실행
                    - 평가 결과가 false이면 while문 실행 후 종료

    for()
    - 형태
        - for (초깃값opt; 비교opt; 증감opt) 문장
    - 두번째의 비교 표현식의 평과 결과가 true인 동안 문장을 반복 실행
        for (var k = 0; k < 2; k++){
            log(k);
        };
        [0]
        [1]
    - 옵션
        - 증감, 초깃값, 비교 생략 가능


    try-catch
    - 형태
        - try 블록 chtch (식별자) 블록
        - try 블록 finally 블록
        - try 블록 chtch (식별자) 블록 finally 블록
    - try문에서 예외(에러) 발생을 인식
    - 예외가 발생하면  catch 블록 실행
    - finally 블록은 예외와 상관없이 실행

    throw
    - 형태
        - throw 표현식;
    - 명시적으로 예외를 발생
    - 예외가 발생시 catch 실행








} */

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




/*
vscode extension

    1.Auto Rename Tag
    ![image](https://user-images.githubusercontent.com/54615250/153349228-a3bfa08a-b580-43b2-80fa-b9330ccf815f.png)
        - html 작성 중 태그를 변경시 여는 태그와 닫는 태그 모두 수정 해주어야 하는데
        이때 여닫는 태그 중 한 가지만 수정을 해도 두가지 동시에 수정이 된다.

    2.Bracket Pair Colorizer 2
        - 코드를 작성하다보면 괄호를 중첩적으로 사용할때가 생기는데 
        그때 중첩된 괄호를 색으로 구분하여 가독성을 높혀준다. 

    3.Color Highlight
        - 색을 지정할때에 rgb나 16진수 등 색상코드를 입력하면 색의 코드를 배경색을 
        보여주어 현재 무슨 색으로 적용하였는지 바로바로 볼 수 있다. 

    4.CSS Peek
        - id 또는 class를 선택시 적용된 css 내용을 보여주어 
        내용을 다시 확인 하거나 수정할 때에 유용하다.

    5.Live Server
        - 코드를 작성할때에 새로고침을 하지 않아도 실시간으로 
        브라우저에 바로 반영이 되어 확인이 가능하다.

    6.Prettier
        - 코드를 항상 일정하게 정렬해준다. 
        여러 사람이 한 프로젝트를 같이 코딩 해야 할때에 유용하다.

    7.ESLint
        - 
        
    8.Indent-rainbow
        - 들여쓰기한 부분을 컬러를 이용해 단계를 구분 시켜주어 
        한 묶음을 확인하기가 편하다.

    9.HTML CSS Support
        - 해당 문서에 적용 되어있는 CSS를 추천해주어 끝까지 입력하지
        않고 바로 선택하여 손쉽게 작성할 수 있다.

    10.Highlight Matching Tag
        - 여러 태그가 중첩되어 있을 때 해당 태그의 시작과 끝의 태그를 표시해주어
        내용을 수정하거나 태그를 찾기 편하다.

    11.


출처: https://teserre.tistory.com/9 [테서르]
https://ux.stories.pe.kr/150
출처: https://www.biew.co.kr/entry/Visual-Studio-CodeVS-Code-설치방법-및-내가-쓰는-확장-플러그인 [웹퍼블리싱 - 퍼블리싱 이야기 맑은커뮤니케이션]

*/
