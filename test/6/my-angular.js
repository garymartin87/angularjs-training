var app = angular.module('app', ['ngRoute']);


app.config(function($locationProvider) {
  $locationProvider.html5Mode(true);
});

app.config(function($routeProvider) {
  $routeProvider
    .when('/index.html', {
      controller: 'HomeController',
      templateUrl: 'views/events/index.html'
    })
    .when('/events', {
      controller: 'EventsController',
      templateUrl: 'views/events/index.html'
    });
});

app.value('eventsLog', []);
app.factory('logEvent', function(eventsLog) {
  return function(event) {
    eventsLog.push(event.name);
  };
});


app.controller('HomeController', function($scope, $location, $rootScope, eventsLog, logEvent) {
  $scope.location = $location.absUrl();
  $scope.link = {path: 'events', title: 'Events'};
  eventsLog.push("HomeController: " + $location.path());

  $rootScope.$on('$routeChangeStart', logEvent);
  $rootScope.$on('$locationChangeStart', logEvent);
  $rootScope.$on('$locationChangeSuccess', logEvent);
  $rootScope.$on('$routeChangeSuccess', logEvent);

  $scope.eventsLog = eventsLog;
});

app.controller('EventsController', function($scope, eventsLog, $location) {
  $scope.location = $location.absUrl();
  $scope.link = {path: 'index.html', title: 'Home'};

  eventsLog.push("EventsController: " + $location.path());
  $scope.eventsLog = eventsLog;
});