
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
		
		var email = document.getElementById("email").value;
		var password = document.getElementById("password").value;
		if(email =='')
		{
			alert("please enter user name.");
		}
		else if(password=='')
		{
        	alert("enter the password");
		}
		else{
			window.location.assign("dashboard.html");
			
		}
		
		
		const promise = auth.signInWithEmailAndPassword(email.value, password.value);
		promise.catch(e => alert(e.message));
		
    
		
		
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
	


 