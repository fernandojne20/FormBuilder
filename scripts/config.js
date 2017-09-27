(function () {
	
	function config($stateProvider, $urlRouterProvider) {
		
		$urlRouterProvider.otherwise('/builder');

		$stateProvider
			.state('builder',{
				url: '/builder',
				templateUrl: 'components/formBuilder/form-builder.html'
			});
	};

	angular.module('formBuilder')
		.config(config);
})();