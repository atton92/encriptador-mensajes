
const d = document;
const textArea = d.querySelector(".form__input");
const imagen = d.querySelector(".resultado__img");
const resultadoTitulo = d.querySelector(".resultado__titulo");
const resultadoTexto = d.querySelector(".resultado__texto");
const botonEncriptar = d.querySelector(".form__btn--encriptar");
const botonDesencriptar = d.querySelector(".form__btn--desencriptar");
const botonCopiar = d.querySelector(".resultado__btn");

const llaves = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
];

function encriptarMensaje(mensaje){
    let mensajeEncriptado = "";
    for(let i = 0; i < mensaje.length; i++){
        let letra = mensaje[i];
        let encriptada = letra;

        for(let j = 0; j < llaves.length; j++){
            if(letra === llaves[j][0]){
                encriptada = llaves[j][1];
                break;
            }
        }
        mensajeEncriptado += encriptada;
    }
    return mensajeEncriptado;
} 

function desencriptarMensaje(mensaje){
    let mensajeEncriptado = mensaje;
    for(let i = 0; i < llaves.length; i++){
        let regex = new RegExp(llaves[i][1], 'g');
        mensajeEncriptado = mensajeEncriptado.replace(regex, llaves[i][0]);
    }
    return mensajeEncriptado;
}

textArea.addEventListener("input", (e)=>{
    imagen.style.display = "none";
    resultadoTitulo.textContent = "Capturando mensaje";
    resultadoTexto.textContent = "";
})

botonEncriptar.addEventListener("click", (e)=>{
    e.preventDefault();
    let mensaje = textArea.value.toLowerCase();
    let mensajeEncriptado = encriptarMensaje(mensaje);
    resultadoTexto.textContent = mensajeEncriptado;
    botonCopiar.classList.remove("hidden");
    resultadoTitulo.textContent = "El resultado es:";
})

botonDesencriptar.addEventListener("click", (e)=>{
    e.preventDefault();
    let mensaje = textArea.value.toLowerCase();
    let mensajeDesencriptado = desencriptarMensaje(mensaje);
    resultadoTexto.textContent = mensajeDesencriptado;
    resultadoTitulo.textContent = "El resultado es:";
    botonCopiar.classList.remove("hidden");
})

botonCopiar.addEventListener('click', ()=>{
    let textoCopiado = resultadoTexto.textContent;
    navigator.clipboard.writeText(textoCopiado). then(()=>{
        imagen.style.display = "block";
        resultadoTitulo.textContent = "Texto copiado";
        botonCopiar.classList.add("hidden");
        resultadoTexto.textContent = "";
    })
})

