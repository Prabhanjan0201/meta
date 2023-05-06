//Promises and Async Await

function getUser1(userId){
    return new Promise ((resolve,reject)=>{
        console.log('Get user from the database.');
        setTimeout(()=>{
            resolve({
                userId:userId,
                username:'Joe'
            });
            reject(console.log('Error'));
        },2000)
    })
}

function getServices1(user){
    return new Promise((resolve,reject)=>{
        console.log(`Get services of ${user.username} from the API.`);
        setTimeout(()=>{
            resolve(['ID','PAN','Aadhar']);
        },2000);
    });
}

function getServicesCost1(services){
    return new Promise ((resolve,reject)=>{
        console.log(`Calculate the cost of ${services}.`);
        setTimeout(()=>{
            resolve(services.length * 100);
        });
    },2000)
}

getUser1(100).then(getServices1).then(getServicesCost1).then(console.log);