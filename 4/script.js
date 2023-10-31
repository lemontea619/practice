'use strict';
console.log('Hello World!');

for(let i=0;i<5;i+=1){
    console.log('Hello World!');
}

for(let biscuit=1; biscuit<=128;biscuit*=2){
    console.log(`ポケットを叩くとビスケットが${biscuit}つ`);
}

for(let num=1; num<=10;num+=1){
    if(num%5==0){
        break;//forから抜け出す
    }
    console.log(num);
}
console.log('for文から出た')


for(let num=1;num<=10;num+=1){
    if(num%3==0){
        continue;//breakと交互に置き換えてみる
    }
    console.log(num);
}
console.log('for文から出ました')


const element =document.createElement('p');
element.textContent='Hello World!';
document.body.appendChild(element);


const ul=document.getElementById('list');//親要素がul、これを呼び出す
for(let i=0;i<5;i+=1){
    const li=document.createElement('li');//子要素のliを生成
    li.textContent=`子要素${i}号`;//liエレメントのtextContentに代入
    ul.appendChild(li);
}

