"use strict";

var CPF_GERADO = [];
var CPF_DIGITADO = [];
/*EVENTOS*/

btn_gerar.onclick = function () {
  CPF_GERADO = [];
  calcDigito1(salvarNumeros(9));
  lbl_gerado.innerText = gerarPontuacao(1);
};

btn_verificar.onclick = function () {
  CPF_GERADO = [];
  temp = txt_digitado.value;

  for (x = 0; x < temp.length; x++) {
    CPF_DIGITADO[x] = temp[x];
  }

  Digitos = calcDigito1(CPF_DIGITADO);
  alert(Digitos[0]);
};

function gerarPontuacao(s_n) {
  CPF = "";

  for (x = 0; x < CPF_GERADO.length; x++) {
    if (x == 3 || x == 6) CPF += ".";
    if (x == 9) CPF += "-";
    CPF += CPF_GERADO[x];
  }

  return CPF;
}

function salvarNumeros(digitos) {
  lista = [];

  for (x = 0; x < digitos; x++) {
    lista.push(numAleatorio());
    CPF_GERADO.push(lista[x]);
  }

  return lista;
}

function numAleatorio() {
  min = Math.ceil(0);
  max = Math.floor(10);
  return Math.floor(Math.random() * (max - min)) + min;
}

function calcDigito1(ListNum) {
  soma = 0;
  lista = [];

  for (x = 10; x >= 2; x--) {
    soma += x * ListNum.shift();
    console.log("oi");
  }

  digito = soma % 11;

  if (digito <= 1) {
    CPF_GERADO.push(0);
  } else {
    CPF_GERADO.push(11 - digito);
  }

  for (x = 0; x < CPF_GERADO.length; x++) {
    lista.push(CPF_GERADO[x]);
  }

  return calcDigito2(lista);
}

function calcDigito2(ListNum) {
  soma = 0;

  for (x = 11; x >= 2; x--) {
    soma += x * ListNum.shift();
  }

  digito = soma % 11;

  if (digito <= 1) {
    CPF_GERADO.push(0);
  } else {
    CPF_GERADO.push(11 - digito);
  }

  return CPF_GERADO;
}