app.factory('UsersDataServices', function() {
  return {
    CheckCredentials: function(username, password) {
      console.log(username);
      console.log(password);
    }
  }
});
