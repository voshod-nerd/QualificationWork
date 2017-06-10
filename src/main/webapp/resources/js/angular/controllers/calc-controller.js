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

        self.showCalculatePage = false;
        self.currency = 5.2;
        self.KZCurrency = null;
        self.priceintenge = null;


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
            price: '',
            furnitura: '',
            param: ''
        };


        self.type_profil =
                {
                    id: null,
                    name: '',
                    price: ''
                };
        self.type_profils = [];
        self.glasspackets = [];
        self.setSillWidth = [];
        self.installs = [];


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
                return;
            } else {

                switch (self.order.typeorder.name) {
                    case 'Односекционное окно':
                    {
                        var W1v = angular.element('#W1vert_size').val() / 1000;
                        var W1h = angular.element('#W1horiz_size').val() / 1000;
                        var square = (W1v * W1h);
                        self.order.param = 'W1V=' + W1v + ':W1H=' + W1h;
                        self.order.furnitura = self.getFurnituraParam(1);

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
                        var W1v = angular.element('#W1vert_size').val() / 1000;
                        var W1h = angular.element('#W1horiz_size').val() / 1000;
                        var W2h = angular.element('#W2horiz_size').val() / 1000;
                        var square = (W1v * W1h) + (W1v * W2h);

                        self.order.param = 'W1V=' + W1v + ':W1H=' + W1h + ':W2V=' + W1v + ":W2H=" + W2h;
                        self.order.furnitura = self.getFurnituraParam(2);

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
                        self.order.param = 'W1V=' + W1v + ':W1H=' + W1h + ':W2V=' + W1v + ":W2H=" + W2h + ":W3V=" + W1v + ":W3H=" + W3h;
                        self.order.furnitura = self.getFurnituraParam(3);
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
                        self.order.param = 'W1V=' + W1v + ':W1H=' + W1h + ':W2V=' + W1v + ":W2H=" + W2h + ":W3V=" + W1v + ":W3H=" + W3h + ":W4V=" + W1v + ":W4H=" + W4h;
                        self.order.furnitura = self.getFurnituraParam(4);
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
                        self.order.param = 'D1V=' + D1v + ':D1H=' + D1h;


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
                        self.order.param = 'W1V=' + W1v + ':W1H=' + W1h + ':D1V=' + D1v + ":D2H=" + D1h;
                        self.order.furnitura = self.getFurnituraParam(1);
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
                        self.order.param = 'W1V=' + W1v + ':W1H=' + W1h + ':W2V=' + W1v + ":W2H=" + W2h + ':D1V=' + D1v + ":D2H=" + D1h;
                        self.order.furnitura = self.getFurnituraParam(2);
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
                        return;
                    }

                }

                self.order.price = self.order.price.toFixed(2);
                self.priceintenge = self.order.price * self.currency;
                self.priceintenge = self.priceintenge.toFixed(2);
                self.showCalculatePage = true;
                console.log(self.order.furnitura);
                console.log(self.order.param);
            }


        };


        self.windowFurnitura = {
            w1: null,
            w2: null,
            w3: null,
            w4: null
        };

        self.getFurnituraParam = function (value) {
            var param = '';
            switch (value) {
                case 1:
                {
                    if (self.windowFurnitura.w1 !== null)
                        param = param + "W1=" + self.windowFurnitura.w1.name + ";";
                    break;
                }
                case 2:
                {
                    if (self.windowFurnitura.w1 !== null)
                        param = param + "W1=" + self.windowFurnitura.w1.name;
                    ;
                    if (self.windowFurnitura.w2 !== null)
                        param = param + ";W2=" + self.windowFurnitura.w2.name + ";";
                    break;
                }
                case 3:
                {
                    if (self.windowFurnitura.w1 !== null)
                        param = param + "W1=" + self.windowFurnitura.w1.name;
                    if (self.windowFurnitura.w2 !== null)
                        param = param + ";W2=" + self.windowFurnitura.w2.name;
                    if (self.windowFurnitura.w3 !== null)
                        param = param + ";W3=" + self.windowFurnitura.w3.name + ";";
                    break;
                }
                case 4:
                {
                    if (self.windowFurnitura.w1 !== null)
                        param = param + "W1=" + self.windowFurnitura.w1.name;
                    if (self.windowFurnitura.w2 !== null)
                        param = param + ";W2=" + self.windowFurnitura.w2.name;
                    if (self.windowFurnitura.w3 !== null)
                        param = param + ";W3=" + self.windowFurnitura.w3.name;
                    if (self.windowFurnitura.w4 !== null)
                        param = param + ";W4=" + self.windowFurnitura.w4.name + ";";
                    break;

                }
                default:
                {
                }

            }
            return param;

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

            // обнуление заказа
            self.order.glasspacket = null;
            self.order.typeprofil = null;
            self.order.windowSillWidth = null;
            self.order.refluxLength = null;
            self.order.price = '';
            self.order.install = null;
            self.order.furnitura = '';
            self.order.param = '';
            self.priceintenge = '';
            self.showCalculatePage = false;

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
                    self.windowFurnitura.w3 = self.furnitura[1];
                    break;
                }
                case '3WindowRightTopOpen':
                {
                    angular.element('#wnd_3 .right_open').show();
                    angular.element('#wnd_3 .top_open').show();
                    angular.element('#wnd_3 .left_open').hide();
                    self.windowFurnitura.w3 = self.furnitura[1];
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
                    self.windowFurnitura.w4 = self.furnitura[1];
                    break;
                }
                case '4WindowRightTopOpen':
                {
                    angular.element('#wnd_4 .right_open').show();
                    angular.element('#wnd_4 .top_open').show();
                    angular.element('#wnd_4 .left_open').hide();
                    self.windowFurnitura.w4 = self.furnitura[1];
                    break;
                }


                default:
                {
                }
            }

        };

        self.units = [];


        self.downloadCalculatePage = function () {
            console.log(JSON.stringify(self.order));
            
            var checkNull=function (item) {
                if (item===null)  {return ''; } else return item.name;
            }

            var docDefinition = {
                content: [
                    
                     {
                        text: 'Компания МИР ПЛАСТ',
                        style: 'subheader',
                        alignment: 'center'
                    },
                    
                     {
                        text: 'г. Байконур, Янгеля 10 тел + 7 (771) 301-29-49',
    
                        alignment: 'center'
                    },
                    '\n\n',
                    
                    {
                        text: 'Расчетный лист заказа',
                        style: 'subheader',
                        alignment: 'center'
                    },
                    'Данный отчет отражает стоимость сформированного Вами заказа.\n\n',
                    {
                        text: 'Параметры заказа',
                        style: 'subheader'
                    },
                    {
                        ul: [
                            'Тип заказа '+checkNull(self.order.typeorder),
                            'Тип металопрофиля:',
                            'Тип стеклопакета:'+checkNull(self.order.glasspacket),
                            'Ширина подоконника:'+checkNull(self.order.windowSillWidth),
                            'Длина отлива :'+checkNull(self.order.refluxLength),
                            'Условия установки:'+checkNull(self.order.install)
                        ]
                    },
                    {
                        text: 'Расчетная цена заказа в рубля: '+self.order.price,
                        style: 'subheader'
                    },
                    {
                        text: 'Расчетная цена заказа в тенге '+self.priceintenge,
                        style: 'subheader'
                    },
                   '----------------------------------------------------------------------------------------------------------------------------------------------------\n',
                    {
                        text: 'Мир Пласт',
                        style: 'subheader',
                        alignment: 'center'
                    },
                    'Мы предлгааем самые низки  цены на рынке Байконура\n\n',
                    'Наши цены низкие потому что: \n\n',
                    '1. У нас нет лишнего персонала, все в нашей компании являются мастерами своего дела и работают с повышенной эффективностью.\n\n',
                    '2. У нас снижены расходы на маркетинг, из-за отличной репутации нас передают из рук в руки, и мы не нуждаемся в дополнительной рекламе..\n\n',
                    '3. У нас налажены долгосрочные отношения со всеми поставщиками материалов. Мы покупаем комплектующие по самым низким ценам.\n\n',
                    '4. У нас собственный транспорт для доставки, который обходится дешевле арендуемого или почасового\n\n',
                    '5. Мы являемся производителем! У нас собственные цеха и монтажные бригады.\n\n',
                    
                    
                    {
                        text: '*Все расчеты являются предварительными. Окончательная цена обьявляется мастером на месте. Просим отнестись к данному факту с пониманием',
                        style: ['quote', 'small']
                    }
                ],
                styles: {
                    header: {
                        fontSize: 18,
                        bold: true
                    },
                    subheader: {
                        fontSize: 15,
                        bold: true
                    },
                    quote: {
                        italics: true
                    },
                    small: {
                        fontSize: 8
                    }
                }
            };
            pdfMake.createPdf(docDefinition).download('pageorder.pdf');


            //doc.text('Hello world!', 10, 10);

            /*doc.text(20, 20, "Расчетный лист", null, null, 'center');
             doc.text(20, 30, "Параметры сформированного заказа");
             doc.text(20,40,'Тип заказа'+self.order.typeorder);
             doc.text(20,50,"Выбранный профиль :"+self.order.typeprofil.name);
             doc.text(20,60,"Выбранный стеклопакет: "+self.order.glasspacket.name);
             doc.text(20,70,"Ширина подоконника: "+self.order.windowSillWidth.name);
             doc.text(20,80,"Длина отвода: "+self.order.refluxLength.name);
             try {
             doc.text(20,90,"Условия установки : "+self.order.install.name); } catch (err) {console.log(err);}
             */


        };



        self.fetchAllTypeProfil = function () {

            ServiceCalculator.fetchAllTypeProfil()
                    .then(
                            function (d) {
                                self.type_profils = d;
                                console.info(JSON.stringify(d));
                            },
                            function (errResponse) {
                                console.error('Error while fetching U(controller)');
                            }
                    );
        };
        self.fetchAllSill = function () {

            ServiceCalculator.fetchAllSill()
                    .then(
                            function (d) {
                                self.setSillWidth = d;
                                console.info(JSON.stringify(d));
                            },
                            function (errResponse) {
                                console.error('Error while fetching U(controller)');
                            }
                    );
        };
        self.fetchAllGlasspacket = function () {

            ServiceCalculator.fetchAllGlasspacket()
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
        self.fetchAllReflux = function () {

            ServiceCalculator.fetchAllReflux()
                    .then(
                            function (d) {
                                self.setRefluxLength = d;
                                console.info(JSON.stringify(d));
                            },
                            function (errResponse) {
                                console.error('Error while fetching U(controller)');
                            }
                    );
        };
        self.fetchAllInstall = function () {

            ServiceCalculator.fetchAllInstall()
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

        self.fetchAllReflux();
        self.fetchAllSill();
        self.fetchAllTypeProfil();
        self.fetchAllInstall();
        self.fetchAllGlasspacket();


        self.createU = function (unit) {
            ServiceCalculator.createU(unit)
                    .then(
                            //self.fetchAllU,
                                    function (errResponse) {
                                        console.error('Error while creating U(controller)');
                                    }
                            );
                        };

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