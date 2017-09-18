/*
username=''
ng-init="username='DefaultName';curso='AngularJS'"
*/
angular.module('appMain', [])
angular
    .module('appMain')
    .controller('AppMainController', ['$scope', function ($scope) {
        $scope.user = {
            name: 'Pepe',
            lastname: 'Perez'
        }
        $scope.curso = 'AngularJS'

        $scope.borrar = function () {
            $scope.user.name = ''
            $scope.user.lastname = ''
            console.dir($scope)
        }
    }])