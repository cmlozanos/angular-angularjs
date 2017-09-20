class AppHeaderController {
    $onInit() {
        this.header = {
            text: "Servicio $log"
        }
    }
}

angular
    .module('appMain')
    .component('appHeader', {
        templateUrl: './partial/common/header.html',
        controller: AppHeaderController
    })

