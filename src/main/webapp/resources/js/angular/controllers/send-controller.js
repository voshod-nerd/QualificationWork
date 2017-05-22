'use strict';
app.controller('SendController', ['$scope', 'SendService',
    function ($scope, SendService) {
        var self = this;

        self.unit = {
            id: null,
            fio: '',
            email: '',
            send: null

        };


        self.delivery_item = {
            id: '',
            idShares: null,
            idListdelivery: null
        };

        self.units = [];
        self.delivery = [];
        self.listDelivery = [];
        self.chosenListDelivery = null;
        self.chosenShare = null;


        self.getChosenShare = function (unit) {
            self.chosenShare = unit;
        };

        self.send = function () {
            console.log(self.chosenListDelivery);
            console.log(self.chosenShare);
            self.delivery_item.idListdelivery = self.chosenListDelivery;
            self.delivery_item.idShares = self.chosenShare;
            self.createDelivery(self.delivery_item);

            
            alert("Рассылка отправлена в очередь доставки");

        };


        self.fetchAllU = function () {
            SendService.fetchAllU()
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
            SendService.createU(unit)
                    .then(
                            self.fetchAllU,
                            function (errResponse) {
                                console.error('Error while creating U(controller)');
                            }
                    );
        };

        self.updateU = function (unit) {
            SendService.updateU(unit)
                    .then(
                            self.fetchAllU,
                            function (errResponse) {
                                console.error('Error while updating U(controller)');
                            }
                    );
        };

        self.deleteU = function (unit) {
            SendService.deleteU(unit)
                    .then(
                            self.fetchAllU,
                            function (errResponse) {
                                console.error('Error while deleting U(controller)');
                            }
                    );
        };

        // Для списка рассылки
        self.fetchAllListDelivery = function () {
            SendService.fetchAllListDelivery()
                    .then(
                            function (d) {
                                self.listDelivery = d;
                                console.info(JSON.stringify(d));
                            },
                            function (errResponse) {
                                console.error('Error while fetching U(controller)');
                            }
                    );
        };

        self.fetchAllListDelivery();

        self.createListDelivery = function (unit) {
            SendService.createListDelivery(unit)
                    .then(
                            self.fetchAllListDelivery,
                            function (errResponse) {
                                console.error('Error while creating U(controller)');
                            }
                    );
        };

        self.updateListDelivery = function (unit) {
            SendService.updateListDelivery(unit)
                    .then(
                            self.fetchAllListDelivery,
                            function (errResponse) {
                                console.error('Error while updating U(controller)');
                            }
                    );
        };

        self.deleteListDelivery = function (unit) {
            SendService.deleteListDelivery(unit)
                    .then(
                            self.fetchAllListDelivery,
                            function (errResponse) {
                                console.error('Error while deleting U(controller)');
                            }
                    );
        };

        // Для рассылки
        self.fetchAllDelivery = function () {
            SendService.fetchAllDelivery()
                    .then(
                            function (d) {
                                self.delivery = d;
                                console.info(JSON.stringify(d));
                            },
                            function (errResponse) {
                                console.error('Error while fetching U(controller)');
                            }
                    );
        };

        self.fetchAllDelivery();

        self.createDelivery = function (unit) {
            SendService.createDelivery(unit)
                    .then(
                            self.fetchAllDelivery,
                            function (errResponse) {
                                console.error('Error while creating U(controller)');
                            }
                    );
        };

        self.updateDelivery = function (unit) {
            SendService.updateDelivery(unit)
                    .then(
                            self.fetchAllDelivery,
                            function (errResponse) {
                                console.error('Error while updating U(controller)');
                            }
                    );
        };

        self.deleteDelivery = function (unit) {
            SendService.deleteDelivery(unit)
                    .then(
                            self.fetchAllDelivery,
                            function (errResponse) {
                                console.error('Error while deleting U(controller)');
                            }
                    );
        };


    }]);