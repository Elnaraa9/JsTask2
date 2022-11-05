// 1st Task

// let A=+prompt('Please enter the value:');
// while (isNaN(A) || A == "") {
//   A = +prompt("PLease enter the number");
// }
// for (i=1; i<1000; i++) {
//    if (i%A==0) {
//     console.log(`Answer: ${i}`);
//    }
// }

//2nd Task

let A = +prompt("PLease enter the value");
while (isNaN(A) || A == "") {
  A = +prompt("PLease enter the number");
}
let count = 0;
for (n = 1; n < A; n++) {
  if (n * n < A) {
    count++;
  }
}
console.log(`Answer: ${count}`);

//3rd Task

// let A = +prompt("PLease enter the value");
// while (isNaN(A) || A == "") {
//   A = +prompt("PLease enter the number");
// }
// let largestDivisor = 0;
// for (i = 1; i < A; i++) {
//   if (A % i==0) {
//     largestDivisor = i;
//   }
// }
// console.log(`Largest divisor is: ${largestDivisor}`);

// 4th Task

// let A = +prompt("PLease enter the value");
// while (isNaN(A) || A == "") {
//   A = +prompt("PLease enter the number");
// }
// let B = +prompt("PLease enter the value");
// while (isNaN(B) || B == "") {
//   B = +prompt("PLease enter the number");
// }

// let sum = 0;
// if (A > B) {
//   for (i = B; i < A; i++) {
//     if (i % 7 == 0) {
//       sum += i;
//     }
//   }
//   console.log(`Answer: ${sum}`);
// } else if (A < B) {
//   console.log(`B can not be larger than A`);
// } else {
//   console.log(`B can not be equal A`);
// }

//5th Task

// let A = +prompt("PLease enter the number");
// while (isNaN(A) || A == "") {
//   A = +prompt("PLease enter the number");
// }
// let a=0;
// let b=1;
// let result;
// if (A==1 || A==2) {
//   result=1;
//   console.log();
// }
// for(i=1; i<A; i++){

// }

//6th Task

//7th Task

// let A = +prompt("PLease enter the value");
// while (isNaN(A) || A == "") {
//     A = +prompt("PLease enter the number");
// }
// let reverse = 0;
// while(A>0) {
//     reverse *= 10;
//     reverse += A % 10;
//     A = Math.floor(A / 10);
// }
// console.log(reverse);
