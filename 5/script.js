"use strict";
console.log("Hello World!");

let array = [1, 2, "dog!", 1, 2, "cat!"];

console.log(array[0]); //1
let animal = array[2];
console.log(animal); //dog!
array[3] = "pig!"; //arrayの要素は定数ではないので代入できる
array[4] += array[0];
console.log(array); //[1,2,dog!,'pig',3,'cat!']

array = [1, 2, 3, "dah", "!!"]; //arrayそのものは定数なのでエラー

array = [1, 2, 3, "dah", "!!"];

for (let i = 0; i < 5; i += 1) {
  console.log(array[i]); //1,2,3,dah,!!
  array[i] = i; //要素の値の書き換え
}
console.log(array); //[0,1,2,3,4]

console.log(array.length); //5

array = [1, 2, 3];
for (let el of array) {
  console.log(el); //1,2,3
}
