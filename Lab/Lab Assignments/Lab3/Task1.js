let myArr = [7,2,5,3,4,6,11,9,12,10];
//checking the odd number from array
    let result = [];
    for(let i = 0; i < myArr.length ; i++){
        if(myArr[i] % 2 != 0){
           result.push(myArr[i]);
            }
        }

    result.sort((a,b)=>{
            return a-b;
        });
//inserting odd number back into array
    let output = [];
        let oddInd = 0;
        for(let i = 0; i < myArr.length; i++ ){
            if(myArr[i] %2 != 0){
                output.push(result[oddInd]);
                oddInd++;
        }
        else{
                output.push(myArr[i]);
            }
        }
  //printing the output      
console.log(output);