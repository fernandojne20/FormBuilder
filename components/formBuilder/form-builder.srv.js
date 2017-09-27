(function () {

    var formBuilderSrv = function ($localStorage) {
        var srv = {};

        srv.getTypeConditions = getTypeConditions;
        srv.getInput = getInput;
        srv.saveForm = saveForm;
        srv.getForm = getForm;

        return srv;

        function getTypeConditions() {
            return [{label: "Text", value: "text", conditions: [
                            {label: "Equals", operator: "=", assignedValue: ""}
                        ]},
                    {label: "Number", value: "number", conditions: [
                            {label: "Equals", operator: "=", assignedValue: ""},
                            {label: "Greater than", operator: ">", assignedValue: ""},
                            {label: "Less than", operator: "<", assignedValue: ""}
                        ]},
                    {label: "Yes/No", value: "radio", conditions: [
                        {label: "Equals", operator: "=", assignedValue: ""}
                        ]}];
        }

        function getInput() {
            return {name: "", 
                    root: true, type: {}, 
                    selectedCondition: {}, 
                    conditions: [], 
                    nodes: []}
        }

        function saveForm(form) {
            $localStorage.form = form;
        }

        function getForm() {
            
            if(typeof($localStorage.form) == 'undefined'){
                return {json: "Representing the structure of Form",
                            elements: [srv.getInput()]}
            }else{
                return $localStorage.form;
            }
            
        }

    };

    //Inject Services Dependencies
    formBuilderSrv.$inject = ['$localStorage'];


    angular.module('formBuilder').factory('FormBuilderSrv', formBuilderSrv);

}());