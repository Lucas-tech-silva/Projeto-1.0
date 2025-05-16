function derrubarSite() {
  const conteudo = document.getElementById('conteudo');
  const bloqueio = document.getElementById('bloqueio');

  if (conteudo) conteudo.style.display = 'none';
  if (bloqueio) bloqueio.style.display = 'flex';
}

document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
  alert("Right click disabled.🔒​");
});


document.addEventListener('keydown', function(e) {
  if (
    e.key === 'F12' ||
    (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'i') ||
    (e.ctrlKey && e.key.toLowerCase() === 'u') ||
    (e.ctrlKey && e.key.toLowerCase() === 's')
  ) {
    e.preventDefault();
    derrubarSite();
  }
});


document.addEventListener('keyup', function(e) {
  if (e.key === 'PrintScreen') {
    navigator.clipboard.writeText('');
    derrubarSite();
  }
});



  

  const botaoFonte = document.getElementById("aumentarFonte");
  let tamanhoAtual = 100; // começa em 100%

  botaoFonte.addEventListener("click", () => {
    if (tamanhoAtual < 200) { // novo limite: 200%
      tamanhoAtual += 10;
      document.body.style.fontSize = tamanhoAtual + "%";
    } else {
      alert("Você já atingiu o tamanho máximo da fonte (200%).");
    }
  });

const botaoAdicionar = document.getElementById("addProjeto");
const galeria = document.getElementById("galeria");
const contador = document.getElementById("contador");
const notificacao = document.getElementById("notificacao");

let totalProjetos = 0;

botaoAdicionar.addEventListener("click", () => {
  totalProjetos++;
  contador.textContent = totalProjetos;

  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <h2>🚧 Em breve! ${totalProjetos}</h2>
    <p>Descrição breve do projeto ${totalProjetos}. 💡</p>
  `;
  galeria.appendChild(card);

  notificacao.textContent = `+1 Projeto adicionado! 🎉`;
  notificacao.classList.add("mostrar");

  setTimeout(() => {
    notificacao.classList.remove("mostrar");
  }, 2000);
});






