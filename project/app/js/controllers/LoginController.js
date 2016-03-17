app.controller('LoginController', function(UsersDataService, $sessionStorage, $state) {
  this.checkCredentials = function(user) {
    var resultCheckCredentials = UsersDataService.get(user);
    if(resultCheckCredentials) {
    	$sessionStorage.userLogged = resultCheckCredentials;
    	$state.go('home');
    	return true;
    } else {
    	return false;
    }
  };
});