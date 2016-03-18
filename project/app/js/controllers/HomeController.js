app.controller('HomeController', function(ComicsDataService, UsersDataService, $sessionStorage, $state) {
  this.comics = ComicsDataService.query();
  angular.forEach(this.comics, function (comic) {
    comic.stars = parseFloat(comic.stars);
  });
  this.newComic = {};
  this.userLogged = $sessionStorage.userLogged;
  this.newComments = [];

  this.addComic = function() {
  	this.newComic.cover = "no-image.png";
  	this.resultAddComic = ComicsDataService.add(this.newComic);
    this.newComic.comments = [];
  	this.newComic = {};
  }

  this.logout = function() {
    delete $sessionStorage.userLogged;
    $state.go('login');
  }

  this.deleteComic = function(comic) {
    delete comic.$$hashKey;
    ComicsDataService.delete(comic);
  }

  this.loanComic = function(comic) {
    delete comic.$$hashKey;
    ComicsDataService.loan(comic);
    UsersDataService.loan(comic,$sessionStorage.userLogged);
  }

  this.addComment = function(comic) {
    ComicsDataService.addComment(comic,this.newComment[comic.id],this.userLogged);
    this.newComment[comic.id] = "";
  }
});