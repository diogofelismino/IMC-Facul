function calcularIMC() {

  var altura = parseFloat(prompt("Digite sua altura em metros:"));
  var peso = parseFloat(prompt("Digite seu peso em quilogramas:"));

  if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
    alert("Por favor, insira valores válidos para altura e peso.");
    return;
  }


  var imc = peso / (altura * altura);


  alert("Seu IMC é: " + imc.toFixed(2));
}


calcularIMC();
