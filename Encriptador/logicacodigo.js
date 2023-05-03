/*
Reglas de la encriptacion
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

function encriptador(){

    var textov1= document.getElementById("textoentrada").value;
    textov1= textov1.toLowerCase();
    console.log (textov1);


    var textoencriptado= textov1.replace(/e/igm,"enter");      /*.replaceAll("e","enter")*/
    textoencriptado = textoencriptado.replace(/o/igm,"ober");
    textoencriptado = textoencriptado.replace(/i/igm,"imes");
    textoencriptado = textoencriptado.replace(/a/igm,"ai");
    textoencriptado = textoencriptado.replaceAll("u","ufat");

    document.getElementById("textosalida").innerHTML = textoencriptado;
    console.log (textoencriptado);

    document.getElementById("figuramuneco").style.display = "none";
    document.getElementById("texto1").style.display = "none";
    document.getElementById("texto2").style.display = "none";

    document.getElementById("botoncopiar").style.display = "show";


}

function desencriptar(){

    var textov2= document.getElementById("textoentrada").value;
    textov2 = textov2.toLowerCase();

    var textodesencriptado= textov2.replaceAll("enter","e");
    textodesencriptado= textodesencriptado.replaceAll("ober","o");
    textodesencriptado= textodesencriptado.replaceAll("imes","i");
    textodesencriptado= textodesencriptado.replaceAll("ai","a");
    textodesencriptado= textodesencriptado.replaceAll("ufat","u");

    console.log(textodesencriptado);

    document.getElementById("textosalida").innerHTML = textodesencriptado;

}

function copiar(){
    var contenido = document.querySelector('#textosalida');
    //contenido.select();
    console.log(contenido);
    document.execCommand("copy");

}