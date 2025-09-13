let sentence = "The quick brown fox jumps over the lazy dog";
let fact = " is an EngLish pangram";
//finding length of sentence
let length = sentence.length;
console.log("Length of sentence is :",length);
//finding character at position
let char = sentence.charAt(13);
console.log("Character at position 13 is :",char);
//finding character code at position
let charCode = sentence.charCodeAt(7);
console.log("Character code of index 7 is :",charCode);
//finding code point of specified position
let codePnt = sentence.codePointAt(0);
console.log("Code point of index 0 is :",codePnt);
//using at() to find element at specified index
let element = sentence.at(-3);
console.log("Character at postion -3 is:",element);
//concatenating two strings
let concat = sentence.concat(fact);
console.log("Concatenation of sentence and fact is : ",concat);
//using [] to find element at specified index
let el = sentence[4];
console.log("Element at position 4 is :",el);
//using slice() method to extract portion of string
let p1 = sentence.slice(10,19);
console.log(p1);
let p2 = sentence.slice(20);
console.log(p2);
let p3 = sentence.slice(-8);
console.log(p3);
let p4 = sentence.slice(-44,-24);
console.log(p4);
//using substring() mehtod to extract portion of string
let s1 = sentence.substring(0,43);
console.log(s1);
let s2 = sentence.substring(-4,9);
console.log(s2);
//using substr() to extract the portion of string
let st1 = sentence.substr(0,25);
console.log(st1);
let st2 = sentence.substr(-17,17);
console.log(st2);
//changing the string into uppercase
let uc1 = sentence.toUpperCase();
console.log(uc1);
let uc2 = fact.toUpperCase();
console.log(uc2);
//changing the string into lowercase
let lc1 = sentence.toLowerCase();
console.log(lc1);
let lc2 = fact.toLowerCase();
console.log(lc2);
//checking the string is well formed or not 
let surrogate = "In JavaScript, objects are Kings \uD800";
let chk1 = sentence.isWellFormed();
console.log(chk1);
let chk2 = fact.isWellFormed();
console.log(chk2);
let chk3 = surrogate.isWellFormed();
console.log(chk3);
//changing string into well formed removing lone surrogates 
let chk4 = sentence.toWellFormed();
console.log(chk4);
let chk5 = fact.toWellFormed();
console.log(chk5);
let chk6 = surrogate.toWellFormed();
console.log(chk6);
