let numbers = [4,2,6,8];

numbers.sort((a,b)=>{
    return a-b;
});
// console.log(numbers);

function findSqrRoot(num){
    setTimeout(() => {
        let res = Math.sqrt(num);
        console.log(res);
    }, 1000);
}

findSqrRoot(2037);

let person = {
    firstname :'John',
    lastName:'Doe'
}

(function (){
    console.log(person.firstname+' '+person.lastName)
})(person);
