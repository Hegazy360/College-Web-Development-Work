var numberGenerated;

function CheckRange()
{
var num1 = document.getElementById("firstNumber");
var num2 = document.getElementById("secondNumber");
var max;
var min;
var guess = document.getElementById("guess");



if(parseInt(num1.value)>parseInt(num2.value))
{
max = parseInt(num1.value);
min = parseInt(num2.value);
}
else
{
max = parseInt(num2.value);
min = parseInt(num1.value);
}


if (guess.value >= max)
{guess.value=max;}
else if (guess.value <= 0)
{guess.value=null;}
else
{
return true;
}


}


function ChoisirNombre()
{
var a=document.getElementById("firstNumber");
var b=document.getElementById("secondNumber");


if(isNaN(parseInt(a.value)) || isNaN(parseInt(b.value))) {

alert("Valeur ne contient pas des chiffres");

}
else 
{

if (parseInt(a.value)>parseInt(b.value))
{
max = parseInt(a.value);
min = parseInt(b.value);
}
else {
max= parseInt(b.value);
min= parseInt(a.value);
}

if((max > 99999) || (min < 0))
{
alert("Nombre possible entre 0 et 99999")
}
else{
numberGenerated = Math.floor(Math.random() * (max - min + 1)) + min;
document.getElementById("guess").value = null;
document.getElementById("resultat").value=null;
alert("Proposer un nombre entre :\nmax:" + max + " et" + " min:" + min + "\n");

}
}
}

function VerifierNombre()
{

document.getElementById("resultat").readOnly = true;
if (document.getElementById("guess").value == numberGenerated)
{
document.getElementById("resultat").value = "Gagne!";
document.getElementById("firstNumber").value = null;
document.getElementById("secondNumber").value = null;
}

else if (document.getElementById("guess").value > numberGenerated)
{
document.getElementById("resultat").value = "C'est moins!";
document.getElementById("resultat").readOnly = false;
}
else {
document.getElementById("resultat").value = "C'est plus!";
document.getElementById("resultat").readOnly = false;
}


}