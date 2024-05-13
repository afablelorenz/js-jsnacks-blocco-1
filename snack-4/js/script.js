const invitati = ['marco','davide','michele','martina','federico'];
let nomeUtente;

nomeUtente=prompt('inserire il suo nome');

for(let i=0;i<invitati.length;i++){
    if(invitati[i]===nomeUtente){
        console.log('Lei è invitato');
        break;
    }else{
        console.log('Non è invitato');
        break;
    }
}