document.getElementById("botao-converter").addEventListener("click", function () { 

    let valorReais = prompt("digite o valor em Reais");
valorReais = parseFloat(valorReais);

let euro = 6.46;
valorConvertido = valorReais / euro;

alert("Valor em Reais : " + valorReais.toLocaleString("pt-BR",{
  style: "currency",
  currency: "BRL"
}));

alert("Valor convertido em euro : " + valorConvertido.toLocaleString("pt-BR",{
  style: "currency",
  currency: "EUR" 
}))

})





