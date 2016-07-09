(function() {

	mcApp.controller('Navigation', ['$scope', '$http', '$sce', function ($scope, $http, $sce) {

		$scope.toggleNav = function() {
			$scope.toggle = !$scope.toggle;
		};

		$http({
			method: 'GET',
			url: '../data/navigation-items.json'
		}).then(function successCallback(response) {
			$scope.listItems = response.data;
		}, function errorCallback(response) {});

	}]);

})();
