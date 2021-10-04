document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
  });
  
  function validarFormulario(evento) {
    evento.preventDefault();

    var nombre = document.getElementById('cName').value;
    if(nombre.length == 0) {
      alert('Favor ingresar datos en nombre');
      return;
    }
    var correo = document.getElementById('cCorreo').value;
    if (correo.length == 0) {
      alert('Favor ingresar datos en correo');
      return;
    }
    var mensaje = document.getElementById('cMensaje').value;
    if (mensaje.length == 0) {
      alert('Favor ingresar datos en mensaje');
      return;
    }
    alert('Mensaje enviado correctamente');
    this.submit();
  }