class AppHeaderController {
    $onInit() {
        this.header = {
            text: "Components"
        }
    }
}

angular
    .module('appMain')
    .component('appHeader', {
        templateUrl: './partial/common/header.html',
        controller: AppHeaderController
    })

