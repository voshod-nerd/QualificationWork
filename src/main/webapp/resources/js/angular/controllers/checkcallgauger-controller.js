'use strict';
app.controller('ControllerCheckCallGauger', ['$scope',
    function ($scope) {
        var self = this;

        self.error = '';

        self.callGauger = {
            id: null,
            phone: null,
            dateadd: null,
            adress: null,
            description: null,
            dateclose: null,
            open: null,
            fio: null
        };


        self.submit = function () {
            $("#targetForm").submit();
            ;
        };

        self.checkData = function () {
            var check = false;
            if (self.callGauger.fio === null) {

                self.error = 'Контактные данные';
                $('#myError').modal('show');
                return  check;
            }
            if (self.callGauger.phone === null) {

                self.error = 'Телефон';
                $('#myError').modal('show');
                return  check;
            }
            if (self.callGauger.adres === null) {
                self.error = 'Адрес';
                $('#myError').modal('show');
                return  check;
            }
            if (self.callGauger.type === null) {
                self.error = 'Тип вызова';
                $('#myError').modal('show');
                return  check;
            }
            $("#mySubmit").modal('show');


        };






    }]);