class AppMainController {
    constructor($http) {
        'ngInject'
        this.$http = $http
    }

    $onInit() {
        this.responseOK = (response) => {
            alert('OK')
            this.respuesta = response.data
            console.dir(response)
            console.dir(this)
        }
        this.responseKO = (response) => {
            alert('KO')
            console.dir(this)
        }

        this.buscarPais()
    }

    buscarPais() {
        this.url = 'https://restcountries.eu/rest/v2/name/spain'
        this.respuesta = 'Sin respuesta'

        this.$http({
            method: 'GET',
            url: this.url
        }).then(
            this.responseOK,
            this.responseKO
            )
    }
}

angular
    .module('appMain')
    .component('appMain', {
        template: 'Respuesta: {{$ctrl.respuesta}}!',
        controller: AppMainController
    })

