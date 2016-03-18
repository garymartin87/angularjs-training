app.controller('RegisterController', function(UsersDataService, $state, $sessionStorage) {

  this.register = function(user) {
  	this.errorMessages = [];

  	if(user.password != user.password2) {
  		this.errorMessages.push("Passwords do not match");
  	}

  	if(user.username.length < 7) {
  		this.errorMessages.push("The username should have a length of at least 7 characters");
  	}

  	checkUsername = {
  		"username": user.username
  	};
  	if(UsersDataService.get(checkUsername)){
  		this.errorMessages.push("The username alredy exists");
  	}

  	if(/^[a-zA-Z0-9- ]*$/.test(user.username) == false) {
  		this.errorMessages.push("The username contains illegal characters.");
  	}


  	if(!this.errorMessages.length) {
  		delete user.password2;
  		user.role = "user";
      user.borrowed = [];
  		UsersDataService.register(user);
      $sessionStorage.userLogged = user;
      $state.go('home');
  	}
  };
});