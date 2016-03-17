var app = angular.module('app', ['ui.router', 'ngStorage']);

app.value('urlComicsJson', 'http://localhost/angularjs-training/project/data/comics.json');

app.config(function($locationProvider) {
  $locationProvider.html5Mode(true);
});

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'views/home.html',
      controller: 'HomeController as homeCtrl',
      data: {
        requireLogin: true
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
    .state('register', {
      url: '/register',
      templateUrl: 'views/register.html',
      controller: 'RegisterController as registerCtrl',
      data: {
        requireLogin: false
      }
    })
    .state('borrowed', {
      url: '/borrowed',
      templateUrl: 'views/borrowed.html',
      controller: 'BorrowedController as borrowedCtrl',
      data: {
        requireLogin: false
      }
    })
});

app.run(function($rootScope, $sessionStorage, $state) {
  $rootScope.$on('$stateChangeStart', function (event, toState) {
    var requireLogin = toState.data.requireLogin;
    if (requireLogin && !$sessionStorage.userLogged) {
      event.preventDefault();
      $state.go('login');
    }
  });
});