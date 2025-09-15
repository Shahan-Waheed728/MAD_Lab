//Lab Task 1
//First function ‘add’ check the undefined arguments within the defined function.
function add(c,d){
  if(c === undefined || d === undefined){
    return "One or both values are undefined."
  }
  return c + d;
 }
 //Second function ‘subtract’  use the ES6 default parameter to tackle the same problem.
function subtract(a = 8,b= 5){
   let sub;
   sub = a - b;
   return sub;
}
//Third function ‘multiply’ use the ES6 rest parameters to multiply each argument with one another.
function multiply(...num){
   return num.reduce((acc,val) => acc * val,1)
  
}
//Fourth ‘divide’ use the ‘Arguments’ object to finish the job.
function divide(){
    if(arguments.length < 2){
        console.log("Need atleast two arguments for division operation.")
    }
    let result = arguments[0];
    for(let i = 1; i < arguments.length ; i++ ){
        result /=arguments[i]
    }
    return result;
}
//Calling each function one time 
console.log("Sum of two undefined number is:",add());
console.log("Difference of a nd b is :",subtract(15,6));
console.log("Product of three number is :",multiply(4,5,6));
console.log("Division of a and b is:",divide(15,5));


