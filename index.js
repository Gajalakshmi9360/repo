var a = 10

//template literal 
console.log(`a = ${a}`)

//type hoisting
console.log("20"-8)

//trational func
function first(params) {
    console.log("first")

}
first()

//storing function in varaiable,we can pass as param in another func
var myvar = function first(params) {
    console.log("first")
}

//object
var tt = {};
var myfirst = new Object()
myfirst.name = "sri"
myfirst["id"] = 7
console.log(myfirst["name"])

//scope
var names = "sri"
var TestScopr = function (params) {
    let names = "ram"
    console.log(names)
}
TestScopr()

//Destructing 

let m = 10, n = 20;
[m,n] = [n,m]
console.log(m+" "+n);

const arr = [1,2,3]
let [q,w,e] = arr
console.log(q +" "+ w);

console.log(...arr);

//Spread operator

function SpreadOperator(...values) {
    console.log(values);
    let sum =0
    for (const i of values) {
        sum += i
    }
    return sum
}
console.log(SpreadOperator(1,2,3,4));

//Rest Operator
const b = [1,2,3,4,5,6]
let[f,s,...x] = b
console.log(f);
console.log(s);
console.log(x);

//Destructing of object

const contact = {
    phNO: "90424",
    email: "sri@gmail.com"
}

const frd = [{name: "bala",age: 20},{name: "sandy",age: 21}]
const Student = {
    name: "sri",
    age: 19,
    frd,
    ...contact
}
console.log(Student);

let{name, age} = Student
console.log(name);
console.log(age);
console.table(Student)

//Destructing of obj with custom name
let{name: Custonname,age: CustomAge} = Student
console.log(Custonname+" "+CustomAge);
