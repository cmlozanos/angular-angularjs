class AppMainController {

    /*
    constructor() {
    }
    */

    $onInit() {
        this.commons = {
            header: "Lista_array_mock"
        }

        this.elementos = [{
            nombre: "asd",
            apellido: "dsa",
            fechaNacim: "asd",
            pais: "asd",
            generos: ["terror"]
        }, {
            nombre: "dsa",
            apellido: "asd",
            fechaNacim: "dsa",
            pais: "dsa",
            generos: ["fantasia"]
        }]
    }
}

angular
    .module('appMain')
    .controller('AppMainController', AppMainController)
