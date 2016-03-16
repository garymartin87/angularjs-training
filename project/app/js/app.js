var app = angular.module('app', ['ui.router', 'ngStorage']);

app.value('urlComicsJson', 'http://localhost/angularjs-training/project/data/comics.json');

app.config(function($locationProvider) {
  $locationProvider.html5Mode(true);
});

app.config(function($stateProvider, $urlRouterProvider) {
  // For any unmatched url
  $urlRouterProvider.otherwise("/");

  $stateProvider
  	.state('index', {
      url: '/',
      templateUrl: 'views/home.html',
      controller: 'HomeController as homeCtrl',
      data: {
        requireLogin: false
			}
    })
    .state('login', {
      url: '/login',
      templateUrl: 'views/login.html',
      controller: 'LoginController as loginCtrl',
      data: {
        requireLogin: false
			}
    })
  	.state('home', {
      url: '/home',
      templateUrl: 'views/home.html',
      controller: 'HomeController as homeCtrl',
      data: {
        requireLogin: false
			}
    })
    .state('register', {
      url: '/register',
      templateUrl: 'views/register.html',
      controller: 'RegisterController as registerCtrl',
      data: {
        requireLogin: false
      }
    })
});