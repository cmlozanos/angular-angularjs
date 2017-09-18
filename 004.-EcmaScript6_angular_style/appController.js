class AppMainController {

    /*
    constructor() {
    }
    */

    $onInit() {
        this.user = {
            name: 'Pepe',
            lastname: 'Perez'
        }
        this.curso = 'AngularJS'
    }

    borrar() {
        this.user.name = ''
        this.user.lastname = ''
        console.dir(this)
    }
}

angular
    .module('appMain')
    .controller('AppMainController', AppMainController)
