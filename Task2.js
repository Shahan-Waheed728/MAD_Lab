//Lab Task 2
//defining a generic methods named solveThis()
let solveThis = {
   sum : [4,6,7],
   max : [3,2,6,5],
   min : [5,7,4,2]
}
//function to find sum of given arr
function sum(...sum){
    return  sum.reduce((acc,val) => acc + val,0);
}
//function to find max number
function max(...max){
  return max.reduce((acc,val)=>
    Math.max(acc,val),-Infinity);
}
//function to find min number
function min(...min){
  return min.reduce((acc,val)=>
   Math.min(acc,val),Infinity);
}
//calling each function 
console.log("Sum = ",sum(...solveThis.sum));
console.log("Max = ",max(...solveThis.max));
console.log("Min = ",min(...solveThis.min));