/*Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula, além de informar a quantidade de vezes em que ela ocorre. */

function verify(word) {
  let myString = word;

  if(myString.toLocaleLowerCase().indexOf("a") !== -1){
    let soma = 0;
    let contString = myString.split("");
    for(let i = 0; i < myString.length; i++){
      contString[i].toLocaleLowerCase() === "a"? soma+=1 : soma;
    }
    console.log("Contem letra 'A', e o numero de vezes que 'A' aparece é: ", soma);
    
  }else {
    console.log("Não contem a letra 'A'");
  }
  
}

verify("ola, galera");