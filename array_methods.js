// Array Methods

let colors = ['red', 'green', 'blue'];
/*colors.push('yellow');
colors.length = 6;
colors.length = 2;
colors =[];*/
let numbers = [10, , 20, 30];
numbers[10] = 100;

//"PUSH METHOD"

let cmyk = ['cyan', 'magenta', 'yellow', 'back'];

/*for(const color of cmyk){
    colors.push(color);
}
or else
colors.push(...cmyk);*/

let greetings ={
    0:'hi',
    1:'Hello',
    length:2,
    append(){
        [].push.call(this,...arguments);
    },
};
greetings.append('Howdy','Bonjour');

//"POP METHOD"

let grt ={
    0: 'Hi',
    1: 'Hello',
    2: 'Howdy',
    length: 3,
    removeLast(){
        return [].pop.call(this,...arguments)
    }
}
let geti= grt.removeLast();

//"UNSHIFT METHOD"

let numb = [30, 40];
const length = numb.unshift(20);

let days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
let weekends = ['Sat', 'Sun'];

days.unshift(...weekends);

//"Splice Method"

let scores = [1, 2, 3, 4, 5];
let delScores = scores.splice(0,3);
let languages = ['C', 'C++', 'Java', 'JavaScript'];
languages.splice(1,1,'Python');
languages.splice(2,1,'C#','Swift','Go');


//"FIND"
var score = [10, 20, 30, 10, 40, 20];

//"HIGHER ORDER METHOD"
//"MAP METHOD"
//note:Mapmethod does not change the original array

let circles = [10,20,30];

function circleArea(radius){
    return Math.floor(Math.PI * radius*radius);
}

let areas = circles.map((radius)=>  Math.floor(Math.PI * radius*radius));

//"FILTER METHOD"

let cities = [
    {name: 'Los Angeles', population: 3792621},
    {name: 'New York', population: 8175133},
    {name: 'Chicago', population: 2695598},
    {name: 'Houston', population: 2099451},
    {name: 'Philadelphia', population: 1526006}
];

//let tempCity = cities.filter((city)=> city.population < 3000000).sort((c1,c2)=>c1.population - c2.population).map(city => console.log(city.name+':'+city.population));
let tempCity = cities.filter((city)=> city.population < 3000000).sort((c1,c2)=>c1.population - c2.population).map(city => city.name+':'+city.population);


//"REDUCE METHOD"

let numbe= [1,2,3,4,5];
let sum = numbe.reduce((preVal,currentVal)=>{
    return preVal+currentVal
});


//"EVERY METHOD"
let guui = [1, 3, 5];
let result = guui.every(e => e >0);

//"FOR EACH"
let tempCiti = cities.forEach((e)=>{
    // console.log(e)
});

//"SORT METHOD"

let tempNum = [0, 19, 26, 34, 78, 45, 30 ];
// tempNum.sort(function(a,b){
//     if(a >b ) return 1;
//     if(a < b) return -1;
//     return 0;
// });
tempNum.sort((a,b)=>a-b);
// console.log(tempNum); 

let animals = [
    'cat', 'dog', 'elephant', 'bee', 'ant'
];
animals.sort((a,b)=>{
    if(a>b){
        return -1;
    }
    if(a<b){
        return 1;
    }
    return 0;
});
// console.log(animals);

let mixedCaseAnimals = ['Cat', 'dog', 'Elephant', 'bee', 'ant'];
mixedCaseAnimals.sort(function (a,b){
    let x = a.toUpperCase(),
        y = b.toUpperCase();
    return x== y ? 0: x > y? 1 :-1;
});
// console.log(mixedCaseAnimals);


let employees = [
    {name: 'John', salary: 90000, hireDate: "July 1, 2010"},
    {name: 'David', salary: 75000, hireDate: "August 15, 2009"},
    {name: 'Ana', salary: 80000, hireDate: "December 12, 2011"}
];

employees.sort((a,b)=>{
    // let x = a.name.toUpperCase(),
    //     y = b.name.toUpperCase();
    // return x== y ? 0: x > y? 1 :-1;
    let x = new Date(a.hireDate),
        y = new Date(b.hireDate);
    return x - y;
})
// console.table(employees);


let rivers = ['Nile', 'Amazon', 'Congo', 'Mississippi', 'Rio-Grande'];
rivers.sort(function (a, b) {
    return a.length - b.length;
});

//"MANIPULATING ARRAYS"
let upper  = ['A','B','C'];
let lower  = ['a','b','c'];
let digits = [1,2,3];
let alphanumerics = upper.concat(lower,digits);
// console.log(alphanumerics);


//"Array Destructuiring"
let vari= ['uday','yeku','fell'];
let [val1,val2,val3] = vari;
