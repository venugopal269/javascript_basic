var name='venu';
let age = 24;
const address='no 12';

document.write(`<h3>Variables</h3>`)
document.write(`<h3>My name is ${name} age ${age}</h3>`)



let personalDetails = {
    name:"venu",
    age:24,
    role:"developer trainee",
    educationDetails :{
        hsc:'Sacred heart convent AI HR school',
        College:"IFET college of Engineering"
    },
    address:"undefined",
    adhaar:null
}
 let data = personalDetails.name
console.log(data,"datas")
let education= personalDetails.educationDetails.College
let datas = personalDetails['role']
console.log(datas)

document.write(`<h3>Objects and property accessing</h3>`)
document.write(`<h3>hello all my name is ${data} i have studied in ${education} passed out in 2023
    </h3>`)



let arr = ['a','s','d','f','g','h']
 document.write(`<h3>Array</h3>`)
 document.write(`<h3>getting datas from index number  ${arr.join(', ')}</h3>`)

// IF ELSE statement & Nested statement

let Role = "student";

if (Role == "student") {
    console.log("student");
} else if (Role == "teacher") {
    console.log("teacher");
} else {
    console.log("unknown");
}


// Switch Case

switch(Role){
    case "student":console.log("student")
    break;
    case "teacher":console.log("teacher");
    break;
    default:
        console.log("unknown")
    
}

// For loop 

let n = 5;

for (let i =0; i<n;i++){
    let row = ""
    for(j = 0; j<=i;j++){
        row += "*"
    }
    console.log(row)
}

//  While Loop
let i = 0;

while (i < n) {
    let row = ""; 
    let j = 0;
    while (j <= i) {
        row += "*"; 
        j++;
    }
    console.log(row); 
    i++;
}

// Do While Loop

do {
    if(i%2 == 0){
        console.log(i);
       i++; 
    }
} while (i<5);

// For in loop && For of loop

const person={
    name:"venu",
    age:24,
    dept:"mecahnical",
    skills:["Javascript","angular","node"]
}

for (let key in person){
    console.log(key,person[key]);
    
}
for(let val of person["skills"]){
    console.log(val)
}

// objects
// Factory function
function cricle(radius){
    return {
        radius ,
   
    draw(){
     console.log('draw')
    }
}
}
const val = cricle(2)
console.log(val);

// Constrcutor function
function AnotherCricle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log ("draw")
    }
}
const another = new AnotherCricle(3)
console.log(another)


// primitives
let a = 10;
let b = a;
a = 20

let num = 10;
function numberfn(num) {
    num++;
}
numberfn(num)
console.log(num);


// Reference
 

let number = {value:10}
function increase (number){
    number.value++;
}

increase(number)
console.log(number);


// Enumerating property of the object

const rectangle ={
    radius:1,
    draw(){
        console.log("draw");
        
    }
}

for(let key in rectangle)
{
    console.log(key,rectangle[key]);
    
}

for (let key of Object.keys(rectangle)){
    console.log(key);
    
}

for(let entry of Object.entries(rectangle)){
    console.log(entry)
}

// cloning Object
// 1
const clone = {};
for(let key in rectangle){
    clone[key] = rectangle[key]
}
console.log(clone);
// 2

const clone1=Object.assign({color:"yello"},rectangle)
console.log(clone1);
// 3

const clone3 = {...rectangle}
console.log(clone3,"clone3");

// Arrays  
 let arr1 = [3,4]

 arr1.push(5,6);
 arr1.unshift(1,2);
 arr1.splice(2,0,"a","b")

 console.log(arr1)


 // Finding Elements Using Arrow function
 const courses = [
    {id:1,name:"js"},
    {id:2,name:"python"}
 ]

 const course = courses.find(course => course.name==="js")
console.log(course);

let arr2 = [1, 2, 3, 4, 5, 6];

arr2.pop(); 
arr2.shift();
arr2.splice(1,1)

console.log(arr2); 

const numb = [1,2,3]
const numb1 = [4,5,6]

const result = numb.concat(numb1)
console.log(result); 

console.log(numb.indexOf(3));


// function arguments
 function sum(){
    let total = 0;
    for(let value of arguments){
        total += value
    }
    return total;
 };
 console.log(sum(2,3,4,5,6,9));

function em(discount,...args){
    const total = args.reduce((a,b)=> a+b)
 return total * (1-discount)
}
console.log(em(0.19,20,30,50));


const per1 = {
    firstName:"venu",
    lastName:"gopal",
   get fullName(){
        return `${this.firstName} ${this.lastName}`
    },
    set fullName(value){
       const parts = value.split(" ");
       this.firstName=parts[0];
       this.lastName=parts[1]
    }
}
per1.fullName = "hello world"
console.log(per1);


function sum(...items){
    console.log(...items);
    if(items.length===1 && Array.isArray(items[0]))
        items = [...items[0]]
    console.log(items);
    
return items.reduce((a,b)=>a+b)
}

console.log(sum([1,2,4]));

const circle4 = {
    radius:1,
    get area(){
        return Math.PI*this.radius*this.radius
    }
}
console.log(circle4.area);


    function arrayInRange(min,max){
        const output = [];
        for (let i = min; i<=max; i++)
            output.push(i);
        return output;
          
        
           
        
    }

    console.log(arrayInRange(10,15))



     const numbe = [1,2,3,4]
    console.log(includes(numbe,2))

    function includes(numbe,searchelement){
      for (let i =0; i<numbe.length;i++){

        let element = numbe[i]
        console.log(element)
        if(element === searchelement){

            return true;
        }
    }
    return false;
    }

    console.log(exclude(numbe,[1]))

    function exclude(numbe,excludeElement){
       const ouput =[];

       for (let elements of numbe)
        if(!excludeElement.includes(elements))
            ouput.push(elements);

        
    
        return ouput;
       
    }

    const numberss = [1,2,3,4]
    
    function move(numberss,index,offset){
        console.log(numberss);
        
        const output = [...numberss]
        console.log(output,"output");
        
       const element= output.splice(index,1)[0]
       console.log(element);
       
        output.splice(index+offset,0,element)
        return output;
    }
    const data1 = move(numberss,0,3)
console.log(data1);


function neaaa(...num){
  let a = [...num]
  console.log(a);
  
  let b = {...a}
  return b;
}

console.log(neaaa([1,2,3]));
n = [1,2,3,4,1,1]
const count = countOccurrence(n,1)
console.log(count);

function countOccurrence(array,searchElement){
    
    let output = 0;

    for(let element of array)
        if(element==searchElement)
            output++;
    
   return output;
}

const max = getMax(n);

console.log(max);

function getMax(array){
   return array.reduce((a,b)=> (a>b)?a:b);
}

 const movies = [
    {title:"a",year:2018,rating:4.5},
    {title:"b",year:2018,rating:4.7},
    {title:"c",year:2018,rating:4},
    {title:"d",year:2017,rating:4.5},
]
const titles = movies
.filter(m => m.year === 2018 && m.rating > 4)
.sort((a,b)=>a.rating-b.rating)
.reverse()
.map(m=>m.title)
console.log(titles);

let address1={
  street:"no 17",
  city:"villupuram",
  zipcode:605603
};

function showaddress(address1){
    for(let key in address1)
        console.log(key,address1[key]);
        
}
showaddress(address1)

const out= fizzBuzz(15)
console.log(out)
function fizzBuzz(input){
    if((input%3===0) && (input%5===0)){
        return "FizzBuzz"
       }
   if(input%3===0){
    return "Fizz"
   }
   if(input%5===0){
    return "Buzz"
   }
 return input;
   
}
checkSpeed(110)
function checkSpeed(speed){
    const speedLimit = 70;
    const kmPerPoint = 5;
 if(speed < speedLimit+kmPerPoint){
    console.log("ok");
    
 }else{
    const point = Math.floor((speed-speedLimit)/5);
    if(point >=12){
        console.log("License suspended");
        
    }else{
        console.log("points:",point);
        
    }
 }

}

function showNumbers(limit){

    for (let i =0; i <=limit;i++){
        if(i%2===0){
            console.log(i,"EVEN")
        }else{
            console.log(i,"ODD");
            
        }
    }
}
showNumbers(10)

const mov = {
    title:"a",
    releaseYear :2018,
    rating:4.5,
    director:"b"
}


showprop(mov)
function showprop(mov){
 for (const element in mov) {
    if(typeof mov[element]==='string') {
        console.log(element,mov[element]);
    }
 }
 
}
console.log(sumofNum(10))
function sumofNum(limit){
    let add = 0
    for (let i = 1; i<=limit;i++)
       if(i%3===0 || i%5===0)
        add+=i
    return add;
}

const mark = [80,90,80]

console.log(calculate(mark))

function calculate(mark){
    let total = mark.reduce((a,b)=>a+b)
    let avg = total/mark.length
    if (avg >= 0 && avg <= 59) return "F"
    if (avg >= 60 && avg <= 69) return "D"
    if (avg >= 70 && avg <= 79) return "C"
    if (avg >= 80 && avg <= 89) return "B"
    return "A"
}

showStart(5);

// function showStart(rows) {
//     for (let i = 1; i <= rows; i++) {
//         pattren = ""
//         for(let j=0; j <= i;j++){
//             pattren += "*"
//         }
//         console.log(pattren);
        
//     }
// }

// function showStart(rows) {
//     for (let i = 0; i <= rows; i++) {
//         pattren = ""
//         for(let j=rows; j > i; j--){
//             pattren += "*"
//         }
//         console.log(pattren);
//     }
// }

// function showStart(rows){
//     for (let i = 1; i <= rows; i++) {
//         star = "*"
//         space = " "
//         pattern =""
        
//         for(let k=1; k <= 4-i; k++ ){
//             pattern += space
            
//         }
//         for (let l = 1; l < i1; l++) {
//             pattern += star
//         }
//        console.log(pattern);
        
//     } 
// }

// function showStart(rows){
    
// }