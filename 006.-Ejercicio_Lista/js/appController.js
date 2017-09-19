class AppMainController {

    /*
    constructor() {
    }
    */

    $onInit() {
        this.commons = {
            header: "Lista"
        }

        this.elemento = {
            texto: ""
        }
        this.elementos = new Array()
    }

    add() {
        this.elementos.push(this.elemento)
        this.elemento = {
            texto: ""
        }
        console.dir(this)
    }

}

angular
    .module('appMain')
    .controller('AppMainController', AppMainController)
