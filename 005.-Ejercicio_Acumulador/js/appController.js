class AppMainController {

    /*
    constructor() {
    }
    */

    $onInit() {
        this.cantidad = 0
        this.total = 0
    }

    add() {
        this.total += parseInt(this.cantidad)
        console.dir(this)
    }

    substract() {
        this.total -= parseInt(this.cantidad)
        console.dir(this)
    }
}

angular
    .module('appMain')
    .controller('AppMainController', AppMainController)
