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

// let A = +prompt("PLease enter the value");
// while (isNaN(A) || A == "") {
//   A = +prompt("PLease enter the number");
// }
// let count = 0;
// for (n = 1; n < A; n++) {
//   if (n * n < A) {
//     count++;
//   }
// }
// console.log(`Answer: ${count}`);

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
// let a = 1;
// let b = 1;
// let result;
// if (A == 1 || A == 2) {
//   result = 1;
//   console.log(result);
// }
// for (i = 2; i < A; i++) {
//   result= a + b;
//   a = b;
//   b = result;
// }
// console.log(result);

//6th Task

// let A=+prompt("Please enter the first number:");
// while (isNaN(A) || A==""){
//     A=+prompt("Value must be a number.Please try again.:");
     
//    }
// let B=+prompt("Please enter the second number:");
// while (isNaN(B) || B==""){
//     B=+prompt("Value must be a number.Please try again.:");
     
//    }
// let remainder;
// let result;
// let gcd;

// if (A>B) {
//    while (true) {
//     remainder=A%B;
//        if (B%remainder===0) {
//            gcd=remainder;
//            console.log(`The GCD is ${gcd}`);
//                   break;
//        }
//       else{
//          A=B;
//          B=remainder;
//          continue;
//       }
//    }

// }
// else if (A<B) {
//    while (true) {
//     remainder=B%A;
//        if (A%remainder===0) {
//            gcd=remainder;
//            console.log(`The GCD is ${gcd}`);

//                   break;
//        }
//       else{
//          B=A;
//          A=remainder;
//          continue;
//       }
//    }
// }
// else{
//     alert('These numbers are equal.These numbers do not have GCD.')
// }

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

//8th task


let A=+prompt("Please enter the first number:");
while (isNaN(A)){
    A=+prompt("Value must be a number.Please try again.:");
     
   }
let B=+prompt("Please enter the second number:");
while (isNaN(B)){
    B=+prompt("Value must be a number.Please try again.:");
     
   }
   let digit=0;
while (A>0) {
    digit=A%10;
    if (B.toString().includes(digit.toString())) {
        console.log('YES!');
        break;
    }
    A=(A-digit)/10;
    
}
if (A<=0 && !B.toString().includes(digit.toString())) {
    console.log('NO!');
    
}