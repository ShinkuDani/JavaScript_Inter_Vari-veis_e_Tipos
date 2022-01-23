function trocaPares(array){
    if (!array.length) return -1;
    if (!array) return -1;

    for (let i = 0; i < array.length; i++){
        if(array[i] === 0){
            console.log("Voce já é zero")
        }else if( array[i] % 2 === 0 ){
            console.log(`Substiuindo ${array[i]} por 0...`);
            array[i] = 0;
           
        }
    }
    return array;
}

let arr = [1,2,3,4,5,6,7,8,98,74,22,80,33,23,90];
let arrz = null;
console.log(trocaPares(arrz));