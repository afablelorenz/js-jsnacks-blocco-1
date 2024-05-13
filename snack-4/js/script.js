const invitati = ['marco','davide','michele','martina','federico'];
let nomeUtente;

nomeUtente=prompt('inserire il suo nome');
nomeUtente= nomeUtente.charAt(0).toUpperCase()+nomeUtente.substring(nomeUtente.length).toLowerCase();

if(invitati.includes(nomeUtente)){
    console.log('è invitato');
}else{
    console.log('non è invitato');
}


/*for(let i=0;i<invitati.length;i++){
    if(invitati[i]===nomeUtente){
        console.log(invitati[i]);
        console.log(nomeUtente);
        console.log('Lei è invitato');
    }else{
        console.log(invitati[i]);
        console.log(nomeUtente);
        console.log('Non è invitato');
    }
}*/

