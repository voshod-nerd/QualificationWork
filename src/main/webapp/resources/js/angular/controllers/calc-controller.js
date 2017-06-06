'use strict';
app.controller('ControllerCalculator', ['$scope', 'ServiceCalculator',
    function ($scope, ServiceCalculator) {
        var self = this;
        self.value = '';
        self.error = '';
        self.typeoforders = [
            {id: 1, name: 'Односекционное окно'},
            {id: 2, name: 'Двухсекционное окно'},
            {id: 3, name: 'Трехсекционное окно'},
            {id: 4, name: 'Четырехсекционное окно'},
            {id: 5, name: 'Дверь'},
            {id: 6, name: 'Односекционное окно и дверь'},
            {id: 7, name: 'Двухсекционное окно и дверь'}

        ];




        self.furnitura = [
            {id: 1, name: 'Поворотная створка', price: 500},
            {id: 2, name: 'Поворотно-откидная створка', price: 800}


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
            price: 0

        };


        self.type_profil =
                {
                    id: null,
                    name: '',
                    price: ''
                };
        self.type_profils = [
            {id: 1, name: 'Rehau Real', price: 1000},
            {id: 2, name: 'Rehau Standart', price: 2000},
            {id: 3, name: 'Rehau Lux', price: 2500}
        ];

        self.glasspackets = [
            {id: 1, name: 'Стандрартный', price: 2000},
            {id: 2, name: 'Теплосберегающий', price: 2300},
            {id: 3, name: 'Солцезащитный', price: 1500},
            {id: 4, name: 'Шумазащитный', price: 2100}
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
                        var vertsize = angular.element('#W1vert_size').val() / 1000;
                        var horsize = angular.element('#W1horiz_size').val() / 1000;
                        var square = (vertsize * horsize);

                        var priceinstall = 0;
                        if (self.order.install === null) {
                        } else {
                            priceinstall = self.order.install.price;
                        }

                        var dopcena = self.order.refluxLength.price + priceinstall + self.order.windowSillWidth.price;
                        var price = square * self.order.typeprofil.price + dopcena + self.order.glasspacket.price + self.priceoffurnitura(1);
                        self.order.price = price;



                        break;
                    }
                    case 'Двухсекционное окно':
                    {
                        var W1v1 = angular.element('#W1vert_size').val() / 1000;
                        var W1h1 = angular.element('#W1horiz_size').val() / 1000;
                        var W2h2 = angular.element('#W2horiz_size').val() / 1000;
                        var square = (W1v1 * W1h1) + (W1v1 * W2h2);

                        var priceinstall = 0;
                        if (self.order.install === null) {
                        } else {
                            priceinstall = self.order.install.price;
                        }

                        var dopcena = 2 * self.order.refluxLength.price + 2 * priceinstall + 2 * self.order.windowSillWidth.price;
                        var price = square * self.order.typeprofil.price + dopcena + 2 * self.order.glasspacket.price + self.priceoffurnitura(2);
                        self.order.price = price;

                        break;
                    }
                    case 'Трехсекционное окно':
                    {
                        var W1v = angular.element('#W1vert_size').val() / 1000;
                        var W1h = angular.element('#W1horiz_size').val() / 1000;
                        var W2h = angular.element('#W2horiz_size').val() / 1000;
                        var W3h = angular.element('#W3horiz_size').val() / 1000;
                        var square = (W1v * W1h) + (W1v * W2h) + (W1v * W3h);

                        var priceinstall = 0;
                        if (self.order.install === null) {
                        } else {
                            priceinstall = self.order.install.price;
                        }

                        var dopcena = 3 * self.order.refluxLength.price + 3 * priceinstall + 3 * self.order.windowSillWidth.price;
                        var price = square * self.order.typeprofil.price + dopcena + 3 * +self.order.glasspacket.price + self.priceoffurnitura(3);
                        self.order.price = price;
                        break;
                    }
                    case 'Четырехсекционное окно':
                    {
                        var W1v = angular.element('#W1vert_size').val() / 1000;
                        var W1h = angular.element('#W1horiz_size').val() / 1000;
                        var W2h = angular.element('#W2horiz_size').val() / 1000;
                        var W3h = angular.element('#W3horiz_size').val() / 1000;
                        var W4h = angular.element('#W4horiz_size').val() / 1000;
                        var square = (W1v * W1h) + (W1v * W2h) + (W1v * W3h) + (W1v * W4h);

                        var priceinstall = 0;
                        if (self.order.install === null) {
                        } else {
                            priceinstall = self.order.install.price;
                        }

                        var dopcena = 4 * self.order.refluxLength.price + 4 * priceinstall + 4 * self.order.windowSillWidth.price;
                        var price = square * self.order.typeprofil.price + dopcena + 4 * +self.order.glasspacket.price + self.priceoffurnitura(4);
                        self.order.price = price;
                        break;
                    }
                    case 'Дверь':
                    {
                        var D1v = angular.element('#D1vert_size').val() / 1000;
                        var D1h = angular.element('#D1horiz_size').val() / 1000;

                        var square = (D1v * D1h);

                        var priceinstall = 0;
                        if (self.order.install === null) {
                        } else {
                            priceinstall = self.order.install.price;
                        }

                        var dopcena = priceinstall;
                        var price = square * self.order.typeprofil.price + dopcena + self.order.glasspacket.price;
                        self.order.price = price;
                        break;
                    }
                    case 'Односекционное окно и дверь':
                    {
                        var W1v = angular.element('#W1vert_size').val() / 1000;
                        var W1h = angular.element('#W1horiz_size').val() / 1000;
                        var D1v = angular.element('#D1vert_size').val() / 1000;
                        var D1h = angular.element('#D1horiz_size').val() / 1000;
                        var square = (W1v * W1h) + (D1v * D1h);

                        var priceinstall = 0;
                        if (self.order.install === null) {
                        } else {
                            priceinstall = self.order.install.price;
                        }

                        var dopcena = self.order.refluxLength.price + 2 * priceinstall + self.order.windowSillWidth.price;
                        var price = square * self.order.typeprofil.price + dopcena + 2 * self.order.glasspacket.price + self.priceoffurnitura(1);
                        self.order.price = price;
                        break;
                    }
                    case 'Двухсекционное окно и дверь':
                    {
                        var W1v = angular.element('#W1vert_size').val() / 1000;
                        var W1h = angular.element('#W1horiz_size').val() / 1000;
                        var W2h = angular.element('#W2horiz_size').val() / 1000;
                        var D1v = angular.element('#D1vert_size').val() / 1000;
                        var D1h = angular.element('#D1horiz_size').val() / 1000;
                        var square = (W1v * W1h) + (W1v * W2h) + (D1v * D1h);

                        var priceinstall = 0;
                        if (self.order.install === null) {
                        } else {
                            priceinstall = self.order.install.price;
                        }

                        var dopcena = 2 * self.order.refluxLength.price + 3 * priceinstall + 2 * self.order.windowSillWidth.price;
                        var price = square * self.order.typeprofil.price + dopcena + 3 * self.order.glasspacket.price + self.priceoffurnitura(2);
                        self.order.price = price;
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


        self.windowFurnitura = {
            w1: null,
            w2: null,
            w3: null,
            w4: null
        };

        self.priceoffurnitura = function (value) {
            var price = 0;
            switch (value) {
                case 1:
                {
                    if (self.windowFurnitura.w1 !== null)
                        price = self.windowFurnitura.w1.price + price;
                    break;
                }
                case 2:
                {
                    if (self.windowFurnitura.w1 !== null)
                        price = self.windowFurnitura.w1.price + price;
                    if (self.windowFurnitura.w2 !== null)
                        price = self.windowFurnitura.w2.price + price;
                    break;
                }
                case 3:
                {
                    if (self.windowFurnitura.w1 !== null)
                        price = self.windowFurnitura.w1.price + price;
                    if (self.windowFurnitura.w2 !== null)
                        price = self.windowFurnitura.w2.price + price;
                    if (self.windowFurnitura.w3 !== null)
                        price = self.windowFurnitura.w3.price + price;
                    break;
                }
                case 4:
                {
                    if (self.windowFurnitura.w1 !== null)
                        price = self.windowFurnitura.w1.price + price;
                    if (self.windowFurnitura.w2 !== null)
                        price = self.windowFurnitura.w2.price + price;
                    if (self.windowFurnitura.w3 !== null)
                        price = self.windowFurnitura.w3.price + price;
                    if (self.windowFurnitura.w4 !== null)
                        price = self.windowFurnitura.w4.price + price;
                    break;

                }
                default:
                {
                }

            }
            return price;
        };

        self.chooseTypeOrder = function (type) {

            self.windowFurnitura.w1 = null;
            self.windowFurnitura.w2 = null;
            self.windowFurnitura.w3 = null;
            self.windowFurnitura.w4 = null;


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

        // С какой стороны ручка
        self.cotrolWindow = function (type) {

            switch (type) {
                case '1WindowNone':
                {
                    angular.element('#wnd_1 .left_open').hide();
                    angular.element('#wnd_1 .right_open').hide();
                    angular.element('#wnd_1 .top_open').hide();
                    self.windowFurnitura.w1 = null;
                    break;
                }
                case '1WindowLeftOpen':
                {
                    angular.element('#wnd_1 .left_open').show();
                    angular.element('#wnd_1 .right_open').hide();
                    angular.element('#wnd_1 .top_open').hide();
                    self.windowFurnitura.w1 = self.furnitura[0];
                    break;
                }
                case '1WindowRightOpen':
                {
                    angular.element('#wnd_1 .left_open').hide();
                    angular.element('#wnd_1 .right_open').show();
                    angular.element('#wnd_1 .top_open').hide();
                    self.windowFurnitura.w1 = self.furnitura[0];
                    break;
                }
                case '1WindowLeftTopOpen':
                {
                    angular.element('#wnd_1 .left_open').show();
                    angular.element('#wnd_1 .top_open').show();
                    angular.element('#wnd_1 .right_open').hide();
                    self.windowFurnitura.w1 = self.furnitura[1];
                    break;
                }
                case '1WindowRightTopOpen':
                {
                    angular.element('#wnd_1 .right_open').show();
                    angular.element('#wnd_1 .top_open').show();
                    angular.element('#wnd_1 .left_open').hide();
                    self.windowFurnitura.w1 = self.furnitura[1];
                    break;
                }
                case '2WindowNone':
                {
                    angular.element('#wnd_2 .left_open').hide();
                    angular.element('#wnd_2 .right_open').hide();
                    angular.element('#wnd_2 .top_open').hide();
                    self.windowFurnitura.w2 = null;
                    break;
                }
                case '2WindowLeftOpen':
                {
                    angular.element('#wnd_2 .left_open').show();
                    angular.element('#wnd_2 .right_open').hide();
                    angular.element('#wnd_2 .top_open').hide();
                    self.windowFurnitura.w2 = self.furnitura[0];
                    break;
                }
                case '2WindowRightOpen':
                {
                    angular.element('#wnd_2 .left_open').hide();
                    angular.element('#wnd_2 .right_open').show();
                    angular.element('#wnd_2 .top_open').hide();
                    self.windowFurnitura.w2 = self.furnitura[0];
                    break;
                }
                case '2WindowLeftTopOpen':
                {
                    angular.element('#wnd_2 .left_open').show();
                    angular.element('#wnd_2 .top_open').show();
                    angular.element('#wnd_2 .right_open').hide();
                    self.windowFurnitura.w2 = self.furnitura[1];
                    break;
                }
                case '2WindowRightTopOpen':
                {
                    angular.element('#wnd_2 .right_open').show();
                    angular.element('#wnd_2 .top_open').show();
                    angular.element('#wnd_2 .left_open').hide();
                    self.windowFurnitura.w2 = self.furnitura[1];
                    break;
                }
                case '3WindowNone':
                {
                    angular.element('#wnd_3 .left_open').hide();
                    angular.element('#wnd_3 .right_open').hide();
                    angular.element('#wnd_3 .top_open').hide();
                    self.windowFurnitura.w3 = null;
                    break;
                }
                case '3WindowLeftOpen':
                {
                    angular.element('#wnd_3 .left_open').show();
                    angular.element('#wnd_3 .right_open').hide();
                    angular.element('#wnd_3 .top_open').hide();
                    self.windowFurnitura.w3 = self.furnitura[0];
                    break;
                }
                case '3WindowRightOpen':
                {
                    angular.element('#wnd_3 .left_open').hide();
                    angular.element('#wnd_3 .right_open').show();
                    angular.element('#wnd_3 .top_open').hide();
                    self.windowFurnitura.w3 = self.furnitura[0];
                    break;
                }
                case '3WindowLeftTopOpen':
                {
                    angular.element('#wnd_3 .left_open').show();
                    angular.element('#wnd_3 .top_open').show();
                    angular.element('#wnd_3 .right_open').hide();
                    self.windowFurnitura.w1 = self.furnitura[1];
                    break;
                }
                case '3WindowRightTopOpen':
                {
                    angular.element('#wnd_3 .right_open').show();
                    angular.element('#wnd_3 .top_open').show();
                    angular.element('#wnd_3 .left_open').hide();
                    self.windowFurnitura.w1 = self.furnitura[1];
                    break;
                }
                case '4WindowNone':
                {
                    angular.element('#wnd_4 .left_open').hide();
                    angular.element('#wnd_4 .right_open').hide();
                    angular.element('#wnd_4 .top_open').hide();
                    self.windowFurnitura.w4 = null;
                    break;
                }
                case '4WindowLeftOpen':
                {
                    angular.element('#wnd_4 .left_open').show();
                    angular.element('#wnd_4 .right_open').hide();
                    angular.element('#wnd_4 .top_open').hide();
                    self.windowFurnitura.w4 = self.furnitura[0];
                    break;
                }
                case '4WindowRightOpen':
                {
                    angular.element('#wnd_4 .left_open').hide();
                    angular.element('#wnd_4 .right_open').show();
                    angular.element('#wnd_4 .top_open').hide();
                    self.windowFurnitura.w4 = self.furnitura[0];
                    break;
                }
                case '4WindowLeftTopOpen':
                {
                    angular.element('#wnd_4 .left_open').show();
                    angular.element('#wnd_4 .top_open').show();
                    angular.element('#wnd_4 .right_open').hide();
                    self.windowFurnitura.w1 = self.furnitura[1];
                    break;
                }
                case '4WindowRightTopOpen':
                {
                    angular.element('#wnd_4 .right_open').show();
                    angular.element('#wnd_4 .top_open').show();
                    angular.element('#wnd_4 .left_open').hide();
                    self.windowFurnitura.w4 = self.furnitura[0];
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