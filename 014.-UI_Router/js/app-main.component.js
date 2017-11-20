class AppMainController {
    constructor() {
    }

    $onInit() {
        console.log('Estoy en onInit')
    }
}

angular
    .module('appMain')
    .component('appMain', {
        template: '<a ui-sref="articulo"> Link </a>',
        controller: AppMainController
    }).config(function ($routeProvider) {
        $routeProvider.when('/', {
            url: '/article',
            templateUrl: 'partial/article.html',
            controller: 'AppMainController'
        }).otherwise({
            redirectTo: '/'
        })
    })