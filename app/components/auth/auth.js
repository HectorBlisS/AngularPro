(function(){

    let authorization = {
        controller:authController,
        templateUrl:'app/components/auth/auth.html'
    }

    function authController($firebaseAuth) {
        let self = this;
        self.user = null;
        self.err = null;
        var auth = $firebaseAuth();
        self.isLogged = false;
        
        // Checamos is está el usuario
        auth.$onAuthStateChanged(function(fuser){
        	if(fuser){
        		self.user = fuser;
        		self.isLogged = true;
        	}else{
        		console.log('nanai',fuser);
        		self.user = null;
        	}
        });
        // Checamos is está el usuario


        self.logIn = function(){

        	$('#loader').slideToggle();

        	 //login with Google
        auth.$signInWithPopup('google')
        .then(function(response){
        	console.log('Entraste como: ', response.user.displayName);
        	self.user = {
        		uid:response.user.uid,
        		displayName:response.user.displayName,
        		email:response.user.email,
        		photoURL:response.user.photoURL
        	};
        	self.err = null;
        	$('#loader').slideToggle();
        })
        .catch(function(e){
        	console.log("FAlló ", e);
        	self.err = "No se pudo iniciar sesión intenta otra vez"
        	+e;
        	$('#loader').slideToggle();
        });

        }

        self.loginEmial = function(){

        	$('#loader').slideToggle();

        	auth.$signInWithEmailAndPassword(self.email,self.password)
        	.then(function(response){
        		console.log("entraste como: ",response.email);
        		self.user = {
        			uid:response.uid,
        			email:response.email
        		}
        		self.err = null;
        		$('#loader').slideToggle();
        	})
        	.catch(function(e){
        		console.log("FAlló ", e);
        	self.err = "No se pudo iniciar sesión intenta otra vez"
        	+e;
        	$('#loader').slideToggle();
        	});
        }

        self.signOut = function(){
        	auth.$signOut()
        	.then(function(){
        		self.user = null;
        		self.err = null;
        	})
        	.catch(function(){
        		console.log("FAlló ", e);
        	self.err = "No se pudo iniciar sesión intenta otra vez"
        	+e;
        	});
        }
       




    }

    angular
        .module('notas')
        .component('authComponent',authorization);


})();