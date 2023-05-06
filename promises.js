const posts =[
    {title:'Post One',body:'This is post one'},
    {title:'Post two',body:'This is post two'}
]


function getPosts(){
    setTimeout(()=>{
        let output ='';
        for(let val of posts){
            console.log(val.body)
        }
    },1000);
}

function createPost(post){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post);
            const error = false;
            if(!error){
                resolve();
            }else{
                reject('Error')
            }
        },2000);
    })
}

createPost({title:'third',body:'third one'}).then(getPosts).catch(err => console.log(err));
