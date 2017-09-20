class AppMainController {
    $onInit() {
        this.autor = 'Carlos M. Lozano'
    }
}

angular
    .module('appMain')
    .component('appMain', {
        template: '<app-header></app-header> Hello, {{$ctrl.autor}}!',
        controller: AppMainController
    })

