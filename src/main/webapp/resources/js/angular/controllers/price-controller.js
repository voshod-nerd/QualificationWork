'use strict';
app.controller('PriceController', ['$scope', 'PriceService',
    function ($scope, PriceService) {
        var self = this;

        self.typeprofil = {
            id: null,
            name: '',
            price: ''      
        };
        
        self.reflux = {
            id: null,
            name: '',
            price: ''      
        };
        
        self.sill = {
            id: null,
            name: '',
            price: ''      
        };
        
        
        
        self.refluxes = [];
        self.typeprofils = [];
        self.sills=[];
       
  
        self.fetchAllU = function () {
            PriceService.fetchAllU()
                    .then(
                            function (d) {
                                self.typeprofils = d;
                                console.info(JSON.stringify(d));
                            },
                            function (errResponse) {
                                console.error('Error while fetching U(controller)');
                            }
                    );
        };

        self.fetchAllU();

        self.createU = function (unit) {
           PriceService.createU(unit)
                    .then(
                            self.fetchAllU,
                            function (errResponse) {
                                console.error('Error while creating U(controller)');
                            }
                    );
        };

        self.updateU = function (unit) {
            PriceService.updateU(unit)
                    .then(
                            self.fetchAllU,
                            function (errResponse) {
                                console.error('Error while updating U(controller)');
                            }
                    );
        };

        self.deleteU = function (unit) {
            PriceService.deleteU(unit)
                    .then(
                            self.fetchAllU,
                            function (errResponse) {
                                console.error('Error while deleting U(controller)');
                            }
                    );
        };
        

      

        self.edit = function (unit) {
            console.log('Employee name to be edited', unit);
            self.typeprofil=unit;
            $scope.myForm.$setDirty();
        };


        self.reset = function () {
            self.unit = {
                id: null,
                name: '',
                price: ''
            };
            $scope.myForm.$setPristine(); //reset Form
        };

        self.submit = function () {
            console.info(angular.toJson(self.typeprofil));
            if (self.typeprofil.id === null) {
                console.log('Saving New Unit', self.typeprofil);
                self.createU(self.typeprofil);
            } else {
                self.updateU(self.typeprofil);
                console.log('Unit updated to  ', self.typeprofil);
            }
            self.reset();
        };
        
        self.fetchAllUReflux = function () {
            PriceService.fetchAllUReflux()
                    .then(
                            function (d) {
                                self.refluxes = d;
                                console.info(JSON.stringify(d));
                            },
                            function (errResponse) {
                                console.error('Error while fetching U(controller)');
                            }
                    );
        };

        self.fetchAllUReflux();

        self.createUReflux = function (unit) {
           PriceService.createUReflux(unit)
                    .then(
                            self.fetchAllUReflux,
                            function (errResponse) {
                                console.error('Error while creating U(controller)');
                            }
                    );
        };

        self.updateUReflux = function (unit) {
            PriceService.updateUReflux(unit)
                    .then(
                            self.fetchAllU,
                            function (errResponse) {
                                console.error('Error while updating U(controller)');
                            }
                    );
        };

        self.deleteUReflux = function (unit) {
            PriceService.deleteUReflux(unit)
                    .then(
                            self.fetchAllUReflux,
                            function (errResponse) {
                                console.error('Error while deleting U(controller)');
                            }
                    );
        };
        
        self.editReflux = function (unit) {
            console.log('Employee name to be edited', unit);
            self.reflux=unit;
            $scope.myForm.$setDirty();
        };
        
        self.submitReflux = function () {
            console.info(angular.toJson(self.reflux));
            if (self.reflux.id === null) {
                console.log('Saving New Unit', self.reflux);
                self.createUReflux(self.reflux);
            } else {
                self.updateUReflux(self.reflux);
                console.log('Unit updated to  ', self.reflux);
            }
            self.reset();
        };
        
        // для подоконника
        self.fetchAllUSill = function () {
            PriceService.fetchAllUSill()
                    .then(
                            function (d) {
                                self.sills = d;
                                console.info(JSON.stringify(d));
                            },
                            function (errResponse) {
                                console.error('Error while fetching U(controller)');
                            }
                    );
        };

        self.fetchAllUSill();

        self.createUSill = function (unit) {
           PriceService.createUSill(unit)
                    .then(
                            self.fetchAllUSill,
                            function (errResponse) {
                                console.error('Error while creating U(controller)');
                            }
                    );
        };

        self.updateUSill = function (unit) {
            PriceService.updateUSill(unit)
                    .then(
                            self.fetchAllU,
                            function (errResponse) {
                                console.error('Error while updating U(controller)');
                            }
                    );
        };

        self.deleteUSill = function (unit) {
            PriceService.deleteUSill(unit)
                    .then(
                            self.fetchAllUSill,
                            function (errResponse) {
                                console.error('Error while deleting U(controller)');
                            }
                    );
        };
        
        self.editSill = function (unit) {
            console.log('Employee name to be edited', unit);
            self.sill=unit;
            $scope.myForm.$setDirty();
        };
        
        self.submitSill = function () {
            console.info(angular.toJson(self.sill));
            if (self.sill.id === null) {
                console.log('Saving New Unit', self.sill);
                self.createUSill(self.sill);
            } else {
                self.updateUSill(self.sill);
                console.log('Unit updated to  ', self.sill);
            }
            self.reset();
        };


    }]);