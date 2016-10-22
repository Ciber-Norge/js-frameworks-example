angular.module('app', [])
    .controller('PersonController', function () {
        this.firstName = 'Kalle';
        this.lastName = 'Klovn';
        this.getFullName = function () {
            return this.firstName + ' ' + this.lastName;
        };
    });
