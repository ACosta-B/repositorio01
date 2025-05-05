 function trocar() {
 let a = document.getElementById(`a`);
 let b = document.getElementById(`b`)
 let c = a.value;
 a.value = b.value;
 b.value = c;}
    
function trocarimagem() {
  let imagem = document.getElementById(`imgPucca`);
  let url = document.getElementById(`url`);
  let url2 = `https://i1.sndcdn.com/avatars-yoQpzoGOyMzhchB7-wR3BzA-t1080x1080.jpg`;
    
  imagem.setAttribute(`width`, `300px`);
  imagem.setAttribute(`src`, url2);}
    
  console.log(`Essa é a Url da imagem ${imagem.getAttribute(`src`)}`);
    
  console.log(imagem);
  console.log(url.value);
    
  url.value = `Você já trocou a URL!`;
  url.setAttribute(`disabled`, `desabled`);