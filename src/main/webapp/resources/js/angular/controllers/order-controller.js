'use strict';
app.controller('ControllerOrder', ['$scope', 'ServiceOrder',
    function ($scope, ServiceOrder) {
        var self = this;

        self.search = '';

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

        self.GetCountFurnitura = function (type, item) {
            var count = 0;
            var elements = item.split(';');
            for (var i = 0; i < elements.length; i++) {
                var parts = elements[i].split('=');
                switch (parts[0]) {
                    case 'W1':
                    {
                        if (type === parts[1])
                            count++;

                        break;
                    }
                    case 'W2':
                    {
                        if (type === parts[1])
                            count++;
                        break;
                    }
                    case 'W3':
                    {
                        if (type === parts[1])
                            count++;
                        break;
                    }
                    case 'W4':
                    {
                        if (type === parts[1])
                            count++;
                        break;
                    }
                    default:
                    {
                        break
                    }


                }

            }
            return count;


        };

        self.getCountGlasspacket = function (item) {
            switch (item) {
                case 'Односекционное окно':
                    return 1;
                case 'Двухсекционное окно':
                    return 2;
                case 'Трехсекционное окно':
                    return 3;
                case 'Четырехсекционное окно':
                    return 4;
                case 'Дверь':
                    return 1;
                case 'Односекционное окно и дверь':
                    return 2;
                case 'Двухсекционное окно и дверь':
                    return 3;
                default:
                    return 0;

            }

        };

        self.ShowFurnitura = function (item) {
            var text = '';
            var elements = item.split(';');
            for (var i = 0; i < elements.length; i++) {
                var parts = elements[i].split('=');
                switch (parts[0]) {
                    case 'W1':
                    {
                        text = text + "\nОкно 1-\n" + parts[1] + '\n';
                        break;
                    }
                    case 'W2':
                    {
                        text = text + "\nОкно 2-\n" + parts[1] + '\n';
                        break;
                    }
                    case 'W3':
                    {
                        text = text + "\nОкно 3-\n" + parts[1] + '\n';
                        break;
                    }
                    case 'W4':
                    {
                        text = text + "\nОкно 4-\n" + parts[1] + '\n';
                        break;
                    }
                    default:
                    {
                        break
                    }


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
                        text = text + "\nОкно 1-\n\n вертикаль=" + parts[1];
                        break;
                    }
                    case 'W1H':
                    {
                        text = text + " горизонталь=" + parts[1] + '\n';
                        break;
                    }
                    case 'W2V':
                    {
                        text = text + "\nОкно 2-\n\n вертикаль=" + parts[1];
                        break;
                    }
                    case 'W2H':
                    {
                        text = text + " горизонталь=" + parts[1] + '\n';
                        break;
                    }
                    case 'W3V':
                    {
                        text = text + "\nОкно 3-\n\n вертикаль=" + parts[1];
                        break;
                    }
                    case 'W3H':
                    {
                        text = text + "горизонталь=" + parts[1] + '\n';
                        break;
                    }
                    case 'W4V':
                    {
                        text = text + "\nОкно 4-\n\n вертикаль=" + parts[1];
                        break;
                    }
                    case 'W4H':
                    {
                        text = text + "горизонталь=" + parts[1] + '\n';
                        break;
                    }
                    case 'D1V':
                    {
                        text = text + "\nДверь- вертикаль=" + parts[1];
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


        self.isNull = function (item) {

            if (item !== null) {
                return false;
            }
            return true;
        };


        self.isContent = function (item) {
            var massiv = [];
            var s1 = null, s2 = null, s3 = null, s4 = null, s5 = null, s0 = null, s6 = null, s7 = null,s8=null;

            s0 = ['№', 'Наименование', 'Количество'];
            s1 = ['', 'Тип заказа: ' + item.idtypeorder.name, ''];
            s2 = ['', 'Тип профиля: ' + item.idtypeprofil.name, ''];
            console.log(item.idglasspacket);
            if (item.idglasspacket !== null)
                s3 = ['', 'Cтеклопакет ' + item.idglasspacket.name, self.getCountGlasspacket(item.idtypeorder.name)];
            if (item.idsill !== null)
                s4 = ['', 'Подоконник ' + item.idsill.name, '1'];
            if (item.idreflux !== null)
                s5 = ['', 'Отвод ' + item.idreflux.name, '1'];
            if (item.idinstall !== null)
                s6 = ['', 'Условие установки ' + item.idinstall.name, '1'];

            if (item.furnitura !== null) {
                var count = self.GetCountFurnitura('Поворотная створка', item.furnitura);
                if (count > 0)
                    s7 = ['', ' Фурнитура: поворотная створка ', count];
            }
            if (item.furnitura !== null) {
                var count = self.GetCountFurnitura('Поворотно-откидная створка', item.furnitura);
                if (count > 0)
                    s8 = ['', 'Фурнитура: Поворотно-откидная створка ', count];
            }

            if (s0 !== null)
                massiv.push(s0);
            if (s1 !== null)
                massiv.push(s1);
            if (s2 !== null)
                massiv.push(s2);
            if (s3 !== null)
                massiv.push(s3);
            if (s4 !== null)
                massiv.push(s4);
            if (s5 !== null)
                massiv.push(s5);
            if (s6 !== null)
                massiv.push(s6);
            if (s7 !== null)
                massiv.push(s7);
            if (s8 !== null)
                massiv.push(s8);
            return massiv;

        };

        self.akt = function (item) {

            var docDefinition = {
                content: [
                    {
                        text: 'Акт № ________ от "__________________________"',
                        alignment: 'center'

                    },
                    {
                        text: 'установка металопластиковых конструкций"',
                        alignment: 'center'

                    },
                    {
                        text: 'Заказ №____________________________________________________',
                        alignment: 'center'

                    },
                    '_______________________________________________________________________________________________',
                    {
                        text: 'ФИО  и адрес заказчика',
                        style: ['quote', 'small'],
                        alignment: 'center'


                    },
                    ' ',
                    ' ',
                    ' ',
                    {text: '5. В соответвии с договором №_________   от "_______________"'},
                    {text: 'Поставщик выполнил все обязательства по поставке товаров и оказанию сопутствующих услуг'},
                    {text: '6. Фактическое качество товаров и сопутствующих услуг '},
                    {text: 'соответсвует требованиям договора '},
                    {text: '7. Недостатки товаров,сопутствующих услуг не выявлены.'},
                    {text: '8. Результат работ по договору:'},
                    {
                        text: '',
                        style: ['quote', 'small', 'under']

                    },
                    {
                        style: 'tableExample',
                        table: {
                            widths: [40, 350, 100],
                            body: self.isContent(item)
                        }
                    },
                    ' ',
                    ' ',
                    ' ',
                    ' ',
                    'Израсходованные материалы______________________________________________________________',
                    "_____________________________________________________________________________________________",
                    'Заказчик : ' + item.idclient.fio,
                    'Исполнитель:_______________________________________________________________________________'

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
                    },
                    under: {
                        decoration: 'overline'
                    },
                    tableExample: {
                        margin: [0, 5, 0, 15]
                    }
                }
            }

            pdfMake.createPdf(docDefinition).download('page.pdf');
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