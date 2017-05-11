'use strict';
app.controller('ControllerCallGauger', ['$scope', 'ServiceCallGauger',
    function ($scope, ServiceCallGauger) {
        var self = this;


        self.checkboxModel = {
            value1: null,
        };

      

        self.callGauger = {
            id: null,
            phone: null,
            dateadd: null,
            description: null,
            dateclose: null,
            open: null,
            fio: null
        };

        $scope.filterA = function (item) {
            console.log(item.open);

            console.log(self.checkboxModel.value1);
            return item.open === self.checkboxModel.value1 || self.checkboxModel.value1 === null;

        };


        self.units = [];
        self.fetchAllU = function () {

            ServiceCallGauger.fetchAllU()
                    .then(
                            function (d) {
                                self.units = d;
                                console.info(JSON.stringify(d));
                            },
                            function (errResponse) {
                                console.error('Error while fetching U(controller)');
                            }
                    );
        };

        self.fetchAllU();



        self.updateU = function (unit) {
            ServiceCallGauger.updateU(unit)
                    .then(
                            self.fetchAllU,
                            function (errResponse) {
                                console.error('Error while updating U(controller)');
                            }
                    );
        };

        self.deleteU = function (unit) {
            ServiceCallGauger.deleteU(unit)
                    .then(
                            self.fetchAllU,
                            function (errResponse) {
                                console.error('Error while deleting U(controller)');
                            }
                    );
        };


        self.submit = function (unit) {
            
            if (unit.id === null) {
                console.log('Saving New Unit', unit);
                self.createU(unit);
            } else {
                unit.open=true;
                self.updateU(unit);
                console.log('Unit updated to  ', unit);
            }
           
        };


    }]);