let texto = document.getElementById("input-texto").value;
let cifrado = document.getElementById("text-encriptado");
let cifrar = document.getElementById("cifrar");
let descifrar = document.getElementById("descifrar");
let copiar = document.getElementById("copiar");

if (texto != "") {
  cifrar.addEventListener("click", () => {
    let textocifrado = texto
      .replace(/a/gi, "agu")
      .replace(/e/gi, "jam")
      .replace(/i/gi, "tor")
      .replace(/o/gi, "tip")
      .replace(/u/gi, "cra");
    cifrado.innerHTML = textocifrado;
    document.getElementById('imagen').style.display='none';
    document.getElementById('notexto').style.display='none';
  });

  descifrar.addEventListener("click", () => {
    let textocifrado = texto;
    cifrado.innerHTML = textocifrado;
    document.getElementById('imagen').style.display='none';
    document.getElementById('notexto').style.display='none';
  });

} else {
  cifrar.addEventListener("click", () => {
    alert("No has escrito algún texto");
    location.reload();
  });
  descifrar.addEventListener("click", () => {
    alert("No has escrito algún texto");
    location.reload();
  });
}

copiar.addEventListener("click", () => {
  navigator.clipboard.writeText(cifrado.textContent);
  copiar.textContent = "¡Copiado!";
  setTimeout(() => {
    copiar.textContent = "Copiar";
  }, 2000);
});
