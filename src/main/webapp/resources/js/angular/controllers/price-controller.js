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
        
        self.install = {
            id: null,
            name: '',
            price: ''      
        };
        
        self.glasspacket = {
            id: null,
            name: '',
            price: ''      
        };
        
        
        self.sill = {
            id: null,
            name: '',
            price: ''      
        };
        
        
        self.installs = [];
        self.refluxes = [];
        self.typeprofils = [];
        self.sills=[];
        self.glasspackets=[];
       
  
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
        
        // для стеклопакета
        self.fetchAllUGlasspacket = function () {
            PriceService.fetchAllUGlasspacket()
                    .then(
                            function (d) {
                                self.glasspackets = d;
                                console.info(JSON.stringify(d));
                            },
                            function (errResponse) {
                                console.error('Error while fetching U(controller)');
                            }
                    );
        };

        self.fetchAllUGlasspacket();

        self.createUGlasspacket = function (unit) {
           PriceService.createUGlasspacket(unit)
                    .then(
                            self.fetchAllUGlasspacket,
                            function (errResponse) {
                                console.error('Error while creating U(controller)');
                            }
                    );
        };

        self.updateUGlasspacket = function (unit) {
            PriceService.updateUGlasspacket(unit)
                    .then(
                            self.fetchAllU,
                            function (errResponse) {
                                console.error('Error while updating U(controller)');
                            }
                    );
        };

        self.deleteUGlasspacket = function (unit) {
            PriceService.deleteUGlasspacket(unit)
                    .then(
                            self.fetchAllUGlasspacket,
                            function (errResponse) {
                                console.error('Error while deleting U(controller)');
                            }
                    );
        };
        
        self.editGlasspacket = function (unit) {
            console.log('Employee name to be edited', unit);
            self.glasspacket=unit;
            $scope.myForm.$setDirty();
        };
        
        self.submitGlasspacket = function () {
            console.info(angular.toJson(self.glasspacket));
            if (self.glasspacket.id === null) {
                console.log('Saving New Unit', self.glasspacket);
                self.createUGlasspacket(self.glasspacket);
            } else {
                self.updateUGlasspacket(self.glasspacket);
                console.log('Unit updated to  ', self.glasspacket);
            }
            self.reset();
        };
        
        
        // для установки
        self.fetchAllUInstall = function () {
            PriceService.fetchAllUInstall()
                    .then(
                            function (d) {
                                self.installs = d;
                                console.info(JSON.stringify(d));
                            },
                            function (errResponse) {
                                console.error('Error while fetching U(controller)');
                            }
                    );
        };

        self.fetchAllUInstall();

        self.createUInstall = function (unit) {
           PriceService.createUInstall(unit)
                    .then(
                            self.fetchAllUInstall,
                            function (errResponse) {
                                console.error('Error while creating U(controller)');
                            }
                    );
        };

        self.updateUInstall = function (unit) {
            PriceService.updateUInstall(unit)
                    .then(
                            self.fetchAllInstall,
                            function (errResponse) {
                                console.error('Error while updating U(controller)');
                            }
                    );
        };

        self.deleteUInstall = function (unit) {
            PriceService.deleteUInstall(unit)
                    .then(
                            self.fetchAllUInstall,
                            function (errResponse) {
                                console.error('Error while deleting U(controller)');
                            }
                    );
        };
        
        self.editInstall = function (unit) {
            console.log('Employee name to be edited', unit);
            self.install=unit;
            $scope.myForm.$setDirty();
        };
        
        self.submitInstall = function () {
            console.info(angular.toJson(self.install));
            if (self.install.id === null) {
                console.log('Saving New Unit', self.install);
                self.createUInstall(self.install);
            } else {
                self.updateUInstall(self.install);
                console.log('Unit updated to  ', self.install);
            }
            self.reset();
        };
        
        


    }]);