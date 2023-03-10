let boton = document.getElementById('consulta');
let respuesta = document.getElementById('respuesta')
let editText = document.getElementById('id_number')
let columna = document.getElementsByTagName('th')
let respuestaCol = document.getElementsByTagName('td')
const regexNumber = new RegExp('[1-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]')
let elementosBarraBottom = document.getElementsByClassName('barra_bottom')[0]
let elementosABottom = elementosBarraBottom.getElementsByTagName('a')
let iconosBarra = elementosBarraBottom.getElementsByTagName('i')


for(var i=0;i<columna.length;i++){
    columna[i].setAttribute("tabindex","1")
}

for(var i=0;i<respuestaCol.length;i++){
    respuestaCol[i].setAttribute("tabindex","1")
}

for(var i=0;i<elementosABottom.length;i++){
    elementosABottom[i].setAttribute("tabindex","1")
}
for(var i=0;i<iconosBarra.length;i++){
    iconosBarra[i].setAttribute("tabindex","1")
}

boton.addEventListener('click',enviarRespuesta);



function enviarRespuesta(){
   if (regexNumber.test(parseInt(editText.value))) {
    respuesta.style.display = "";
    editText.setAttribute("aria-invalid", "false");
    }else{
        editText.setAttribute("aria-invalid", "true");
    editText.classList.add('failed');
        alert("Porfavor ingrese un numero valido")
        console.log('sdfsadf')
    }
}

