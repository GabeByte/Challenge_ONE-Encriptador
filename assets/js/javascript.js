const encboton = document.getElementById("bEncriptar");
const desboton = document.getElementById("bDesencriptar");
const input = document.getElementById("TextInput");
const output = document.getElementById("TextOutput");
const copiar = document.getElementById('bCopiar');
const preinfo = document.getElementsByClassName("pre-info");
const cifrado = {
    "e" : "enter",
    "i" : "imes",
    "a" : "ai",
    "o" : "ober",
    "u" : "ufat"
}

input.addEventListener("input", validartexto);
encboton.onclick = encriptar;
desboton.onclick = desencriptar;
copiar.onclick = copiarclick;

function MostrarOutput(s1, s2){
    for (let i = 0; i < preinfo.length; i++) {
        preinfo[i].style.display = s1;
    }
    output.style.display = s2;
    copiar.style.display = s2;
}

function validartexto() {
    if (input.value === "") {
        MostrarOutput("block", "none");
      return;
    }

    const regex = /[áéíóúÁÉÍÓÚñÑ¿¡«»“”‘’'"´`+*()\-–—/\\=|#@^\[\]{}%$§&~;:<>!?]/g;
    const cleanedText = input.value.replace(regex, "");
    input.value = cleanedText;
}

function copiarclick(){
    output.select();
    navigator.clipboard.writeText(output.value);
}

function resultado(text){
    output.value = text;
    MostrarOutput("none", "block");
}

function encriptar(){
    if (input.value !== ""){
        const texto = input.value;
        let encriptado = texto.toLowerCase();
        for (const letra in cifrado) {
            const regex = new RegExp(letra, "g");
            encriptado = encriptado.replace(regex, cifrado[letra]);
        }
        resultado(encriptado);
    }
}

function desencriptar(){
    if (input.value !== ""){
        const text = input.value;
        let desencriptado = text;
        for (const letra in cifrado) {
            const regex = new RegExp(cifrado[letra], "g");
            desencriptado = desencriptado.replace(regex, letra);
        }
        resultado(desencriptado);
    }
}