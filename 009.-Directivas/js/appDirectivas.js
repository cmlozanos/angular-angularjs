angular
    .module('appMain')
    .directive('appPie', function () {
        return {
            template: '<footer><hr><p>{{autor}} | Badajoz 2017</p></footer>',
            restrict: 'AE',
            scope: {
                autor: '@'
            }

        }

    })
