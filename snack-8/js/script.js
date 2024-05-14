const arr = [1,2,3,4,5,6,7,8,9,10];
let numeriPari = [];
let numeriDispari = [];
let numeri5 = [];

for(let i=0; i < arr.length; i++){
    if(arr[i] % 5 === 0){
        document.getElementById("giallo").textContent = "Numeri multipli di 5: " + numeri5.join(", ");
    }
    if(arr[i] % 2 === 0){
        numeriPari.push(arr[i]);
        document.getElementById("rosso").textContent = "Numeri dispari: " + numeriDispari.join(", ");
    }else{
        numeriDispari.push(arr[i]);
        document.getElementById("verde").textContent = "Numeri pari: " + numeriPari.join(", ");
    }
}