function converter() {
  const valor = parseFloat(document.getElementById('valor').value);
  const de = document.getElementById('de').value;
  const para = document.getElementById('para').value;
  const resultado = document.getElementById('resultado');

  if (isNaN(valor)) {
    resultado.innerHTML = "Por favor, insira um número válido.";
    resultado.style.color = 'red';
    return;
  }

  let convertido;

  if (de === para) {
    convertido = valor;
  } else if (de === 'C' && para === 'F') {
    convertido = (valor * 9/5) + 32;
  } else if (de === 'C' && para === 'K') {
    convertido = valor + 273.15;
  } else if (de === 'F' && para === 'C') {
    convertido = (valor - 32) * 5/9;
  } else if (de === 'F' && para === 'K') {
    convertido = (valor - 32) * 5/9 + 273.15;
  } else if (de === 'K' && para === 'C') {
    convertido = valor - 273.15;
  } else if (de === 'K' && para === 'F') {
    convertido = (valor - 273.15) * 9/5 + 32;
  }

  resultado.innerHTML = `Resultado: ${convertido.toFixed(2)}°${para}`;
  resultado.style.color = '#333';
}
