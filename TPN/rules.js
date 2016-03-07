
function verifyComment(){

var nom = document.getElementById("nom");
var prenom = document.getElementById("prenom");
var email = document.getElementById("email");
var msg = document.getElementById("message");

var msgBox = document.getElementById("msgBox");


if(nom.value == '' || prenom.value == '' || email.value == '' || msg.value == '')
{
alert("Erreur\nIl faut remplir tout les champs");

}
else 
{
addComment();
}

}