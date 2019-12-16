const data = [3, [17,18],[199,200],[199,301],[400,500],[0,102]];

function processarLinha(linha) {
  var count = 0;
  for(let i = linha[0]; i <= linha[1]; i++){
    var numeroTexto = new String(i);
    for(let j = 0; j < numeroTexto.length; j++){
      if (numeroTexto[j] === "0"){
        count++
      }
    }
  }
  return count
}



//Esta função geralmente não é alterada, mas você pode alterar sem problemas, se achar necessário.
function main(linhas) {
  //const linhas = entradas.split("\n"); //separa as entradas por linha e converte em um ARRAY de STRINGS.

  for (let i=1; i < linhas.length; i++) {
    let linha_entrada;
    try {
      linha_entrada = eval(linhas[i]); //tenta converter a string pra inteiro ou array se falhar, cai no catch.
    } catch {
      linha_entrada = linhas[i]; //mantem como string porque o eval falhou em converter pra inteiro ou array.
    }
    if (linha_entrada !== "") {
      const resultado_processado = processarLinha(linha_entrada);
      console.log(resultado_processado);
    }
  }
}

  main(data);
  