class AppMainController {

    /*
    constructor() {
    }
    */

    $onInit() {
        this.commons = {
            header: "Directivas"
        }

        this.autor = 'Carlos M. Lozano'
    }
}

angular
    .module('appMain')
    .controller('AppMainController', AppMainController)
