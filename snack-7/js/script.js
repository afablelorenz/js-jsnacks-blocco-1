let n;

n=Number.parseInt(prompt('inserire numero'));
for(let i=0; i<n;i++){
    let arr = [];
    for(let j=0; j<10;j++){
        arr.push(Math.floor(Math.random()*100));
    }
    console.log(arr);
}