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
        - -Infinity : 음수 무한대

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
    Undefined
    Boolean
    Object
    (Null은 Object로 나옴)
        log(typeof null);
        log(typeof {book: "책"});
        [object]
        [object]
}


연산자{

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
        Boolean             true:1, false:0
        Number              변환 전/후 같음
        String              값이 숫자이면 숫자로 연산(+는 연결)
    
    - 연산자
    - String타입이지만 값이 숫자면 Number타입으로 변환하여 계산
        log("135"-2);
        [133]

    * 연산자
    - 변환 할 수 있으면 변환하여 계산
    - 하나라도 숫자가 아닐때 NaN 반환
        log(10* true);   [10]
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
    - 값이 같으면 false 다르면 true
    - a != b 와 !(a == b) 가 같음

    === 연산자
    - 일치 연산자
    - 값 또는 타입이 모두 같으면 true 다르면 false
        log(1 === 1);
        [true]
        log(1 === "1");
        [false]

    !== 연산자
    - 불일치 연산자
    - 값 또는 타입이 같으면 false 다르면 true

    || 연산자
    - 논리 OR 연산자
    - 표현식의 평과 결과가 하나라도 true 이면 true 아니면 false
        var value, zero = 0, two = 2;
        log(value || zero || two);
        [2] - true
            - value 변수 값이 undefined 이므로 false
            - 숫자는 true 이지만 0은 false zero는 false
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
    - 표현식의 평과 결과가 모두 true이면 true 아니면 false
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
        - false이면 exp-2의 결과 반환
            log(1 === 1 ? "같음" : "다름");
            log(1 === "1" ? "같음" : "다름");
            [같음]
            [다름]

    연산자 우선순위
    - mdn operator precedence (https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)
}


문장{

    if
    - 형태
        - if(표현식) 문장1
        - if(표현식) 문장1 else 문장2
    - 조건에 따른 처리
        - 표현식을 평과
        - 평과 결과를 true/false로 변환
        - true이면 문장1 실행
        - false이면 문장2 실행
    
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
        - try 블록 catch (식별자) 블록
        - try 블록 finally 블록
        - try 블록 catch (식별자) 블록 finally 블록
    - try문에서 예외(에러) 발생을 인식
    - 예외가 발생하면  catch 블록 실행
    - finally 블록은 예외와 상관없이 실행

    throw
    - 형태
        - throw 표현식;
    - 명시적으로 예외를 발생
    - 예외가 발생시 catch 실행

    strict 모드
    - 형태
        - "use strict"
    - 엄격한 JS 문법 사용의 선언
    - 작성한 위치부터 적용
    - ES5부터 지원
    - 예시
        - use strict 미작성
            book = "책";
            log(book);
            [책]
                - var을 작성하지 않음에도 변수가 선언되며 값이 할당 된다.
        - use strict 작성
            "use strict";
            try {
                book = "책";
                log(book);
            } catch(error){
                log(error.message);
            }
            [error.message]
                - 문법이 엄격하게 사용되기 때문에 var을 작성하지 않으면 변수가 선언되지않음
                - 코딩 실수를 예방할 수 있으므로 use strict 선언은 필수
}

함수(Function){

    함수 
        -형태
            function book()[
                var title = "JS 책";
            ];

            var point = function(one, two){
                var total = one + two;
                var bonus = total + 100;
            };
        - 구성 요소
            - function 키워드
            - 함수 이름
            - 파라미터 ()
                - 매개 변수, 인자, 아규컨트로도 부름
            - 함수 Body {}
                - 함수 코드, 소스 텍스트로도 부름
        - 이름 규칙
            - 첫 문자
                - 영문자, $, 언더바: 사용 가능
                - 숫자, &,*,@,+: 사용 불가
            - 함수 이름 작명 권장
                - 함수 이름과 파라미터로 기능을 알 수 있도록 시맨틱을 부여하며 작성
        - 이름 관례
            - calculatePoint()처럼 동사로 시작
            - 두 개 이상의 단어를 사용할 때
                - 두 번째 단어부터 명사 사용
                - 명사의 첫 문자를 대문자로 시용
                - CamelCase 형태라고 부름
            - 동사 + 명사 형태로 동적인 모습

    함수 호출
        function setValue(one, two){
            var total = one + two;
        };
        setValue(10,20);

        - 호출 받는 함수 [function setValue()]
            - 호출되었을 때 실행되는 함수
        - 파라미터 [(one, two)]
            - 호출한 함수에서 넘겨준 값을 받음
            - 소괄호()안에 파라미터 이름 작성
        - 형태 [setValue()]
            - 함수 이름과 소괄호() 작성
            - 함수 이름만 작성하면 호출되지 않음
        - 파라미터 [(10,20)]
            - 호출된 함수에 넘겨줄 값을 작성
            - 소괄호()안에 작성

    return
        - 형태
            - return 표현식opt;
        - 표현식의 평가 결과 반환
            function getPoint(){
                return 10 * 30;
            };
            var result = getPoint();
            log(result);
            [300]
        - return 또는 표현식을 작성하지 않으면 undefined 반환
        - return과 표현식은 한 줄에 작성
}

오브젝트(Object){

    프로퍼티
        - 형태
            - {name: value}
        - 따옴표 작성 생략
        - 프로퍼티 안의 프로퍼티(확장)
        - 오브젝트를 객체라고도 부름

    프로퍼티 추가, 변경
        var obj = {};
        obj.abc = 123;
            - obj 오브젝트에 abc가 있다면 abc의 값이 123으로 변경되고
            없다면 abc: 123이 추가됨
    
    작성 방법
        - 점(.)과 프로퍼티 이름 사용
            var book = {};
            book.title = "JS책";
            log(book);
            [{title: JS책}]
        - 대괄호[] 사용
            var book = {};
            book[title] = "JS책";
            log(book);
            [{title: JS책}]
        - 변수 이름 작성
            var book = {title = "JS책"};
            var varName = "title"
            book[varName] = "HTML책";
            log(book);
            [{title: HTML책}]

    for~in
        - 오브젝트에서 프로퍼티를 열거
        - 형태
            - for (변수 in 오브젝트) 문장;
            - for (표현식 in 오브젝트) 문장;
        - for (var item in sports) {}
            var sports = {
                soccer: "축구",
                baseball: "야구"
            };
            for (var item in sports){
                log(item);
                log(sports[item]);
            };
            [soccer]
            [축구]
            [baseball]
            [야구]
                - 프로퍼티 이름이 item에 설정
                - sports[item]으로 프로퍼티 값을 구함
                - 프로퍼티 작성한 순서대로 읽혀진다는 것을 보장하지 않음
}

빌트인(Built-in){

    빌트인
        - 값 타입, 연산자, 오브젝트를 사전에 만들어 놓는 것 

    빌트인 오브젝트
        - Number 오브젝트
            - 1,2,3과 같은 숫자,상수,지수를 처리하는 오브젝트
        - Array 오브젝트
            - [1,2,"A","가나다"] 형태
        - Function 오브젝트
            - function abc(){} 형태
        - Math 형태
            - abs(), round(), 등의 수학 계산
        - Date 오브젝트
            - 연월일, 시분초
        - JSON 오브젝트
            - [{"name": "value"}] 형태
            - 서버와 데이터 송수신에 사용
        - RegExp 오브젝트
            - ^,$와 같은 정규 표현식
        - 글로벌 오브젝트
            - 소스 파일 전체에서 하나만 존재
            - 모든 코드에서 공유, 접근 가능
            - 전역 객체라고도 하며, 뉘앙스에 차이 있음
}

Number 오브젝트 {

    Number 오브젝트
        - 숫자 처리를 위한 오브젝트
        - Number 오브젝트에 숫자 처리를 위한 함수와 프로퍼티가 포함되어 있으며 
        함수를 호출하여 숫자 처리를 하게 됩니다.

    프로퍼티 리스트
        - 이름 : 개요
            new Number() : 인스턴스 생성
            Number() : 숫자 값으로 변환하여 반환
            constructor : 생성자
            toString() : 숫자 값을 문자열로 변환
            toLocaleString() : 숫자값을 지역화 문자로 변환
            valueOf() : 프리미티브 값 반환
            toExponential() : 지수 표기로 변환
            toFixed() : 고정 소숫점 표기로 변환
            toPrecision() : 고정 소숫점 또는 지수 표기로 변환

    Number()
        - 구분 : 데이터(값)
            파라미터 : 변환할 값opt
            반환 : 변환한 값
        - 파라미터 값을 Number 타입으로 변환
        - 파라미터 값이 String 타입이라도 값이 숫자이면 변환 가능
        - 숫자로 변환할 수 있으면 변환
        - 파라미터 값을 작성하지 않으면 0을 반환

    Number 상수
        - 상수 이름 : 값
            Number.MAX_VALUE : 1.7976931348623157 * 10 (308승)
            Number.MIN_VALUE : 5 * 10 (-324승)
            Number.NaN : Nat-a-Number
            Number.POSITIVE_INFINITY : infinity
            Number.NEGATIVE_INFINITY : - infinity
        - 상수는 값을 변경 삭제할 수 없음

    프리미티브
        - 가장 낮은 단계의 값
        - 코드가 지정해주는 이름
        - 대괄호 두개는 자바 엔진이 생성해주었다는 뜻 [[]]

    toLocaleString()
        - 지역화로 변환

    toExponential()
        - 숫자를 지수 표기로 변환
        - 표시 방법
            var value = 1234;
            log(value.toExponential());
            [1.234e+3]
                - 변환 대상의 첫 자리만 소수점 앞에 표시
                - 나머지는 소수점 다음에 표시
                - 지수(e+) 다음에 정수에서
            var value = 123456;
            log(value.toExponential(3));
            [1.235e+5]
                - 파라미터에 3을 작성 했으므로 1.234e+3 으로 표시 되어야하지만
                4 다음에 오는 수가 5이기때문에 반올림 되어 1.235e+3 으로 나타난다.

    toFixed()
        var value = 1234.567
        log(value.toFixed(2));
        log(value.toFixed());
        [1234.57]
        [1235]
            - 파라미터에 2를 작성하였기 때문에 소수 두자리까비 표시함(반올림)
            - 파라미터에 값을 작성하지 않으면 소수 첫째자리에서 반올림하여 정수로 표시한다.
}
String 오브젝트{

    문자열 연결
        var book = "12" + "AB" + "가나"
        [12AB가나]

    프로퍼티 리스트 
        new String() : 인스턴스 생성
        String() : 문자열로 변환하여 반환
        fromCharCode() : 유니코드를 문자열로 변환하여 반환
        length() : 문자열의 문자 수 반환
        toString() : 문자열로 변환
        charAt() : 인덱스 번째 문자 변화
        indexOf() : 일치하는 문자열 중에서 가장 작은 인덱스 반환 (가장 왼쪽)
        lastIndexOf() : 일치하는 문자열 중에서 가장 큰 인덱스 반환 (가장 오른쪽)
        concat() : 문자열 연결
        toLowerCase() : 영문 소문자로 변환
        toUpperCase() : 영문 대문자로 변환
        trim() : 문자열 앞뒤의 화이트 스페이스 삭제
        substring() : 시작에서 끝 직전까지 값 반환
        substr() : 시작 위치부터 지정한 문자 수 반환
        slice() : 시작에서 끝 직전까지 값 반환. substring()과 차이 있음
        match() : 매치 결과 반환
        replace() : 매치 결과를 지정한 값으로 대체
        search() : 검색된 첫 번째 인덱스 반환
        split() : 구분자로 분리하여 반환
        charCodeAt() : 인덱스 번째 문자를 유니코드로 반환
        localeCompare() : 값의 위치를 1,0,-1로 반환

    trim()
        - trim()은 공백을 지워준다.
            var value = "  ABCD  ";
            console.log(value.length);
            console.log(value.trim().length);
            [8]
            [4]

    substring()
        var value = "01234567";
        - 뒷 인덱스는 직전까지만 반환
            console.log(value.substring(2,5));
            [234]
        - 첫 번쨰 파라미터만 작성하면 첫 번째 인덱스부터 끝까지 반환
            console.log(value.substring(5));
            [567]
        - 파라미터를 모두 작성하지 않으면 전체 반환
            console.log(value.substring());
            [01234567]

    substr()
        - 시작 인덱스부터 지정한 문자수를 반환
            console.log(value.substr(2,3)); 
            [234]

    slice()
        - 시작부터 뒷 인덱스 직전까지 반환 
            console.log(value.slice(1,4));
            [123]

    match()
        - 매치 결과를 배열로 반환
            - 매치 대상에 정규 표현삭의 패턴을 적용하여 매치하고 매치 결과를 반환
                var value = "Sports";
                log(value.match(/s/));
                log(value.match("spo"));
                [[s]]
                [null]
                    - Sports 에 s가 있으므로 매치되어 매치 된 문자를 배열로 반환
                    - Sports 에 spo가 있지만 대문자 s이므로 null 반환
            - 문자열 작성 가능, 엔진이 정규 표현식을 변환하여 매치

    replace()
        - 매치 결과를 파라미터에 작성한 값으로 대체하여 반환
            console.log(value.replace("p", "바꿈"));
            [S바꿈orts]
        - 두 번째 파라미터에 함수를 작성하면 먼저 함수를 실행하고 함수에서 반환한 값을 대체
            function change(){
                return "함수";
            };
            console.log(value.replace(/p/, change()));
            [S함수orts]

    search()
        - 매치 된 첫 번째 인덱스 반환
            console.log(value.search(/p/));
            [2]
        - 매치되지 않으면 -1 반환
            console.log(value.search("K"));
            [-1]

    split()
        - 분리 대상을 분리자로 분리하여 배열로 반환
            console.log("12_34_56".split("_")); 
            ['12', '34', '56']
        - 분리자를 작성하지 않은 경우
            var value = "123";
            console.log(value.split(""));
            ['1', '2', '3']
            console.log(value.split());
            [123]
        - 두 번째 파라미터에 반환 수를 작성
            var value = "12_34_56_78";
            console.log(value.split("_", 3));
            [12,34,56]
}

object 오브젝트(ES3){ 
    자바 스크립트 오브젝트 구분
        - 빌트인 오브젝트
            - 사전에 만들어 놓은 오브젝트
            - 빌트인 Number, String 오브젝트
        - 네이티브 오브젝트
            - JS 스펙에서 정의한 오브젝트
            - 빌트인 오브젝트가 포함됨
            - JS 코드를 실행 할 때 만드는 오브젝트
            - Argument 오브젝트
        - 호스트 오브젝트 
            - 빌트인, 네이티브 오브젝트를 제외한 오브젝트
                - window, DOM 오브젝트
            - JS 호스트 환경에서 브라우저의 모든 요소 기술을 연결하고 융합하여 이를 제어

    프로퍼티 리스트
        new Object() : 파라미터 데이터 타입의 인스턴스 생성
        object() : Object 인스턴스 생성
        hasOwnProperty() : 프로퍼티 소유 여부 반환
        propertyIsEnumerable() : 프로퍼티 열거 여부 반환
        isPrototypeOf() : prototype의 존재 여부 반환
        toString() : 문자열로 변환
        toLocaleString() : 지역화 문자열로 변환

    빌트인 오브젝트 구조
        - 오브젝트 이름
        - 오브젝트.prototype
            - 인스턴스 생성 가능 여부 기준
            - 프로퍼티를 연결하는 오브젝트
        - 오브젝트.prototype.constructor
            - 오브젝트의 생성자
        - 오브젝트.prototype.method
            - 메소드 이름과 함수 작성

    함수와 메소드 연결
        - 함수
            - 오브젝트에 연결
            - Object.create()
        - 메소드
            - 오브젝트의 prototype에 연결
            - Object.prototype.toString()

    함수, 메소드 호출
        - 함수 호출 방법
            - Object.create();
                log(Object.create); // object에 create가 존재하므로 함수 출력
                log(object.prototype.create); // object.prototype에 create 가 존재하지 않으르로 undefined 출력
        - 메소드 호출 방법
            - Object.prototype.toString();
            - 또는 인스턴스를 생성하여 호출
        - 함수와 메소드를 구분해야 하는 이유
            - JS 코드 작성 방법이 다르기 떄문
            - 함수는 파라미터에 값을 작성하고 메소드는 메소드 앞에 값을 작성

    hasOwnProperty()
        - 인스턴스에 파라미터 이름이 존재하면 true, 존재하지 않으면 false 반환
            var obj = {value: 123};
            var own = obj.hasOwnProperty("value");
            console.log(own);
            [true]
        - 자신이 만든 것이 아니라 상속받은 프로퍼티 이면 false 반환

    propertyIsEnumerable()
        - 오브젝트에서 프로퍼티를 열거할 수 있으면 true  반환
            console.log(obj.propertyIsEnumerable("value"));
            [true]
        - 오브젝트에서 프로퍼티를 열거할 수 없으면 false 반환

    isPrototypeOf()
        -  파라미터에 작성한 오브젝트에 object 위치에 작성한 prototype이 존재하면 true 반환
        존재하지 않으면 false 반환
            var numObj = new Number(123);
            console.log(Object.prototype.isPrototypeOf(numObj));
            [true]
}

Function 오브젝트{

    프로퍼티 리스트
        new Function() : 인스턴스 생성
        Function() : 인스턴스 생성
        length : 함수의 파라미터 수
        call() : 함수 호출
        apply() : 함수호출: 배열을 파라미터로 사용
        toString() : 함수를 문자열로 변환
        bind() : 새로운 오브젝트를 생성하고 함수 실행
}

Global 오브젝트{

    - 개요
        - 모든 <Script>를 통해 하나만 존재
            - new 연산자로 인스턴스 생성 불가
            - 모든 코드에서 공유
        -  이름은 있지만 오브젝트 실체가 없고 오브젝트를 작성(사용) 할 수 없음
    - 함수, 변수
        - 함수 안에 작성한 것
            - 지역 함수, 로컬 함수라고 부름
            - 지역 변수, 로컬 변수라고 부름
        - 전역 객체라고 부르기도 하지만 Global은 오브젝트 이름
    
    프로퍼티 리스트
        isNaN() : NaN 여부. NaN이면 true, 아니면 false 반환
        isFinite() : 유한대 여부. 유한이면 true, 아니면 false 반환
        parseInt() : 정수로 변환하여 반환
        parseFloat() : 실수로 변환하여 반환
        eval() : 문자열을 JS 코드로 간주하여 실행
        encodeURI() : URI 인코딩
        encodeURIComponent() : URI 확장 인코딩
        decodeURI() : encodeURI 함수이 인코딩 값을 디코딩
        decodeURIComponent() : encodeURIComponent 함수의 인코딩 값을 디코딩

    ParseInt()
        - 값을 정수로 변환하여 반환
            console.log(parseInt(123.56))
            [123]
        - 값만 반환
            console.log(parseInt("-123.45"));
            console.log(parseInt("123px"));
            console.log(parseInt("12ABCD"));
            [-123]
            [123]
            [12]
        - 0 또는 빈 문자열 제외
            console.log(parseInt(0012))
            console.log(parseInt("    123"))
            [10]
            [123]
        - 값을 작성하지 않으면 NaN, undefined가 아닌 것은 기준이 Number이기 때문
            console.log(parseInt());
            [NaN]
        - 진수를 적용하여 값을 변환
            console.log(parseInt(13, 16));
            console.log(parseInt("0x13"));
            [19]
            [19]

    ParasFloat()
        - 값을 실수로 변환하여 반환
            - JS는 기본적으로 실수로 처리하므로 실수로 변환하는 것이 의미가 없지만 문자열의 실수 변환은 의미가 있음
                console.log(parseFloat("-123.45")+6);
                console.log(parseFloat("12.34AB56"));
                [-114.45]
                [12.34]
        - 지수, 공백 변환

    isNaN()
        - 값의 NaN 여부 반환
        - 숫자 값이 아니면 true 반환
            console.log(isNaN("ABC"));
            console.log(isNaN());
            [true]
            [true]
        - 숫자 값이면 false 반환 또는 값이 숫자로 변환이 되면 False
            console.log(isNaN(123));
            console.log(isNaN("123"));
            console.log(isNaN(null));
            [false]
            [false]
            [false]

    isFinite()
        - 값이 Infinity, NaN이면 false 반환, 아니면 즉 finite(유한) 이면 true 반환
            console.log(isFinite(0 / 0)); // NaN
            console.log(isFinite(1 / 0)); // Infinity
            console.log(isFinite("ABC"));
            [false]
            [false]
            [false]
        - 값이 숫자로 변환되면 숫자로 인식
            console.log(isFinite(123));
            console.log(isFinite("123"));
            console.log(isFinite(false));
            [true]
            [true]
            [true]

    encodeURI()
        - URI를 인코딩하여 반환
        - 형태
            - 인코딩 제외 문자를 제외하고 "%16진수%16진수" 형태로 변환
                var uri = "data?a=번&b=호";
                console.log(encodeURI(uri));
                [data?a=%EB%B2%88&b=%ED%98%B8]
        - 인코딩 제외 문자
            - 영문자, 숫자
            - # ; ? : @ & = + $ , - _ . ! ~ * ( ) .

    encodeURIComponent()
        - : / ? : @ & = + $ 을 인코딩 하는 것이 recodeURI()와 차이점

    decodeURI()
        - 인코딩을 디코딩 하여 반환
        - 파라미터에 encodeURI()로 인코딩한 문자열 작성
            var uri = "data?a=%EB%B2%88&b=%ED%98%B8";
            console.log(decodeURI(uri));
            [data?a=번&b=호]

    decodeURIComponent()
        - 인코딩을 디코딩 하여 반환
        - 파라미터에 encodeURIComponent()로 인코딩한 문자열 작성

    eval()
        - 파라미터의 문자열을 JS 코드로 간주하여 실행
            var result = eval("parseInt('-123.45')");
            console.log(result);
            [-123]
        - 실행 결과를 반환 값으로 사용 값을 반환하지 않으면 undefined 반환

        - 보안에 문제가 있다고 알려져 있음 (사용 비권장)
}

Array 오브젝트(ES3){

    개요
        - 빌트인 오브젝트
        - Array(배열) 형태
            - [123,"ABC", "가나다"]
            - 대괄호 안에 콤마로 구분하여 값 작성
        - 배열 엘리먼트
            - [123,"ABC"]에서 123,"ABC" 각각을 엘리먼트 또는 요소라고 부름
            - 2의 32승(4,294,967,297) -1개
        - 인덱스
            - 엘리먼트 위치를 인덱스라고 부름
            - 왼쪽부터 0번 인덱스, 1번 인덱스
        - 배열 특징
            - 엘리먼트 작성이 순서를 갖고 있음
            - 배열 전체를 작성한 순서로 읽거나 인덱스로 값을 추출할 수 있음

    배열 생성 방법
        - new Array()로 생성
            var book = new Array();
        - Array()로 생성
            var book = Array();
        - 대괄호로 생성 (일반적)
            vae book = [];

    엘리먼트 작성 방법
        var book = ["책1",'책2'];
            - 대괄호 안에 콤마로 구분하여 다수 작성 가능
            - String 타입은 큰따옴표, 작은따옴표 모두 가능
            - JS의 모든 타입의 값, 오브젝트 사용 가능
            - 값을 작성하지 않고 콤마만 작성하면 undefined가 설정됨

    배열 차원
        - 1차원 배열
            - 대괄호 하나에 엘리먼트 작성
            - [12,34,56] 형태
                var list = [12,34,56];
                for (var k = 0; k < list.length; k++) {
                    console.log(list[k]);
                };
                [12]
                [34]
                [56]
        - 2차원 배열
            - 배열 안에 1차원 배열을 작성
            - [[12,34,56]] 형태
            var list = [[12,34,56]];
                for (var k = 0; k < list.length; k++){
                    var one = list[k];
                    for (var m = 0; m < one.length; m++){
                        console.log(one[m]);
                    };
                };
                [12]
                [34]
                [56]
        - 3차원 배열
            - 배열 안에 2차원 배열을 작성
            - [[[12,34,56]]] 형태
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
                [12]
                [34]
                [56]

    프로퍼티 리스트
        new Array() : 인스턴스 생성
        Array() : 인스턴스 생성
        length : 배열의 엘리먼트 수 반환
        unshift() : 배열 처음에 엘리먼트 삽입
        push() : 배열 끝에 엘리먼트 첨부
        concat() : 배열 끝에 값을 연결
        slice() : 인덱스 범위의 엘리먼트를 복사
        join() : 엘리먼트와 분리자를 결합하여 반환
        toString() : 엘리먼트를 문자열로 연결하여 반환
        toLocaleString() : 엘리먼트를 지역화 문자로 변환하고 문자열로 연결하여 반환
        shift() : 첫 번째 엘리먼트를 삭제하고 삭제한 엘리먼트 반환
        pop() : 마지막 엘리먼트를 삭제하고 삭제한 엘리먼트를 반환
        splice() : 엘리먼트를 삭제하고 새로운 엘리먼트를 삽입, 삭제한 엘리먼트 반환
        sort() : 엘리먼트 값을 Unicode 순서로 분류하여 반환
        reverse() : 엘리먼트 위치를 역순으로 바꾸어 반환

    new Array()
        - Array 인스턴스 생성, 반환
        - 배열 생성 기준
            - 파라미터에 따라 배열 생성 기준이 다름
            - 파라미터를 작성하지 않으면 빈 배열
                var obj = new Array();
                console.log(typeof obj);
                console.log(obj.length);
                [object]
                [0]
            - 작성한 순서로 엘리먼트에 설정
                var one = new Array(10, 20);
                console.log(one);
                var two = new Array([30, 40]);
                console.log(two);
                [[10, 20]]
                [[[30,40]]]
            - 파라미터에 숫자를 작성하면 작성한 숫자 만큼의 엘리먼트 생성
                var obj = new Array(3);
                console.log(obj);
                [undefined,undefined,undefined]

    Array()
        - Array 인스턴스 생성, 반환
            - new Array()와 생성 방법 및 기능 같음
        - 인스턴스 생성 논리
            - new Array()는 new 연산자에서 생성자 함수를 호출하여 인스턴스 생성
            - Array()는 직접 생성자 함수를 호출하여 인스턴스 생성

    length
        - 배열 [1,2,3]
            - length 값은 3
            - Array 오브젝트에 {length: 3} 형태로 설정
                var value = [1,2,3];
                console.log(value.length);
                [3]
            - 처음 인덱스는 0, 마지막 인덱스는 2
        - 열거 / 삭제는 할 수 없지만, 변경은 가능
        - length 값을 변경하면 배열의 엘리먼트 수가 변경됨 
            var value = [1,2,3];
            value.length = 5;
            console.log(value);
            [1,2,3,undefined,undefined]
            var value = [1,2,3];
            value.length = 2;
            console.log(value);
            [1,2]

ES3 필요없어서 중간에 그만둠
}

Array 오브젝트(ES5){

    프로퍼티 리스트
        isArray() : 배열 여부 반환. 배열이면 true, 아니면 false 반환
        indexOf() : 지정한 값에 일치하는 엘리먼트 인덱스 반환
        lastIndexOf() : indexOf()와 같으며, 마지막 인덱스 반환
        forEach() : 배열을 반복하면서 콜백 함수 실행
        every() : 반환 값이 false일 때까지 콜백 함수 실행
        some() : 반환 값이 true일 때까지 콜백 함수 실행
        filter() : 콜백 함수에서 true를 반환한 엘리먼트 반횐
        map() : 콜백 함수에서 반환한 값을 새로운 배열로 반환
        reduce() : 콜백 함수의 반환 값을 파라미터 값으로 사용
        reduceRight() : reduce()와 같음. 단, 배열의 끝에서 앞으로 진행

    isArray()
        - 체크 대상이 배열이면 true, 아니면 false
        - isArray()는 함수
            console.log(Array.isArray([1,2]));
            console.log(Array.isArray(123));
            [true]
            [false]
        - isArray() 함수가 필요한 이유
            console.log(typeof {a: 1});
            console.log(typeof [1, 2]);
            console.log(typeof null);
            [object]
            [object]
            [object]

    indexOf()
        - 파라미터 값과 같은 엘리먼트의 인덱스 반환
            - 왼쪽에서 오른쪽으로 검색
            - 값이 같은 엘리먼트가 있으면 검색 종료
                var value = [1,2,5,2,5];
                console.log(value.indexOf(5));
                [2]
            - 데이터 타입까지 체크
                var value = [1,2,5,2,5];
                console.log(value.indexOf("5"));
                [-1]
        - 두 번째 파라미터의 인덱스부터 검색
            var value = [1,2,5,2,5];
            console.log(value.indexOf(5,3));
            [4]
        - String과 Array의 indexOf() 차이
            console.log("ABCDE".indexOf("C",-2));
            var list = ["A","B","C","B","C"];
            console.log(list.indexOf("C", -2));
            [2]
            [4]

    forEach()
        - 배열의 엘리먼트를 하나씩 읽어 가면서 콜백 함수 호출
        - 콜백 함수 파라미터
            - 엘리먼트 값, 인덱스, 배열전체'
                var list = ["A", "B", "C"];
                list.forEach(function(el, index, all){
                    console.log(el + ":" + index + ":" + all);
                });
                [A:0:A,B,C]
                [B:1:A,B,C]
                [C:2:A,B,C]
        -break,continue 사용 불가, throw는 사용 가능
        - 콜백 함수 분리(독립성)
            var list = ["A", "B", "C"];
            var fn = function(el, index, all){
                console.log(el + ":" + index + ":" + all);
            };
            list.forEach(fn);
            [A:0:A,B,C]
            [B:1:A,B,C]
            [C:2:A,B,C]
        - this로 오브젝트 참조
            var list = [1,2];
            var fn = function(el, index, all){
                console.log(el+ this.ten);
            };
            list.forEach(fn, {ten: 10});
            [11]
            [12]

        - forEach()를 시작할 때 반복 범위 결정
        - 엘리먼트를 추가하더라도 처리하지 않음
            var list = [1,2,3];
            var fn = function(el, index, all){
                if (index === 0){
                    list.push("AB");
                };
                console.log(el);
            };
            list.forEach(fn);
            [1]
            [2]
            [3]
        - 현재 인덱스보다 큰 인덱스으 값을 변경하면 변경된 값을 사용
            var list = [1,2,3];
            var fn = function(el, index, all){
                if (index === 0){
                    list[2] = 345;
                };
                console.log(el);
            };
            list.forEach(fn);
            [1]
            [2]
            [345]
            - 현재 인덱스보다 작은 인덱스의 값을 변경하면 처리하지 않음
        - 현재 인덱스보다 큰 인덱스의 엘리먼트를 삭제하면 배열레서 삭제되므로 반복에서 제외됨
            var list = [1,2,3];
            var fn = function(el, index, all){
                if (index === 0){
                    delete list[2];
                };
                console.log(el);
            };
            list.forEach(fn);
            [1]
            [2]
            - 추가는 처리하지 않지만, 처리는 반영

    for() 와 forEach()
        - forEach()는 시맨틱 접근
            - 처음부터 끝까지 반복한다는 시맨틱
            - 반복 중간에 끝나지 않는다는 시맨틱
            - 시맨틱으로 소스 코드의 가독성 향상
        - for()는 함수 코드를 읽어야 알 수 있음
            - break, continue
        - forEach()는 반복만 하며
            - 콜백 함수에서 기능처리, this 사용 가능
        - forEach()는 인덱스 0부터 시작
            - for()와 같이 인덱스 증가 값을 조정할 수 없음
            - 뒤에서 앞으로 읽을 수도 없음, 이것도 시맨틱 접근

    every()
        - forEach()처럼 시맨틱 접근
        - 배열의 엘리먼트를 하나씩 읽어가면서
            - false를 반환할 때까지 콜백 함수 호출
            - 즉, false가 반환되면 반복 종료
            - false를 반환하지 않으며 true 반환
                var value = [20, 10, 30, 40];
                var fn = function(el, index, all){
                    console.log(el);
                    return el > 15;
                };
                var result = value.every(fn);
                console.log("결과:", result);
                [20]
                [10]
                [결과: false]
        - false가 되는 조건이 배열의 앞에 있을 때 효율성 높음

    some()
        - every()처럼 시맨틱 접근
        - 단, true를 반환할 때까지 콜백 함수호출
            - 즉, true가 반환되면 반복 자동 종료
            - true를 반환하지 않으면 false 반환
                var value = [10, 20, 30, 40];
                var fn = function(el, index, all){
                    console.log(el);
                    return el > 15;
                };
                var result = value.some(fn);
                console.log("결과:", result);
                [10]
                [20]
                [결과: true]
        - true가 되는 조건이 배열의 앞에 있을 때 효율성 높음

    filter()
        - forEach()처럼 시맨틱 접근
        - 배열의 엘리먼트를 하나씩 읽어가면서 콜백 함수에서 true를 반환하면 현재 읽은 엘리먼트를 반환
            var value = [10, 20, 30, 40];
            var fn = function(el, index, all){
                return el > 15;
            };
            var result = value.filter(fn);
            console.log(result);
            [20]
            [30]
            [40]
        - 조건에 맞는 엘리먼트를 추려낼 때 유용

    map()
        - forEach()처럼 시맨틱 접근
        - 배열의 엘리먼트를 하나씩 읽어가면서 콜백함수에서 반환 값을 새로운 배열에 첨부하여 반환
            var value = [10, 20, 30];
            var fn = function(el, index, all){
                return el + this.add;
            };
            var point = {add: 100};
            var result = value.map(fn, point);
            console.log(result);
            [110]
            [120]
            [130]

    reduce()
        - forEach()처럼 시맨틱 접근
        - 배열 끝까지 콜백 함수 호출
            - 파라미터 작성 여부에 따라 처리가 다름
        - 콜백 함수만 작성한 경우
            - 즉, 파라미터를 하나만 작성
            var value = [1,3,5,7];
            var fn = function(prev, curr, index, all){
                console.log(prev+"."+curr);
                return prev+curr;
            };
            var result = value.reduce(fn);
            console.log("결과:", result);
            [1,3]
            [4,5]
            [9,7]
            [결과: 16]
        - 처음 콜백 함수를 호출할 때
            - 인덱스[0]의 값을 직전 값에 설정
            - 인덱스[1]의 값을 현재 값에 설정
            - 인덱스에 1을 설정
        - 두 번째로 콜백 함수를 호출할 때
            - 콜백 함수에서 반환된 값을 직전 값에 설정
            - 인덱스 [2]의 값을 현재 값에 설정

    reduceRight()
        - reduce()와 처리 방법 같음
        - 배열 끝에서 앞으로 하나씩 읽어가면서 콜백 함수에서 반환한 값을 반환
            var value = [1,3,5,7];
            var fn = function(prev, curr, index, all){
                console.log(prev+"."+curr);
                return prev+curr;
            };
            var result = value.reduceRight(fn);
            console.log("반환:", result);
            [7,5]
            [12,3]
            [15,1]
            [반환: 16]
}

Boolean 오브젝트 {

    프로퍼티 리스트
        new Boolean() : 인스턴스 생성
        Boolean() : Boolean 타입으로 변환

    new Boolean()
        - Boolean 인스턴스 생성
        - 파라미터 값을 true 또는 False로 변환하여 프리미티브에 설정
            var value = [undefined, null, NaN, 0, ""];
            for (var k = 0; k < value.length; k++){
                var obj = new Boolean(value[k]);
                console.log(obj + 1);
            };
            [1] *5
        - 문자열이면서 값이 있으면 true로 변환
            var value = [12,"1","0","false"];
            for (var k = 0; k < value.length; k++){
                var obj = new Boolean(value[k]);
                console.log(obj + 1);
            };
            [2] *4

    Boolean()
        - Boolean 값으로 변환
        - 인스턴스를 생성하지 않고 true 또는 false로 변환
            var value = [12,"1","0","false"];
            for (var k = 0; k < value.length; k++){
                console.log(Boolean(value[k]) + 1);
            };
            [2] *4
}

자바스크립트 특징{

    특징
        - 지비스크립트는 스크립팅 언어
        - 스크립팅 언어 특징
            - 소스 파일의 코드를 사전에 컴파일하여 실행 파일을 만들어 놓지 않고 사용하는 시점에 컴파일 하고 실행
        - 컴파일 순서
            -소스 파일의 위에서부터 아래로 컴파일
            - function 키워드를 만나면 function 오브젝트를 생성
            - 이때, 함수 안의 코드는 컴파일하지 않음 함수가 호출되었을 때, 위의 방법으로 컴파일

    JS와 객체지향
        - 객체 지향 프로그래밍 언어
        - 자바스크립트는 객체 지향 언어
        - 자바스크립트 OOP 구현
            - 다른 언어의 OOP 구현과 차이가 있으므로 비교하는 것은 의미 없음
            - JS 특징이 반영된 OOP 구현

    OOP의 객체
        - 강좌에 필요한 것만 간략하게 다룹니다.
        - 객체
            - 개념적 접근
            - 행위와 속성으로 구성
            - 행위: 먹다, 마시다
            - 속성: 밥, 사이다
}
Object 오브젝트(ES5){

    특징
        - 함수가 추가됨
        - 빌트인 Object의 모든 메소드는 대부분의 빌트인 오브젝트에 첨부됨
        - 빌트인으로 오브젝트를 생성하므로 연결이 많이 발생
        - 함수는 첨부되지 않으므로 연결 부하를 줄일 수 있음

    Object 함수
        defineProperty() : 프로퍼티 추가, 프로퍼티 속성 변경
        defineProperties() : 다수의 프로퍼티 추가, 속성 변경
        getPrototypeOf() : prototype에 연결된 프로퍼티 반환
        getOwnPropertyNames() : 프로퍼티 이름을 배열로 반환
        keys() : 열거 가능 프로퍼티 이름 반환
        getOwnPropertyDescriptor() : 디스크립터 속성 반환
        preventExtensions() : 프로퍼티 추가 금지 설정
        isExtensible() : 프로퍼티 추가 금지 여부 반환
        seal() : 프로퍼티 추가, 삭제 금지 설정
        isSealed() : 프로퍼티 추가, 삭제 금지 여부 반환
        freeze() : 프로퍼티 추가, 삭제/변경 금지 설정
        isFrozen : 프로퍼티 추가, 삭제/변경 금지 여부 반환

    프로퍼티 디스크립터
        value : [[Value]], 설정할 값
        writable : [[Writable]], 값 변경 가능 여부
        get : [[Get]], 값 반환 프로퍼티 함수
        set : [[Set]], 값 설정 프로퍼티 함수
        enumerable : [[Enumerable]], 프로퍼티 열거 가능 여부
        configurable : [[Configurable]], 프로퍼티 삭제 가능 여부

    defineProperty()
        - 대상 오브젝트에 프로퍼티 추가 또는 프로퍼티 속성 변겅
        - 프로퍼티 마다 상태를 갖고 있음
            - 상태란? 변경/삭제/열거 가능 여부
            - 상태가 가능일 때만 처리할 수 있음
            - 프로퍼티를 추가할 때 상태 결정
                var obj = {};
                Object.defineProperty(obj, "book", {
                    value: "JS북",
                    enumerable: true
                });
                console.log(obj);
                [{book: 'JS북'}]

    defineProperties()
        - 다수의 프로퍼치를 추가하거나 속성 변경
            - 함수 기능은 defineProperty()와 같음
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
                [soccer: 축구]
                [basketball:농구]

    프로퍼티 디스크립터
        - 프로퍼티의 속성 이름과 속성 값을 정의
        - 디스크립터 타입 분류
            - 데이터 프로퍼티 디스크립터
            - 악세스 프로퍼티 디스크립터
            - 공용 프로퍼티 디스크립터
            - 디스크립터 타입에 속한 속성만 같이 사용할 수 있음
        - 디스크립터 타입 인식 기준
            - 먼저 value 또는 writable 작성 체크
            - 작성되어 있으면 데이터 프로퍼티 디스크립터 타입으로 인식
        - 데이터와 악세스 프로퍼티 디스크립터를 함께 작성할 수 없으므로 구분 가능

    value
        - 프로퍼티 값을 {value: "JS북"}형태로 작성
            var obj = {};
            Object.defineProperty(obj, "book", {
                value: "JS북",
                enumerable: true
            });
            for (var name in obj){
                console.log(name);
                console.log(obj[name]);
            };
            [book]
            [JS북]
                - for~in에서 "JS북"이 프로퍼티 값이 됨
        - value 속성을 get/set 속성과 같이 작성 불가
            var obj = {};
            Object.defineProperty(obj, "book", {
                value: "JS북",
                // get: function(){}
            });

    writable
        - 프로퍼티 값 변경 가능, 불가
        - writable: true
            - 프로퍼티 변경가능
                var obj = {};
                Object.defineProperty(obj, "book", {
                    value: "JS책",
                    // 변경 가능
                    writable: true
                });
                obj.book = "변경 가능";
                console.log(obj.book);
                [변경 가능]
        - writable: false
            - 디폴트 값: false
            - 프로퍼티 변경 불가 에러가 발생하지 않지만, 값이 변경되지 않음
                var obj = {};
                Object.defineProperty(obj, "book", {
                    value: "JS책",
                    // 변경 가능
                    writable: false
                });
                obj.book = "변경 불가";
                console.log(obj.book);
                [JS책]

    enumerable
        - for~in으로 열거 가능 여부
        - enumerable: true
            - 프로퍼티 열거 가능
                var obj = {};
                Object.defineProperty(obj, "book", {
                    value: "JS북",
                    // 열거 가능
                    enumerable: true
                });
                for (var name in obj){
                    console.log(name, ":" + obj[name]);
                };
                [book :JS북]
        - enumerable: false
            - 디폴트 값: false
            - 프로퍼티 열거 불가
                var obj = {};
                Object.defineProperty(obj, "book", {
                    value: "JS북",
                    // 열거 불가
                    enumerable: false
                });
                for (var name in obj){
                    console.log(name, ":" + obj[name]);
                };

    configurable
        - 프로퍼티 삭제 가능, 불가
        - configurable: true
            - 프로퍼티 삭제 기능
            - value 이외 속성 변경 가능
                var obj = {};
                Object.defineProperty(obj, "book", {
                    value: "JS북",
                    // 삭제 가능
                    configurable: true
                });
                delete obj.book;
                console.log(obj.book);
                [undefined]
        - configurable: false
            - 디폴트 값: false
            - 프로퍼티 삭제불가
            - value 이외 속성 변경 불가
                var obj = {};
                Object.defineProperty(obj, "book", {
                    value: "JS북",
                    // 삭제 불가
                    configurable: false
                });
                delete obj.book;
                console.log(obj.book);
                [JS북]

    get 
        - getter
        - var result = obj.book; 코드를 만나면
            var obj = {};
            Object.defineProperty(obj, "book", {
                get: function(){
                    return "JS책";
                }
            });
            var result = obj.book;
            console.log(result);
            [JS책]
                - obj.book의 get 함수가 호출
                - get 함수에서 "JS책"을 반환
                - 반환된 "JS책"을 result 변수에 할당
        - obj.book.get()처럼 함수로 호출하면 에러 발생

    set
        - Setter
        - obj.book = "JS책"; 코드를 만나면
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
            [JS책]
                - obj.book의 set 힘수를 호출
                - "JS책"을 파라미터 값으로 넘겨 줌
                - data의 title 프로퍼티에 "JS책"을 설정
        - obj.book; 코드를 만나면
            - obj.book의 get 함수가 호출
            - get 함수에서 data.title 값을 반환
            - setter에서 설정한 "JS책"이 반환

    getPrototypeOf()
        - 파라미터의 prototype에 연결된 프로퍼티 반환
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
            [getPoint:function(){}]
            [setPoint:function(){}]
        - 참고
            - setPrototypeOf()가 ES5 스펙에 없고 ES6에 있음

    getOwnPropertyNames()
        - 오브젝트의 프로퍼티 이름을 배열로 반환
        - 열거 가능 여부를 체크하지 않음
        - 자신이 만든 프로퍼티가 대상
            - 다른 오브젝트에서 받는 프로퍼티는 제외
                var obj = {};
                Object.defineProperties(obj, {
                    book: {value: "책"},
                    point: {value: 123}
                });
                var names = Object.getOwnPropertyNames(obj);
                for (var k = 0; k < names.length; k++){
                    console.log(names[k]);
                };
                [book]
                [point]

    keys()
        - 열거 가능 프로퍼티 이름 반환
            - (enumerable: true)
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
            [book]

    getOwnPropertyDescriptor()
        - 프로퍼티 디스크립터의 속성 이름, 값 반환
            - 다른 오브젝트에서 받은 프로퍼티는 제외
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
                [value:책]
                [writable:true]
                [enumerable:true]
                [configurable:false]

    preventExtensions()
        - 오브젝트에 프로퍼티 추가 금지 설정
        - 프로퍼티 삭제, 변경은 가능
        - 추가 금지를 설정한 후에는 추가 가능으로 변경 불가 
            var obj = {};
            Object.preventExtensions(obj);
            try {
                Object.defineProperty(obj, "book", {
                    value: "책"
                });
            }catch (e) {
                console.log("추가 불가");
            };
            [추가 불가]

    isExtensible()
        - 오브젝트에 프로퍼티 추가 금지 여부 반환
            - true: 추가 가능, false: 추가 불가
                var obj = {};
                Object.defineProperty(obj, "book", {
                    value: "책",
                });
                console.log(Object.isExtensible(obj));
                Object.preventExtensions(obj);
                console.log(Object.isExtensible(obj));
                [true]
                [false]

    seal()
        - 오브젝트에 프로퍼티 추가, 삭제 금지 설정
        - 추가 금지는 오브젝트 단위로 설정하고 삭제 금지는 프로퍼티 단위로 설정
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
            [추가 불가]
        - 추가 금지를 하더라도 변경은 가능

    isSealed()
        - 오브젝트에 프로퍼터 추가, 삭제 금지 여부 반환
            - true: 불가, false:가능
                var obj = {};
                Object.defineProperty(obj, "book", {
                    value:"책", writable: true
                });
                console.log(Object.isSealed(obj));
                Object.seal(obj);
                console.log(Object.isSealed(obj));
                [false]
                [true]

    freeze()
    - 오브젝트에 프로퍼티 추가, 삭제, 변경 금지 설정
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
        [변경 불가]
        [JS책]

    isFrozen()
        - 오브젝트에 프로퍼티 추가, 삭제, 변경 금지 여부 반환
            - true: 불가, false: 가능
                var obj = {};
                Object.defineProperty(obj, "book", {
                    value: "책",
                    writable: true
                });
                console.log(Object.isFrozen(obj));
                Object.freeze(obj);
                console.log(Object.isFrozen(obj));
                [false]
                [true]
}

JSON 오브젝트{
    개요
        - JavaScript Object Notion
            - 빌트인 오브젝트
            - new 연산자로 인스턴스 생성 불가
        - JSON 주요 기능
            - 데이터 송수신의 변환 기준
            - 텍스트이므로 전송 속도가 빠름
            - 파일 확장자: json,txt도 사용 가능
        - JS 데이터 타입 지원
            - 다름 언어도 사용하지만, 완전하게 같지 않을 수도 있음

    stringify()
        - JS 타입을 JSON 타입의 문자열로 변환
            - JSON.stringify() 형태로 호출
}


*/

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

var obj = new Number("123");
console.log(obj.valueOf());



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
