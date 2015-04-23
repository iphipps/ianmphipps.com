'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.work',
  'myApp.resume',
  'myApp.about',
  'myApp.daylight',
  'myApp.version',
  'myApp.routeHelpers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/work'});
}]);



