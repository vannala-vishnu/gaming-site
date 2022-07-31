
var firebaseConfig = {
    apiKey: "AIzaSyAPeWE7AECnjomxZQe7dpD123aT1wTuXXY",
    authDomain: "minigames-b730b.firebaseapp.com",
    projectId: "minigames-b730b",
    storageBucket: "minigames-b730b.appspot.com",
    messagingSenderId: "735870351349",
    appId: "1:735870351349:web:96dac61949a79bb0cad2bc"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
	
	
	function signUp(){
		
		var email = document.getElementById("email");
		var password = document.getElementById("password");
		
		const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
		promise.catch(e => alert(e.message));
		
		alert("Signed Up");
	}
	
	
	
	function signIn(){
		var userEmail = document.getElementById("email").value;
    var userPass = document.getElementById("password").value;
  
    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
  
      window.alert("Error : " + errorMessage);
  
      // ...
    });
		
		
}
	
	function signOut(){
		
		auth.signOut();
		alert("Signed Out");
		window.location.assign("index.html");
		
	}
	
	
	
	auth.onAuthStateChanged(function(user){
		
		if(user){
			
			var email = user.email;
			alert("Active User " + email);
			
			//Take user to a different or home page

			//is signed in
			
		}else{
			
			alert("HELLO THERE");
			//no user is signed in
		}
		
		
		
	});
	


 