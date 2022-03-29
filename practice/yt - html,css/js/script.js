const gender = 'F';
const name = 'Jane';
const isAdult = true;

if(gender ==='M' && (name === 'Mike' || isAdult)){
    console.log('통과')
} else {
    console.log('낫통과')
}

let i = 0;
do {
    i++;
} while (i < 10)

for (let i; i < 10; i++){
    if(i%2){
        continue;
    }
    console.log(i);
}

// let fruit = prompt('무슨 과일?');

switch(fruit){
    case '사과':
        console.log('100');
        break;
    case '바나나':
        console.log('100');
        break;
    case '키위':
        console.log('100');
        break;
    case '멜론':
        console.log('100');
        break;
    case '수박':
        console.log('100');
        break;
    default:
        console.log('없음');
}

// function sayHello(name){
//     let msg = 'Hello';
//     if(name){
//         msg +=', ${name}';
//     }
//     console.log(msg);
// }

// sayHello();
// sayHello('Mike');

// let msg = "welcome";
// let name = "Mike";

// function sayHello(name){
//     let newName = name || 'friend';
//     let msg = "Hello"
//     console.log(msg + '' + name);
// }

// sayHello('Mike');
// console.log(msg);

// let days = ["mon", "tue", "wed"];

// days.push("thu");
// days.unshift("sun");

// for (let index = 0; index < days.length; index++) {
//     console.log(days[index]);
// }

for(let i = 0; i < 10; i++) {
    
}

alert('안녕하세요 ${frult}님');
confirm('딸기');

