(function() {
    'use strict';

    angular.module('app')
        .controller('labController', labController);

    labController.$inject = ['$q', '$timeout', '$scope', '$http'];

    function labController($q, $timeout, $scope, $http) {
        $scope.model = {
            number: 0,
            result: 'Ready'
        };

        $scope.checkOddNumber = function(input) {
            $scope.model.result = 'Working...';
            checkOddNumberHandler($q, $timeout, input).then(function(result) {
                    $scope.model.result = 'Success: ' + result;
                },
                function(result) {
                    $scope.model.result = 'Error: ' + result;
                })
        }

        $scope.getRepos = function() {
            $http.get('https://api.github.com/orgs/angular/repos')
                .then(function(response) {
                    $scope.model.repos = response.data;
                }, function(response) {
                    $scope.model.repos = 'Error: ' + response.data.message;
                })
        }



    } //end of labController 

    function checkOddNumberHandler($q, $timeout, input) {
        var defer = $q.defer();

        $timeout(function() {
            if (isNumberOdd(input)) {
                defer.resolve('Yes, an odd number');
            } else {
                defer.reject('Not an odd number');
            }
        }, 1000);

        return defer.promise;
    }

    function isNumberOdd(input) {
        return !isNaN(input) && input % 2 == 1;
    }



})();