let texto = document.getElementById('input-texto').value;
let cifrado = document.getElementById('text-encriptado');
let cifrar = document.getElementById('cifrar');
let descifrar = document.getElementById('descifrar');
let copiar = document.getElementById('copiar')

cifrar.addEventListener('click',()=>{
 e.preventDefault();
    let textocifrado = texto
    .replace(/a/gi, "agu")
    .replace(/e/gi, "jam")
    .replace(/i/gi, "tor")
    .replace(/o/gi, "tip")
    .replace(/u/gi, "cra");

    cifrado.innerHTML = textocifrado;
    
})

descifrar.addEventListener('click',()=>{
    
    let textocifrado = texto;
    cifrado.innerHTML = textocifrado;
    
})

copiar.addEventListener('click',()=>{
    navigator.clipboard.writeText(cifrado.textContent);
    copiar.textContent="¡Copiado!";
    setTimeout(()=>{
        copiar.textContent="Copiar";
    },2000)
        
})
