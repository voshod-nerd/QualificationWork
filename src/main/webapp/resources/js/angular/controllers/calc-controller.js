'use strict';
app.controller('ControllerCalculator', ['$scope', 'ServiceCalculator',
    function ($scope, ServiceCalculator) {
        var self = this;


        self.value = '';

        self.error = '';



        self.typeoforders = [
            {id: 1, name: 'Односекционное окно',price:1500},
            {id: 2, name: 'Двухсекционное окно',price:1500},
            {id: 3, name: 'Трехсекционное окно',price:1500},
            {id: 4, name: 'Четырехсекционное окно',price:1500},
            {id: 5, name: 'Дверь',price:5000},
            {id: 6, name: 'Односекционное окно и дверь',price:5000},
            {id: 7, name: 'Двухсекционное окно и дверь',price:5000}

        ];


        self.order = {
            id: null,
            typeorder: null,
            typeprofil: null,
            glasspacket: null,
            windowSillWidth: null,
            refluxLength: null,
            install: null,
            width: 0,
            heigth: 0,
            price:0

        };


        self.type_profil =
                {
                    id: null,
                    name: '',
                    price: ''
                };
        self.type_profils = [
            {id: 1, name: 'Rehau Real', price: 1},
            {id: 2, name: 'Rehau Standart', price: 2},
            {id: 3, name: 'Rehau Lux', price: 3}
        ];

        self.glasspackets = [
            {id: 1, name: 'Стандрартный', price: 1},
            {id: 2, name: 'Теплосберегающий', price: 2},
            {id: 3, name: 'Солцезащитный', price: 3},
            {id: 4, name: 'Шумазащитный', price: 3}
        ];

        self.setSillWidth = [
            {id: 1, name: 'нет', price: 1},
            {id: 2, name: '100мм', price: 2},
            {id: 3, name: '150мм', price: 3},
            {id: 4, name: '200мм', price: 3},
            {id: 5, name: '250мм', price: 3},
            {id: 6, name: '300мм', price: 3},
            {id: 7, name: '350мм', price: 3},
            {id: 8, name: '400мм', price: 3},
            {id: 9, name: '450мм', price: 3},
            {id: 10, name: '500мм', price: 3},
        ];

        self.setRefluxLength = [
            {id: 1, name: 'нет', price: 1},
            {id: 2, name: '100мм', price: 2},
            {id: 3, name: '150мм', price: 3},
            {id: 4, name: '200мм', price: 3},
            {id: 5, name: '250мм', price: 3},
            {id: 6, name: '300мм', price: 3},
            {id: 7, name: '350мм', price: 3},
            {id: 8, name: '400мм', price: 3},
            {id: 9, name: '450мм', price: 3},
            {id: 10, name: '500мм', price: 3},
        ];

        self.installs = [
            {id: 1, name: 'Кирпичный  дом', price: 1300},
            {id: 2, name: 'Блочный дом', price: 1500},
            {id: 3, name: 'Деревянный дом', price: 1000}
        ];

        self.checkInstall = function () {
            if (self.install === false) {
                self.order.install = null;
            } else {
            }
        };

        self.calculatePrice = function () {
            if (self.order.typeorder === null)
            {
                self.error = "Вы не выбрали тип заказа!";
            } else {
                console.log('Chose type order');
                switch (self.order.typeorder.name) {
                    case 'Односекционное окно':
                    {  
                        var vertsize=angular.element('#W1vert_size').val()/1000;
                        var horsize=angular.element('#W1vert_size').val()/1000;
                        var squareMeter=(vertsize*horsize);
                        self.order.price=squareMeter*self.order.typeorder.price;
                        console.log(vertsize);
                        break;
                    }
                    case 'Двухсекционное окно':
                    {
                        break;
                    }
                    case 'Трехсекционное окно':
                    {
                        break;
                    }
                    case 'Четырехсекционное окно':
                    {
                        break;
                    }
                    case 'Дверь':
                    {
                        break;
                    }
                    case 'Односекционное окно и дверь':
                    {
                        break;
                    }
                    case 'Двухсекционное окно и дверь':
                    {
                        break;
                    }
                    default:
                    {
                        self.error = "Что то с типом заказа";
                        break;
                    }

                }




            }


        };


        self.chooseTypeOrder = function (type) {

            switch (type) {
                case '1window':
                {   
                    self.order.typeorder = self.typeoforders[0];
                    break;
                }
                case '2window':
                {
                    self.order.typeorder = self.typeoforders[1];
                    break;
                }
                case '3window':
                {
                    self.order.typeorder = self.typeoforders[2];
                    break;
                }
                case '4window':
                {
                    self.order.typeorder = self.typeoforders[3];
                    break;
                }
                case '1door':
                {
                    self.order.typeorder = self.typeoforders[4];
                    break;
                }
                case '1window1door':
                {
                    self.order.typeorder = self.typeoforders[5];
                    break;
                }
                case '2window1door':
                {
                    self.order.typeorder = self.typeoforders[6];
                    break;
                }
            }


        };



        self.myDropDown = 'window';
        self.install = false;

        self.cotrolWindow = function (type) {

            switch (type) {
                case '1WindowNone':
                {
                    angular.element('#wnd_1 .left_open').hide();
                    angular.element('#wnd_1 .right_open').hide();
                    angular.element('#wnd_1 .top_open').hide();
                    break;
                }
                case '1WindowLeftOpen':
                {
                    angular.element('#wnd_1 .left_open').show();
                    angular.element('#wnd_1 .right_open').hide();
                    angular.element('#wnd_1 .top_open').hide();
                    break;
                }
                case '1WindowRightOpen':
                {
                    angular.element('#wnd_1 .left_open').hide();
                    angular.element('#wnd_1 .right_open').show();
                    angular.element('#wnd_1 .top_open').hide();
                    break;
                }
                case '1WindowLeftTopOpen':
                {
                    angular.element('#wnd_1 .left_open').show();
                    angular.element('#wnd_1 .top_open').show();
                    angular.element('#wnd_1 .right_open').hide();
                    break;
                }
                case '1WindowRightTopOpen':
                {
                    angular.element('#wnd_1 .right_open').show();
                    angular.element('#wnd_1 .top_open').show();
                    angular.element('#wnd_1 .left_open').hide();
                    break;
                }
                case '2WindowNone':
                {
                    angular.element('#wnd_2 .left_open').hide();
                    angular.element('#wnd_2 .right_open').hide();
                    angular.element('#wnd_2 .top_open').hide();
                    break;
                }
                case '2WindowLeftOpen':
                {
                    angular.element('#wnd_2 .left_open').show();
                    angular.element('#wnd_2 .right_open').hide();
                    angular.element('#wnd_2 .top_open').hide();
                    break;
                }
                case '2WindowRightOpen':
                {
                    angular.element('#wnd_2 .left_open').hide();
                    angular.element('#wnd_2 .right_open').show();
                    angular.element('#wnd_2 .top_open').hide();
                    break;
                }
                case '2WindowLeftTopOpen':
                {
                    angular.element('#wnd_2 .left_open').show();
                    angular.element('#wnd_2 .top_open').show();
                    angular.element('#wnd_2 .right_open').hide();
                    break;
                }
                case '2WindowRightTopOpen':
                {
                    angular.element('#wnd_2 .right_open').show();
                    angular.element('#wnd_2 .top_open').show();
                    angular.element('#wnd_2 .left_open').hide();
                    break;
                }
                case '3WindowNone':
                {
                    angular.element('#wnd_3 .left_open').hide();
                    angular.element('#wnd_3 .right_open').hide();
                    angular.element('#wnd_3 .top_open').hide();
                    break;
                }
                case '3WindowLeftOpen':
                {
                    angular.element('#wnd_3 .left_open').show();
                    angular.element('#wnd_3 .right_open').hide();
                    angular.element('#wnd_3 .top_open').hide();
                    break;
                }
                case '3WindowRightOpen':
                {
                    angular.element('#wnd_3 .left_open').hide();
                    angular.element('#wnd_3 .right_open').show();
                    angular.element('#wnd_3 .top_open').hide();
                    break;
                }
                case '3WindowLeftTopOpen':
                {
                    angular.element('#wnd_3 .left_open').show();
                    angular.element('#wnd_3 .top_open').show();
                    angular.element('#wnd_3 .right_open').hide();
                    break;
                }
                case '3WindowRightTopOpen':
                {
                    angular.element('#wnd_3 .right_open').show();
                    angular.element('#wnd_3 .top_open').show();
                    angular.element('#wnd_3 .left_open').hide();
                    break;
                }
                case '4WindowNone':
                {
                    angular.element('#wnd_4 .left_open').hide();
                    angular.element('#wnd_4 .right_open').hide();
                    angular.element('#wnd_4 .top_open').hide();
                    break;
                }
                case '4WindowLeftOpen':
                {
                    angular.element('#wnd_4 .left_open').show();
                    angular.element('#wnd_4 .right_open').hide();
                    angular.element('#wnd_4 .top_open').hide();
                    break;
                }
                case '4WindowRightOpen':
                {
                    angular.element('#wnd_4 .left_open').hide();
                    angular.element('#wnd_4 .right_open').show();
                    angular.element('#wnd_4 .top_open').hide();
                    break;
                }
                case '4WindowLeftTopOpen':
                {
                    angular.element('#wnd_4 .left_open').show();
                    angular.element('#wnd_4 .top_open').show();
                    angular.element('#wnd_4 .right_open').hide();
                    break;
                }
                case '4WindowRightTopOpen':
                {
                    angular.element('#wnd_4 .right_open').show();
                    angular.element('#wnd_4 .top_open').show();
                    angular.element('#wnd_4 .left_open').hide();
                    break;
                }


                default:
                {
                }
            }

        };

        self.units = [];



        self.fetchAllU = function () {

            ServiceCalculator.fetchAllU()
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

        //self.fetchAllU();



        self.updateU = function (unit) {
            ServiceCalculator.updateU(unit)
                    .then(
                            self.fetchAllU,
                            function (errResponse) {
                                console.error('Error while updating U(controller)');
                            }
                    );
        };

        self.deleteU = function (unit) {
            ServiceCalculator.deleteU(unit)
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