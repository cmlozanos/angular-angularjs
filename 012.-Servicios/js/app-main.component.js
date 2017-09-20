class AppMainController {
    constructor($log) {
        'ngInject'
        this.$log = $log
    }

    $onInit() {
        this.autor = 'Carlos M. Lozano'
        this.$log.info('Hola' + this)
    }
}

angular
    .module('appMain')
    .component('appMain', {
        template: '<app-header></app-header> Hello, {{$ctrl.autor}}!',
        controller: AppMainController
    })

