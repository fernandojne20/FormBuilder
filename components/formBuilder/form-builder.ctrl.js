(function () {
	// body...

	var formBuilderCtrl = function ($scope, FormBuilderSrv) {

		$scope.printPrettyJson = printPrettyJson;
	    $scope.delete = deleteNodes;
	    $scope.add = addNodes;
	    $scope.addInput = addInput;
	    
	    initController();

	    function initController() {

	    	initForm();
		    	    

			$scope.typeConditions = FormBuilderSrv.getTypeConditions();	
	    }

	    function initForm() {

	    	$scope.tree = FormBuilderSrv.getForm();
	    }
	   	function addInput() {

	    	$scope.tree.elements.push(FormBuilderSrv.getInput());	  
	    	FormBuilderSrv.saveForm($scope.tree);
	   		
	   	}
	    function addNodes(data) {
	    		        data.nodes.push({name: '', 
	        					root:false,type: {}, 
	        					selectedCondition: {},
	        					conditions: angular.copy(data.type.conditions),
	        					parentTypeValue: angular.copy(data.type.value) ,
	        					nodes: []}); 

	    	FormBuilderSrv.saveForm($scope.tree);
	    }

	    function deleteNodes(data) {
	    	data.nodes = []; 
	    	FormBuilderSrv.saveForm($scope.tree);
	    }
	    function printPrettyJson() {
	    	$scope.prettyJson = angular.toJson($scope.tree,2);
	    }
	}



	formBuilderCtrl.$injector = ['$scope','FormBuilderSrv'];

	angular.module("formBuilder").
		controller("FormBuilderCtrl", formBuilderCtrl); 
})();

