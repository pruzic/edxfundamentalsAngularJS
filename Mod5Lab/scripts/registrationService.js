(function() {
    'use strict';

    angular.module('registrationService', ['ngResource'])
        .factory('registration', registration);
    // .constant('url', 'http://reqres.in/api/register');

    registration.$inject = ['$resource'];

    function registration($resource) {
        return $resource('http://reqres.in/api/register', {}, {
            submit: {
                method: 'GET'
            }
        });

    }

})();