var app = angular.module('app', []);

app.directive('box', function() {
  return {
    template: '<p class="bg-primary text-center" ng-transclude></p>',
    transclude: true
  };
});