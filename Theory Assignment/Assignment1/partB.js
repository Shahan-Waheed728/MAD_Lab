//Defining cars array
let cars = ["Bugatti","Toyota","Tesla","Ford","Honda"];

//printing original array
console.log("Original array:",cars)

//finding length of cars
let len = cars.length;
console.log("Length of cars =",len)

//printing elements of arrays unsing toString()
let el = cars.toString();
console.log("Elements of cars :",el);

//searching elements using index
let el1 = cars.at(0);//returns Bugatti
let el2 = cars.at(-1); //returns Honda
let el3 = cars[2]; //returns Tesla
let el4 = cars[5]; //returns undefined
console.log("Element at index 0 is",el1);
console.log("Element at index -1 is",el2);
console.log("Element at index 2 is",el3);
console.log("Element at index 5 is",el4);

//joining elements of array using join()
let join = cars.join(" * ");
console.log("Original array:",cars);
console.log("Array elements after join operation:",join);

//pop an element from cars array
let popEle = cars.pop();
console.log("Popped element from cars:",popEle);
console.log("New cars array:",cars);

//push an element into cars array
console.log("Cars array before push elements:",cars)
cars.push("Honda");
console.log("Cars array after push element at end:",cars);

//shifting an array element using shift()
cars.shift();
let shiftEle = cars.shift();
console.log("Shifted element:",shiftEle);//returns Toyota
console.log("Array after shifting element",cars);//removes first element and shift other elements

//unshifting ar array element using unshift()
cars.unshift("Bugatti");
console.log("New array after adding element at start:",cars);

//deleting an element from an array
console.log("Original array:",cars);
let delEle = delete cars[0]
console.log("Deleted element:",delEle);
console.log(cars);//it will give an empty item

//concatenation of cars and new array myFav
let myFav = ["Camry","Kia","Suzuki"];
const concat = cars.concat(myFav);
console.log("Contatenating cars and myFav array:",concat);

//passing parameter to an array
let addEle = myFav.concat("Civic");
console.log("After adding element to myFav array:",addEle);

//copying array elements
let copyEle = myFav.copyWithin(0,1);
console.log("Copied array:",copyEle); 

//Falttening an array
let myCars = [["Bugatti","Camry"],["Tesla","Kia"],["Ford","Suzuki"],["Honda","Civic"]];
let newCars = myCars.flat();
console.log("Flat cars and myFav array:",newCars);

//splicing and slicing of array
 myFav.splice(2,0,"Volvo","Bugatti");
console.log("New array:",myFav);

//using toSpliced() method to splice an array
//best way of splice an array
let newFav = myFav.toSpliced(3,0,"Honda");
console.log("New Array:",newFav);

//slicing of an array
const sliceEle = myFav.slice(0,4);//slice from 0 to 3 not 4 included
console.log("Sliced array:",sliceEle);
