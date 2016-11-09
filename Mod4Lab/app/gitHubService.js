(function() {
    'use strict';

    angular.module('gitHubService', ['ngResource'])
        .factory('gitHub', gitHub);

    gitHub.$inject = ['$resource'];

    function gitHub($resource) {
        // console.log("From gitHub");
        return $resource('https://api.github.com/:action/angular/:id', {
            action: '@action',
            org: '@org',
            id: '@id'
        }, {
            getAll: {
                method: 'GET',
                isArray: true,
                params: { action: 'orgs', org: 'org', id: 'repos' }
            },
            getDetail: {
                method: "GET",
                params: { action: 'repos' }
            }
        });

    }



})();