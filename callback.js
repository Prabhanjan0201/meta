//Async JS Crash Course - Callbacks, Promises, Async Await

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
        // posts.forEach((post)=>{
        //     output += `<li>${post.body}</li>`;
        // });
        // document.body.innerHTML = output;
    },1000);
}

function createPost(post,callback){
    setTimeout(()=>{
        posts.push(post);
        callback();
    },2000);
}

// getPosts();
createPost({title:'third',body:'third one'},getPosts());
console.log(posts);