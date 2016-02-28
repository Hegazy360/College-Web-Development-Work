// JavaScript Document

function searchKeyPress(e)
{
    // look for window.event in case event isn't passed in
    e = e || window.event;
    if (e.keyCode == 13 && document.getElementById("client").value.match(/^.*(?=.*[a-zA-Z]).*$/))
    {
        document.getElementById('send').click();
        return false;
    }
	
	else if (document.getElementById("client").value.match(/^\n/i))
	{
		document.getElementById("client").value="";
	}
	
    return true;
}

function confirm ()
{
if (document.getElementById("client").value.match(/^.*(?=.*[a-zA-Z]).*$/))
{
	clic();
	}	
	
	
}


function clic()
  {  
	var tableName;
	var color;
   	var type;
   	var size;
   	var clientInput = document.getElementById("client").value;
	document.getElementById("client").value = "";
    var chatWindow = document.getElementById("assisstant");
	var possibilities = ['Reply1\n\t', 'Reply2\n\t', 'Reply3\n\t'];
	var reply;
   
   	var findTableName = clientInput.match(/pants|pantalon|shoes|shoe/i);
	
	if (/pants|pantalon/i.test(findTableName))
	  {
		 tableName = "pants";
		 possibilities = ['So you are looking for new pants,one second\n\t', 'On it!\n\t', 'Looking for your pants right now\n\t'];
		 reply = possibilities[Math.floor(Math.random()*possibilities.length)];
		 
		
		 chatWindow.value = (chatWindow.value + "Client : " + clientInput + "\n\t");
		 
		//TODO add delay between replies
		 
		 chatWindow.value = (chatWindow.value + "Assisstant : " + reply);
		 chatWindow.scrollTop = chatWindow.scrollHeight;
	  }

	 else if (/shoes|shoe/i.test(findTableName))
	  {
		  tableName = "shoes";
		  possibilities = ['So you are looking for new shoes,one second\n\t', 'On it!\n\t', 'Looking for your shoes right now\n\t'];
		  reply = possibilities[Math.floor(Math.random()*possibilities.length)];
		
		
		 chatWindow.value = (chatWindow.value + "Client : " + clientInput + "\n\t");
		 
		//TODO add delay between replies
		 
		 chatWindow.value = (chatWindow.value + "Assisstant : " + reply);
		  chatWindow.scrollTop = chatWindow.scrollHeight;
	  
	  }
	  
	  else 
	  {	  
		  possibilities = ['Sorry,I don\'t have what you\'re looking for\n\t', 'What\n\t', 'Looks like we don\'t currently have what you\'re looking for\n\t'];
		  reply = possibilities[Math.floor(Math.random()*possibilities.length)];
		  
		  chatWindow.value = (chatWindow.value  + "Client : " + clientInput + "\n\t");
		  chatWindow.value = (chatWindow.value  + "Assisstant : " + reply);
		  chatWindow.scrollTop = chatWindow.scrollHeight;
	  }
	
	
}


