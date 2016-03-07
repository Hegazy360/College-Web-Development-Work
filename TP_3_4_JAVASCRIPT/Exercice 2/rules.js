function displayKeyboard()
{
var html = '';
var c;
for (var i = 97; 122 >= i; i++) {// a-97, z-122
  c = String.fromCharCode(i);
  html += '<button type = "button" onclick="check(\'' + c + '\');">' + c + '</button>';
}
document.getElementById('lettresBox').innerHTML = html;
}




var a_trouver;
var longueur;
var lettres = new Array(); //ou var lettres = []; ?? 
var nb_erreurs = parseInt(document.getElementById("erreurs").value);;
var words = new Array("capuchon","parachute","baobab","lynx","crocus","cerise","pluton","visage","fragile", "microbe","passage","royaume","statuette","typhon","arsenic","domino","afrique","iguane","groseille","lumineux");


function ChoisirMot()
{
	if(nb_erreurs==6)
	{
		
		  document.getElementById("gameForm").reset();
		  nb_erreurs = 0;
		  a_trouver = null;
		 
		  
	}
	
	a_trouver = words[Math.floor(Math.random() * (words.length))];
	longueur = a_trouver.length;
	alert(a_trouver);
	displayKeyboard();
	document.getElementById("lettresBox").className += 'show';
	afficheMot(a_trouver);
	
}



function afficheMot(a_trouver)
{	
	//alert(typeof a_trouver + a_trouver[0]);
	var inputMot = document.getElementById("mot");
		inputMot.value = null;
		lettres = [];
	for (var n=0;n<longueur;n++)
	{
		lettres.push("-");

	}
	alert(lettres);
	inputMot.value = lettres.join('');
}

function check(x) {
  var inputMot = document.getElementById("mot");
  var erreurs = document.getElementById("erreurs");
  var lettresProposer = document.getElementById("lettres");
  var err = 1;
  
  inputMot.value=null;
  
  for(var n = 0;n<longueur;n++)
  {
	  
	  if(a_trouver[n]==x)
	  {
		  lettres.splice(n,1,x)
		  
		  err = 0;
	  }
	  inputMot.value = lettres.join('');
	   
  }
	  if(err==1)
	  {
		  nb_erreurs+=1;
		  erreurs.value = nb_erreurs;
		  lettresProposer.value += x;
	  }
	  
	  if(nb_erreurs == 6)
	  {
		  alert("GAME OVER\nMaximum Nombre D'Erreurs\nLe Mot Est : "+ a_trouver);
		  
		  ChoisirMot();
		 
	  }
	  
	 
	 
		
		
		
		
		
	  }
  
  
 
  
  
 



