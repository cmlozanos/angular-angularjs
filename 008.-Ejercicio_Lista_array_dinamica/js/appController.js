class AppMainController {

    /*
    constructor() {
    }
    */

    $onInit() {
        this.commons = {
            header: "Lista Select Dinamico"
        }

        this.provincias = [{
            id: 1,
            name: "extremadura"
        }, {
            id: 2,
            name: "andalucia"
        }, {
            id: 3,
            name: "madrid"
        }]

        this.provinciaSelected = this.provincias[0]
    }
}

angular
    .module('appMain')
    .controller('AppMainController', AppMainController)
