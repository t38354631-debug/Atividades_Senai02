function tentando(){
 
  let numeros = [];

   numeros.push(Number(document.getElementById("n1").value));
   numeros.push(Number(document.getElementById("n2").value));
   numeros.push(Number(document.getElementById("n3").value));
   numeros.push(Number(document.getElementById("n4").value));
   numeros.push(Number(document.getElementById("n5").value));

   let maior = numeros [0];
   let menor = numeros [0];

   let par = 0, impar = 0, soma = 0;

   for (let i = 0; i < numeros.length; i++ ){
        let numero = numeros[i];

      if(numero>maior){
        maior = numero
      }
      
      if(numero<menor){
        menor = numero
      }

      if(numero % 2 === 0){
        par++
      }else{
        impar++
      }

      soma = soma + numero;

   }

   
   document.getElementById("resul").textContent = 
   " |maior: " + maior +
   " |menor: " + menor +
   " |impares: " + impar +
   " |pares: " + par +
   " |soma: " + soma

   }

    
   function limpar (){
    document.getElementById("resul").textContent = "";


}




