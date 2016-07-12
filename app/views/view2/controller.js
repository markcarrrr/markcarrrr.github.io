(function() {
	'use strict';

	MCAPP.controller('view2', function($scope, $rootScope) {

		$rootScope.root = {
			page: {
				title: 'Let\'s look at some of my case studies'
			}
		};

		$scope.content = {
			quote: 'A personal highlight was having a codepen on picturefill \‘hearted\’ by Chris Coyier.'
		}

	});

})();
