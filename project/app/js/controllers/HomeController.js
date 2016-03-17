app.controller('HomeController', function($scope, ComicsDataService, UsersDataService, $sessionStorage, $state) {
  this.comics = ComicsDataService.query();
  angular.forEach(this.comics, function (comic) {
    comic.stars = parseFloat(comic.stars);
  });
  this.newComic = {};
  this.userLogged = $sessionStorage.userLogged;

  this.addComic = function() {
  	this.newComic.cover = "no-image.png";
  	this.resultAddComic = ComicsDataService.add(this.newComic);
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
    $sessionStorage.userLogged.borrowed.push(comic);
    UsersDataService.loan(comic,$sessionStorage.userLogged);
  }

  this.goToMyBorrowedComics = function() {
    $state.go('borrowed');
  }
});