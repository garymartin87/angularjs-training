app.controller('HomeController', function($scope, ComicsDataService, $sessionStorage, $state) {
  this.comics = ComicsDataService.query();
  console.log(this.comics);
  angular.forEach(this.comics, function(value, key) {
    var starsArray = [];
    for (var i = 1; i <= value.stars; i++) {
      console.log("agrega");
      starsArray.push({i:'s'});
    }
    value.stars = starsArray;
  });

  console.log(this.comics);

  this.newComic = {};
  this.userLogged = $sessionStorage.userLogged;

  this.addComic = function() {
  	this.newComic.cover = "no-image.png";

  	stars = [];
  	for (var i = 0; i <= this.newComic.stars; i++) {
  		k = i.toString();
  		stars.push({k:'s'});
  	};
  	this.newComic.stars = stars;

  	this.resultAddComic = ComicsDataService.add(this.newComic);
  	this.newComic = {};
  }

  this.logout = function() {
    delete $sessionStorage.userLogged;
    $state.go('login');
  }

  this.deleteComic = function(comic) {
    delete comic.$$hashKey;
    delete comic.stars;
    ComicsDataService.delete(comic);
  }

  this.loanComic = function(comic) {
    delete comic.$$hashKey;
    delete comic.stars;
    ComicsDataService.loan(comic); 
  }
});