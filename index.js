const person ={
    fName:'John',
    Lname:'Doe'
}

let p1 = {...person};
let p2 = Object.assign({},person);
let p3 = JSON.parse(JSON.stringify(person));

p2.fName = 'Ron';

const name = null ?? 'John';
console.log(name);

const age = undefined ?? 28;
console.log(age);



/*function getUser(userId,callback){
    console.log(`Get user from the database`)
    setTimeout(()=>{
        callback({
            userId:userId,
            name:'Prabhanjan'
        });
    },1000)
}

function getServices(user,callback){
    console.log(`Get services of ${user.name} from the API.`);
    setTimeout(()=>{
        callback(['Email','VPN','CDN']);
    },2000);
}

function getServicesCost(services,callback){
    console.log(`Calculate service costs of ${services}`);
    setTimeout(()=>{
        callback((services.length * 100));
    },1000);
}

getUser(100,(user)=>{
    getServices(user,(services)=>{
        getServicesCost(services,(cost)=>{
            console.log(`The service cost is ${cost}.`)
        })
    })
})








// let valu = "Prabhanjan";
// console.log(valu);

// let valu2 = valu;
// valu ="Gayatri"
// console.log(valu2);

// let tempval = {
//     name:'Milind'
// }

// let temp1 =tempval;

// tempval.name = 'Max'

// console.log(temp1.name);*/