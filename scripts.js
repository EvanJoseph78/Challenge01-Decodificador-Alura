//converte uma string em um array
function convertePraArray (mensagem) {
  mensagem = mensagem.toLowerCase();
  var guardaEmArray = mensagem.split("");
  return guardaEmArray;
}

//codifica cada caractere da mensagem
function codificaTexto (mensagem) {
mensagemEmArray = convertePraArray(mensagem);
var i = 0;
let numCaracteres = mensagemEmArray.length;
while(i < numCaracteres){
  if (mensagemEmArray[i] == "e") {
    mensagemEmArray[i] = "enter";
  }
  if (mensagemEmArray[i] == "i") {
    mensagemEmArray[i] = "imes";
  }
  if (mensagemEmArray[i] == "a") {
    mensagemEmArray[i] = "ai";
  }
  if (mensagemEmArray[i] == "o") {
    mensagemEmArray[i] = "ober";
  }
  if (mensagemEmArray[i] == "u") {
    mensagemEmArray[i] = "ufat";
  }
    i++;
}

mensagemCodificada = retornaPraString (mensagemEmArray);

return mensagemCodificada;
}

//decodifica o texto
function decodificaTexto (mensagem) {
  mensagemEmArray = convertePraArray(mensagem);
  var i = 0;
  var j = 0;
  var novoArray = [];
  let numCaracteres = mensagemEmArray.length;
  while (i < numCaracteres){
      if(mensagemEmArray[i] == "a"){
          novoArray[j] = "a";
          i = i + 2;
          j++
      }
      if(mensagemEmArray[i] == "e"){
          novoArray[j] = "e";
          i = i + 5;
          j++
      }
      if(mensagemEmArray[i] == "i"){
          novoArray[j] = "i";
          i = i + 4;
          j++
      }
      if(mensagemEmArray[i] == "o"){
          novoArray[j] = "o";
          i = i + 4;
          j++
      }
      if(mensagemEmArray[i] == "u"){
          novoArray[j] = "u";
          i = i + 4;
          j++
      }
      
      if ( (mensagemEmArray[i] != "a") && (mensagemEmArray[i] && "e") && (mensagemEmArray[i] != "i") && (mensagemEmArray[i] != "o") && (mensagemEmArray[i] != "u") ) {
          novoArray[j] = mensagemEmArray [i];
          j++;
          i++;
      }
      
  }
  
  mensagemDecodificada = retornaPraString (novoArray);
  
  return mensagemDecodificada;
}

//volta a mensagem para string
function retornaPraString (mensagemEmArray) {
  let aux = mensagemEmArray;
  let mensagemEmString = aux.join('');
  return mensagemEmString;
}

// pega um texto digitado pelo usuário e codifica a mensagem

function criptografaTextoInserido(){
var texto = document.querySelector('.input-texto').value;
mensagemCodificada = codificaTexto(texto);
trocaRightBox();
//leva o texto criptografado para a caixa 2
document.getElementById("right-box2-mensagem").value = mensagemCodificada;
}

function descriptografaTextoInserido(){
var texto = document.querySelector('.input-texto').value;
mensagemCodificada = decodificaTexto(texto);
trocaRightBox();
//leva o texto criptografado para a caixa 2
document.getElementById("right-box2-mensagem").value = mensagemCodificada;
}

function trocaRightBox () {
document.getElementById("right-box").style.display = "none";
document.getElementById("right-box2").style.display = "block";
}

function copiaTexto() {
  //let copiarTexto = document.getElementById("right-box2-mensagem"); --> método alternativo pra pegar o texto.
  let copiarTexto = document.querySelector(".output-texto");
  copiarTexto.select();
  copiarTexto.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(copiarTexto.value);

}
