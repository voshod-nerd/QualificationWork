'use strict';
app.controller('ControllerCallBack', ['$scope', 'ServiceCallBack',
    function ($scope, ServiceCallBack) {
        var self = this;


        self.checkboxModel = {
            value1: null,
        };

        self.callback = {
            id: null,
            phone: null,
            dateadd: null,
            description: null,
            dateclose: null,
            open: null,
            fio: null
        };

        $scope.filterA = function (item) {
            return item.open===self.checkboxModel.value1 || self.checkboxModel.value1===null;
            
        };
         

       

        self.units = [];



        self.fetchAllU = function () {

            ServiceCallBack.fetchAllU()
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
           ServiceCallBack.createU(unit)
                    .then(
                            self.fetchAllU,
                            function (errResponse) {
                                console.error('Error while creating U(controller)');
                            }
                    );
        }; 

        self.updateU = function (unit) {
            ServiceCallBack.updateU(unit)
                    .then(
                            self.fetchAllU,
                            function (errResponse) {
                                console.error('Error while updating U(controller)');
                            }
                    );
        };

        self.deleteU = function (unit) {
            ServiceCallBack.deleteU(unit)
                    .then(
                            self.fetchAllU,
                            function (errResponse) {
                                console.error('Error while deleting U(controller)');
                            }
                    );
        };

        self.edit = function (unit) {
            console.log('Unit name to be edited', unit);
            var idc = (unit.idclient !== null) ?
                    JSON.stringify(unit.idclient) : null;
            var idn = (unit.idnomer !== null) ?
                    JSON.stringify(unit.idnomer) : null;
            var idorg = (unit.idorg !== null) ?
                    JSON.stringify(unit.idorg) : null;


            self.unit = unit;
            self.unit.dateb = new Date(unit.dateb);
            self.unit.datee = new Date(unit.datee);
            self.unit.idclient = idc;
            self.unit.idnomer = idn;
            self.unit.idorg = idorg;

            $scope.myForm.$setDirty();
        };


        self.reset = function () {
            self.unit = {
                id: null,
                dateb: null,
                datee: null,
                idclient: null,
                idnomer: null
            };
            $scope.myForm.$setPristine(); //reset Form
        };

        self.submit = function (unit) {
                unit.open=true;
                console.log('Unit updated to  ', unit);
                self.updateU(unit);
        };


    }]);