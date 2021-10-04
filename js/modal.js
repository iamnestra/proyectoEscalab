
//PARA USAR EL SCRIPT ARRIBA
//document.addEventListener("DOMContentLoaded", function(event){
//OBTIENE EL MODAL
//var modal = document.getElementById("myModal");
//OBTIENE EL BOTON
//var btn = document.getElementById("myBtn");
//OBTIENE BOTON PARA CERRAR MODAL
//var span = document.getElementsByClassName("close")[0];
// CREAR EVENTO CLICK PARA EL BOTON 
//btn.onclick = function(){
//    modal.style.display = "block";
//}
//});



//OBTIENE EL MODAL
var modal = document.getElementById("myModal");

//OBTIENE EL BOTON
var btn = document.getElementById("myBtn");

//OBTIENE BOTON PARA CERRAR MODAL
var span = document.getElementsByClassName("close")[0];

// CREAR EVENTO CLICK PARA EL BOTON 
btn.onclick = function(){
    modal.style.display = "block";
}

//CERRAR MODAL
span.onclick = function(){
    modal.style.display= "none";
}


