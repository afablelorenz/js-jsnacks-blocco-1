let num1;
let num2;

num1=Number.parseInt(prompt('Inserisci un numero'),10);
num2=Number.parseInt(prompt('Inserisci un numero'),10);

if(isNaN(num1) || isNaN(num2)){
    console.log('inserire numeri validi');
}else if(num1 > num2){
    console.log(num1);
}else{
    console.log(num2);
};

