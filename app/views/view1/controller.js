(function() {
	'use strict';

	MCAPP.controller('view1', function($scope, $rootScope) {

		$rootScope.root = {
			page: {
				title: 'About me as a Frontend Developer'
			}
		};

		$scope.content = {
			quote: 'All in all I currently have over fifteen years experience.'
		}

	});

})();
