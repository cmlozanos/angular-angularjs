angular
    .module('appMain')
    .controller('AppMainController', AppMainController)

function AppMainController() {
    this.user = {
        name: 'Pepe',
        lastname: 'Perez'
    }
    this.curso = 'AngularJS'

    this.borrar = function () {
        this.user.name = ''
        this.user.lastname = ''
        console.dir(this)
    }
}