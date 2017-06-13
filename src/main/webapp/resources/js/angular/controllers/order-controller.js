'use strict';
app.controller('ControllerOrder', ['$scope', 'ServiceOrder',
    function ($scope, ServiceOrder) {
        var self = this;



        self.order = {
            id: null,
            typeorder: null,
            typeprofil: null,
            glasspacket: null,
            sill: null,
            reflux: null,
            install: null,
            price: '',
            furnitura: '',
            param: ''
        };
        self.units = [];
        
        
         
        self.ShowFurnitura = function (item) {
             var text = '';
            var elements = item.split(';');
            for (var i = 0; i < elements.length; i++) {
                var parts = elements[i].split('=');
                switch (parts[0]) {
                    case 'W1':
                    {
                        text = text + "Окно 1 - " + parts[1]+'\n';
                        break;
                    }
                    case 'W2':
                    {
                        text = text + "Окно 2 - " + parts[1]+'\n';
                        break;
                    }
                    case 'W3':
                    {
                        text = text + "Окно 3 - " + parts[1]+'\n';
                        break;
                    }
                    case 'W4':
                    {
                        text = text + "Окно 4 - " + parts[1]+'\n';
                        break;
                    }
                    default: {break}
                   

                }

            }
         return text;

          
        };
        self.ShowParametres = function (item) {
            var text = '';
            var elements = item.split(':');
            for (var i = 0; i < elements.length; i++) {
                var parts = elements[i].split('=');
                switch (parts[0]) {
                    case 'W1V':
                    {
                        text = text + "Окно 1 вертикаль=" + parts[1];
                        break;
                    }
                    case 'W1H':
                    {
                        text = text + " горизонталь=" + parts[1]+'\n';
                        break;
                    }
                    case 'W2V':
                    {
                        text = text + "Окно 1 вертикаль=" + parts[1];
                        break;
                    }
                    case 'W2H':
                    {
                        text = text + " горизонталь=" + parts[1]+'\n';
                        break;
                    }
                    case 'W3V':
                    {
                        text = text + "Окно 3 вертикаль=" + parts[1];
                        break;
                    }
                    case 'W3H':
                    {
                        text = text + "горизонталь=" + parts[1]+'\n';
                        break;
                    }
                    case 'W4V':
                    {
                        text = text + "Окно 4 вертикаль=" + parts[1];
                        break;
                    }
                    case 'W4H':
                    {
                        text = text + "горизонталь=" + parts[1]+'\n';
                        break;
                    }  
                    case 'D1V':
                    {
                        text = text + "Окно 4 :вертикаль=" + parts[1];
                        break;
                    }
                    case 'D1H':
                    {
                        text = text + " горизонталь=" + parts[1];
                        break;
                    }

                }

            }
         return text;
           
        };



        self.fetchAllU = function () {

            ServiceOrder.fetchAllU()
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
            ServiceOrder.createU(unit)
                    .then(
                            self.fetchAllU,
                            function (errResponse) {
                                console.error('Error while creating U(controller)');
                            }
                    );
        };

        self.updateU = function (unit) {
            ServiceOrder.updateU(unit)
                    .then(
                            self.fetchAllU,
                            function (errResponse) {
                                console.error('Error while updating U(controller)');
                            }
                    );
        };

        self.deleteU = function (unit) {
            ServiceOrder.deleteU(unit)
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
            unit.open = true;
            console.log('Unit updated to  ', unit);
            self.updateU(unit);
        };


    }]);