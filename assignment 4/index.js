"use strict";
//1. Hello Variable
let greeting = "Hello World";
console.log(greeting);
//2. Basic Math
let num1, num2;
num1 = 5;
num2 = 10;
console.log("Addition=", num1 + num2);
console.log("Substraction=", num1 - num2);
console.log("Multiplication=", num1 * num2);
console.log("Division=", num1 / num2);
//3. Swapping Values
let a, b;
a = 5;
b = 12;
a = a + b; //17
b = a - b; //5
a = a - b;
console.log("a=", a);
console.log("b=", b);
//5. Modulus Operator
let num3, num4;
num3 = 10;
num4 = 7;
console.log("remainder=", num3 % num4);
//6. Increment Challenge
let q = 10;
q++;
console.log("prefix", q);
++q;
console.log("postfix", q);
//7. Logical Gates
let e = true;
let f = false;
let g = true;
const AND_gate = e && f && g;
const OR_gate = e || f || g;
const Not_gate_e = !e;
const Not_gate_f = !f;
const Not_gate_g = !g;
console.log("AND_gate=", AND_gate);
console.log("OR_gate=", OR_gate);
console.log("Not_gate_e=", Not_gate_e);
console.log("Not_gate_f=", Not_gate_f);
console.log("Not_gate_g=", Not_gate_g);
//8. Compound Assignment
let x = 15;
x += 3;
console.log("Adition", x);
x -= 5;
console.log("Substraction", x);
x *= 3;
console.log("Multiplication", x);
x /= 10;
console.log("Division", x);
