'use strict';

angular.module('myApp.work', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
	  when('/work', {
	    templateUrl: 'work/work.html',
	    controller: 'WorkCtrl'
	  }).
	  when('/work/:worktitle', {
	        templateUrl: 'work/work-singular.html',
	        controller: 'workSingular'
	  }).
	  otherwise({redirectTo: '/work'});
}])

.controller('WorkCtrl', ['$scope', function($scope) {
	$scope.workItems = workItems;
	//console.log('$scope.workItems', $scope.workItems);
}])
.controller('workSingular', ['$scope', '$routeParams', function($scope, $routeParams) {
	$scope.workItem = _.filter(workItems, function(workItem){return workItem.id == $routeParams.worktitle ;})[0]; 

}]);

