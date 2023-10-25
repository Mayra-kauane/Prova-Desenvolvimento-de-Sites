function abririmagem(imagem) { //imagem apliada
    const midia = document.getElementById('img'); //não precisava disso aqui
    const sobreposição = document.getElementById('sobreposição');
    const fecharimagem = document.getElementById('fecharimagem');
    const imagemAmpliada = document.getElementById('imagem-ampliada');
  
    imagemAmpliada.src = imagem;
    sobreposição.style.display = 'flex';
    fecharimagem.style.display = 'block';
  }
  
  function fecharimagem() { //quando clicar fora fecha
    const sobreposição = document.getElementById('sobreposição');
    const fecharimagem = document.getElementById('fecharimagem');
  
    sobreposição.style.display = 'none';
    fecharimagem.style.display = 'none';
  }
