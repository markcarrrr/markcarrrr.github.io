(function() {
	'use strict';

	MCAPP.controller('navigation', ['$scope', '$http', '$sce', function ($scope, $http, $sce) {

		$scope.currentIndex = 0;

		$scope.toggleNav = function($index) {
			$scope.toggle = !$scope.toggle;

			if(angular.isDefined($index)) {
				$scope.currentIndex = $index;
			}
		};

		$http({
			method: 'GET',
			url: '../data/navigation-items.json'
		}).then(function successCallback(response) {
			$scope.listItems = response.data;
		}, function errorCallback(response) {
			// HANDLE ERROR!
		});

	}]);

})();
