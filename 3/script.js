'use strict';




let bmi=27;
console.log(`あなたのBMIは${bmi}:`);
//条件分岐
if(bmi>25){
    console.log('肥満です');
}


const num1=15;
const num2=10;
if(num1 >= num2){
    console.log('num1はnum2以上の値です');
}

const message='Thank you';
if(message=='Thank you'){
    console.log('Thank you,too')
}

bmi=20
if(bmi>= 18.5){
    if(bmi<25){
        console.log('適正体重です')
    }
}
let x=18
if(x<=20 &&(x>10||x==5)){
console.log('この値です')
}

 bmi=25;
console.log(`あなたのBMIは${bmi}:`);
if(bmi>25){
    console.log('肥満です');
}else if(bmi<18.5){
    console.log('低体重です');
}else{
    console.log('肥満ではありません');
}

const msg=bmi>25?'肥満です':'肥満ではありません';
console.log(msg)


document.querySelector('p').textContent='置き換えたい値';


