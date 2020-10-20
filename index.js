//String
var me1 = 'This here is the value of the ';
    me1 += 'variable and I am writing a lot of text that I just came up with'
console.log(me1)

var me1 = 'Domineke';
var me2 = ' Beard';
console.log(me1 + me2)

var me1 = 1234;

console.log(me1);

//Not The Same
var num = '12';
console.log(num + 2);
console.log(2 + num);
//Not The Same

//Different variable syntax
const num1 = 12;
let num2=12
//Const will make it constant and unchangable
//Let can be changed

console.log(num1);
console.log(num2);

const a = 10;
const b = 5;

console.log( a == b );

const c = 20;
const d = '20';

console.log( c === d );

const e = 30;
const f = 25;

console.log(e != f );
//!= means do they NOT MATCH!!!!

const g = 100;
const h = '50';

console.log( g < h );

if( a != b ) {
    console.log('a and b are not equal')
}
else if (a > b); {
    console.log('a is greater than b')
}

//Ask Kevin about if else statements

if( g === h ) {
    console.log('g and h are equal');
}
else if( g !== h ) {
    console.log('g and h are not equal');
}
else if( g < h ) {
    console.log('g is less than h');
}
else {
console.log('g doesnt know what to do')
}