//debouncing
let counter =0;
const getData = ()=>{
 console.log("Fetching data...",counter++);
}

const  doSomeMagic= function(fn,d){
    let timer;
    return function(){
        let context =this,
        args = arguments;
        clearTimeout(timer)
        timer = setTimeout(()=>{
            getData.apply(context,args)
        },d)
    }
}

let better = doSomeMagic(getData,300)