// Write your solution here!
const cats = ["Milo","Otis","Garfield"];

function beforeEach(){ 
    cats.length = 0; 
    cats.push("Milo","Otis","Garfield");
};

function destructivelyAppendCat(){
    beforeEach()
    cats.push("Ralph")
    console.log(cats)
}

function destructivelyPrependCat(){
    beforeEach()
    cats.unshift("Bob")
    console.log(cats)
}

function destructivelyRemoveLastCat() {
    beforeEach()
    cats.pop()
    console.log(cats)
}

function destructivelyRemoveFirstCat(){
    beforeEach()
    cats.shift()
    console.log(cats)
}

function appendCat(){
    beforeEach()
    const ShowArrayEnd = [...cats,'Broom'];
    return ShowArrayEnd;
}

function prependCat(name){
    beforeEach()
    const ShowArrayStart = ['Arnold',...cats];
    return ShowArrayStart;
}

function removeLastCat(name){
    beforeEach()
    const removedCat = cats.slice(0,cats.length-1);
    return removedCat;
}

function removeFirstCat(name){
    beforeEach()
    const removedFirstCat = cats.slice(1);
    return removedFirstCat;
}