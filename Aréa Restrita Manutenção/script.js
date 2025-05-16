//  Bloqueio de Senha 
function verificarSenha() {
  const senha = document.getElementById("senha").value;

  if (senha === "1234") { // Troque pela sua senha real
    window.location.href = "projetos.html"; // Página a redirecionar
  } else {
    alert("Senha incorreta!");
  }
}
