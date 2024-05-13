let arrayVuoto = [];


for(let i=0;i<6;i++){
    let numUtente;
    numUtente=Number.parseInt(prompt('inserire un numero'));
    if(numUtente % 2 == 1){
        arrayVuoto.push(numUtente);
    }else{
        console.log('even number detected');
    }
    
}
console.log(arrayVuoto);