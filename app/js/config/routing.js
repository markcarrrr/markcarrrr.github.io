(function() {
	'use strict';

	MCAPP.config(['$routeProvider', function($routeProvider) {

		$routeProvider
			.when('/', {
				templateUrl: 'views/view1/template.html',
				controller: 'view1'
			})
			.when('/case-studies', {
				templateUrl: 'views/view2/template.html',
				controller: 'view2'
			});

	}]);

})();
