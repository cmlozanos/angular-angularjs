angular
    .module('commonModule')
    .directive('appPie', function () {
        return {
            template: '<footer><hr><p>{{author}} | Badajoz 2017</p></footer>',
            restrict: 'AE',
            scope: {
                author: '@autor'
            }

        }

    })
