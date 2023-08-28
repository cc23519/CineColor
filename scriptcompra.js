var selectFilme = document.getElementById("filme");
var inputQuantidade = document.getElementById("quantidade");
var spanPrice = document.getElementById("price");

selectFilme.addEventListener("change", calcularPrecoTotal);

var assentosSelecionados = [];

function selecionarAssento(assento) {
  assento.classList.toggle('selected');

  var assentoId = assento.getAttribute('data-assento');
  var index = assentosSelecionados.indexOf(assentoId);

  if (index === -1) {
    assentosSelecionados.push(assentoId);
  } else {
    assentosSelecionados.splice(index, 1);
  }

  var assentoInput = document.getElementById('assento');
  assentoInput.value = assentosSelecionados.join(', ');

  calcularPrecoTotal();
}

function calcularPrecoTotal() {
  var filmeSelecionado = selectFilme.value;
  var quantidadeIngressos = assentosSelecionados.length;

  var precoUnitario = 0;

  if (filmeSelecionado === "filme1") {
    precoUnitario = 10.00;
  } else if (filmeSelecionado === "filme2") {
    precoUnitario = 12.50;
  } else if (filmeSelecionado === "filme3") {
    precoUnitario = 8.75;
  } else if (filmeSelecionado === "filme4") {
    precoUnitario = 8.75;
  } else if (filmeSelecionado === "filme5") {
    precoUnitario = 8.75;
  }

  var precoTotal = precoUnitario * quantidadeIngressos;

  spanPrice.textContent = precoTotal.toFixed(2);
}

document.addEventListener('DOMContentLoaded', function() {
  var sala = document.getElementById('sala');


  var numeroAssentos = 50;

  for (var i = 1; i <= numeroAssentos; i++) {
    var assento = document.createElement('div');
    assento.classList.add('sala-assento');
    assento.setAttribute('data-assento', 'Assento ' + i);
    assento.textContent = i;

    sala.appendChild(assento);

    if (i % 10 === 0) {
      sala.appendChild(document.createElement('br'));
    }

    assento.addEventListener('click', function() {
      selecionarAssento(this);
    });
  }
});

