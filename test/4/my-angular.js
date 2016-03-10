var app = angular.module('app', []);

app.directive('panel', function() {
  return {
    restrict: 'E',
    templateUrl: 'views/panel.html',
    scope: {
      title: '@'
    },
    transclude: true
  };
});

app.controller('MessageController', function($scope) {
  
});