document.addEventListener("DOMContentLoaded", function () {
 // ===== FORMULÁRIO =====
 const form = document.getElementById("formContato");
 const msg = document.getElementById("msg");
 form.addEventListener("submit", function(e) {
 e.preventDefault();
 let nome = document.getElementById("nome").value.trim();
 let email = document.getElementById("email").value.trim();
 let mensagem = document.getElementById("mensagem").value.trim();
 if(nome === "" || email === "" || mensagem === "") {
 msg.innerText = "⚠️ Preencha todos os campos!";
 msg.style.color = "red";
 return;
 }
 if(!email.includes("@") || !email.includes(".")) {
 msg.innerText = "⚠️ Email inválido!";
 msg.style.color = "orange";
 return;
 }
 msg.innerText = "✅ Mensagem enviada com sucesso!";
 msg.style.color = "lightgreen";
 form.reset();
 });
 // ===== TEMA CLARO =====
 const botao = document.getElementById("toggleTema");
 botao.addEventListener("click", () => {
 document.body.classList.toggle("light");
 });
});