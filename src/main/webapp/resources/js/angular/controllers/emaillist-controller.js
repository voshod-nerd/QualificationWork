'use strict';
app.controller('EmaillistController', ['$scope', 'EmaillistService',
    function ($scope, EmaillistService) {
        var self = this;

        self.unit = {
            id: null,
            fio: '',
            email: '',
            phone:'',
            send: null
            
        };
        self.units = [];
        
         $scope.search = '';
  
        self.fetchAllU = function () {
            EmaillistService.fetchAllU()
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

        self.createU = function (unit) {
            EmaillistService.createU(unit)
                    .then(
                            self.fetchAllU,
                            function (errResponse) {
                                console.error('Error while creating U(controller)');
                            }
                    );
        };

        self.updateU = function (unit) {
            EmaillistService.updateU(unit)
                    .then(
                            self.fetchAllU,
                            function (errResponse) {
                                console.error('Error while updating U(controller)');
                            }
                    );
        };

        self.deleteU = function (unit) {
            EmaillistService.deleteU(unit)
                    .then(
                            self.fetchAllU,
                            function (errResponse) {
                                console.error('Error while deleting U(controller)');
                            }
                    );
        };


      

        self.edit = function (unit) {
            console.log('Employee name to be edited', unit);
            /*var department = (employee.department !== null) ?
             JSON.stringify(employee.department) : null;
             var post = (employee.post !== null) ?
             JSON.stringify(employee.post) : null;
             self.employee = employee;
             */
            //self.unit=unit;
            self.updateU(unit);
            
            //$scope.myForm.$setDirty();
        };


        self.reset = function () {
           self.unit = {
            id: null,
            fio: '',
            email: '',
            phone:'',
            send: null
            
        };
            $scope.myForm.$setPristine(); //reset Form
        };

        self.submit = function () {
            // console.log('department - ' + self.employee.department);
            /* var department = self.employee.department !== null ?
             JSON.parse(self.employee.department) : null;
             var post = self.employee.post !== null ?
             JSON.parse(self.employee.post) : null;
             */
            //self.unit.location = department;
            //self.unit.name = post;
            console.info(angular.toJson(self.unit));
            if (self.unit.id === null) {
                console.log('Saving New Unit', self.unit);
                self.createU(self.unit);
            } else {
                self.updateU(self.unit);
                console.log('Unit updated to  ', self.unit);
            }
            self.reset();
        };


    }]);