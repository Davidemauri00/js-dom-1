const numKm = prompt("indica il numero di chilometri della tratta");
const eta = prompt("indica la tua età");
if (isNaN(numKm) || isNaN(eta)){
    console.log("valore inserito non è corretto, ricarica la pagina e riprova");
}
else{
    let prezzo = numKm * 0.21;
    if (eta < 18) {
        prezzo = prezzo - (prezzo * 20 / 100);
    }else if (eta > 65) {
        prezzo = prezzo - (prezzo * 40 / 100);
    }
    const prezzoFinale = prezzo.toFixed(2);
    console.log(`il prezzo di questo biglietto è ${prezzoFinale}`);
}
