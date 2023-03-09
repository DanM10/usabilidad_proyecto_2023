let boton = document.getElementById('consulta');
let respuesta = document.getElementById('respuesta')
let editText = document.getElementById('id_number')


boton.addEventListener('click',enviarRespuesta);
if (editText.val() === '') {
    editText.attr("aria-invalid", "true");
    editText.addClass('failed');
} 

function enviarRespuesta(){
   respuesta.style.display = "";
}