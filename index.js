var textoEntrada = document.getElementById("textoEntrada");
var textoResultado = document.getElementById("textoResultado");
var btnCriptografar = document.getElementById("btnCripto");
var btnDescriptografar = document.getElementById("btnDescripto");
var btnCopiar = document.getElementById("btnCopiar");
var containerMessage = document.getElementById("container-sem-resultado");
var containerResultado = document.getElementById("container-resultado");

function criptografarLetras(frase) {
  frase = frase
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("a", "ai")
    .replaceAll("o", "ober")
    .replaceAll("u", "ufat");
  return frase;
}

function decriptografarLetras(frase) {
  frase = frase
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ai", "a")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u");
  return frase;
}

btnCriptografar.addEventListener("click", function (event) {
  if (textoEntrada.value) {
    textoEntrada.value = criptografarLetras(textoEntrada.value);
    console.log(textoEntrada.value);
    containerMessage.style.display = "none";
    containerResultado.style.display = "flex";
    textoResultado.value = textoEntrada.value;
    textoEntrada.value = "";

    textoResultado.style.height = "auto";
    textoResultado.style.height = textoResultado.scrollHeight + "px";
  }
});

btnDescriptografar.addEventListener("click", function (event) {
  if (textoEntrada.value) {
    textoEntrada.value = decriptografarLetras(textoEntrada.value);
    console.log(textoEntrada.value);
    containerMessage.style.display = "none";
    containerResultado.style.display = "flex";
    textoResultado.value = textoEntrada.value;
    textoEntrada.value = "";

    textoResultado.style.height = "auto";
    textoResultado.style.height = textoResultado.scrollHeight + "px";
  }
});

btnCopiar.addEventListener("click", function (event) {
  if (textoResultado.value) {
    textoResultado.select();
    textoResultado.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Texto copiado com sucesso: " + textoResultado.value);
  }
});
