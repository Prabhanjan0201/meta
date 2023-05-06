let name ={
    fName:'Prabhanjan',
    lName:'Deshpande'
}

let printName = function(){
    console.log(this.fName+' '+this.lName);
}

let printMyname = printName.bind(name);
printMyname();
