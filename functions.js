function contaVocali(stringa) {
  const vocali = ["a", "e", "i", "o", "u"];
  let contatore = 0;

  for (let i = 0; i < stringa.length; i++) {
    if (vocali.includes(stringa[i])) {
      contatore++;
    }
  }
  return contatore;
}

console.log("Ci sono: " + contaVocali(process.argv[2]) + " vocali");


function trovaNumeroMaggiore(num) {
  let numeroTrovato = num[1];
  for (let i = 0; i < num.length; i++) {
    if (num[i] > numeroTrovato) {
      numeroTrovato = num[i]
    }
  } return numeroTrovato
}

console.log("Il numero maggiore è: " +  trovaNumeroMaggiore(process.argv[3]));


