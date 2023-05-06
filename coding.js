
let arr = [1, 3, 2, 4, 1, 3, 1];

function countPair(array){
    let count =0;
    const newArr =arr.slice();
    newArr.sort((a,b)=> a-b);
    for(let i=0;i< arr.length;i++){
        if(newArr[i] === newArr[i+1]){
            i++;
            count++;
        };
    }
    return count;
    
};

let res = countPair(arr);
console.log(res)



let num1 =[1, 2, 4];

function reverse(num){
    let num2 = num1.slice();;
    num2.sort((a,b)=> b-a);
    return num2
}

let resp = reverse(num1);
console.log(resp);