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


 