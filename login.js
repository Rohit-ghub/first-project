var attempt = 3; //Variable to count number of attempts

//Below function Executes on click of login button
function validate(){
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;

	if ( username == "rohit" && password == "rohit"){
		alert ("submitted successfully");
		window.location = "success.html"; //redirecting to other page
		return false;
	}
	else{
		attempt --;//Decrementing by one
		alert("Incorrect Content...!! ");
		if( attempt == 0){
			document.getElementById("username").disabled = true;
			document.getElementById("password").disabled = true;
			document.getElementById("submit").disabled = true;
			return false;
		}
		
	}
}