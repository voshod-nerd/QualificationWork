'use strict';
app.controller('CreatelistController', ['$scope', 'CreatelistService',
    function ($scope, CreatelistService) {
        var self = this;

        self.unit = {
            id: null,
            name: '' 
        };
        
        self.listUnit = {
            id: null,
            name: ''
            
            
        };
         self.email = {
            id: null,
            fio: '',
            email:'' 
        };
        
        self.listUnits=[];
        self.units = [];
        self.emails=[];
        
        self.search = '';
        self.searchEmail='';
        self.chosenDeliveryList=null;
        self.createdElement ={
            id: null,
            idDeliveryList: null,
            idItemDelivery: null
        };
        
         
         self.choseList = function (unit) {
              self.chosenDeliveryList=unit;
              self.search=unit.name;
              console.log(unit);
              console.log(self.search);
                      
             
         }; 
         
  
        self.fetchAllU = function () {
            CreatelistService.fetchAllU()
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
            CreatelistService.createU(unit)
                    .then(
                            self.fetchAllU,
                            function (errResponse) {
                                console.error('Error while creating U(controller)');
                            }
                    );
        };

        self.updateU = function (unit) {
            CreatelistService.updateU(unit)
                    .then(
                            self.fetchAllU,
                            function (errResponse) {
                                console.error('Error while updating U(controller)');
                            }
                    );
        };

        self.deleteU = function (unit) {
            CreatelistService.deleteU(unit)
                    .then(
                            self.fetchAllU,
                            function (errResponse) {
                                console.error('Error while deleting U(controller)');
                            }
                    );
        };
        
        
        /////////////////////////////////////// для списка рассылки //////////////
        self.fetchAllUListItems = function () {
            CreatelistService.fetchAllListItems()
                    .then(
                            function (d) {
                                self.listUnits = d;
                                console.info(JSON.stringify(d));
                            },
                            function (errResponse) {
                                console.error('Error while fetching U(controller)');
                            }
                    );
        };

        self.fetchAllUListItems();

        self.createUListItems = function (unit) {
            CreatelistService.createListItems(unit)
                    .then(
                            self.fetchAllUListItems,
                            function (errResponse) {
                                console.error('Error while creating U(controller)');
                            }
                    );
        };

        self.updateUListItems = function (unit) {
            CreatelistService.updateListItems(unit)
                    .then(
                            self.fetchAllUListItems,
                            function (errResponse) {
                                console.error('Error while updating U(controller)');
                            }
                    );
        };

        self.deleteUListItems = function (unit) {
            CreatelistService.deleteListItems(unit)
                    .then(
                            self.fetchAllUListItems,
                            function (errResponse) {
                                console.error('Error while deleting U(controller)');
                            }
                    );
        };
        self.addItemToListDelivery= function(unit) {
            self.createdElement.id=null;
            self.createdElement.idDeliveryList=self.chosenDeliveryList;
            self.createdElement.idItemDelivery=unit;
            self.createUListItems(self.createdElement);
            console.log(self.createdElement);
            
            
        };
        
        //////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////// для списка рассылки //////////////
        self.fetchAllEmails = function () {
            CreatelistService.fetchAllEmails()
                    .then(
                            function (d) {
                                self.emails = d;
                                console.info(JSON.stringify(d));
                            },
                            function (errResponse) {
                                console.error('Error while fetching U(controller)');
                            }
                    );
        };
        self.fetchAllEmails();


      

        self.edit = function (unit) {
            console.log('Employee name to be edited', unit);
            /*var department = (employee.department !== null) ?
             JSON.stringify(employee.department) : null;
             var post = (employee.post !== null) ?
             JSON.stringify(employee.post) : null;
             self.employee = employee;
             */
            self.unit=unit;
           // self.updateU(unit); 
        };


        self.reset = function () {
            self.unit = {
                id: null,
                
                name: ''
            };
           // $scope.myForm.$setPristine(); //reset Form
        };

        self.submit = function () {
            
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