(function() {
    'use strict';

    angular.module('app')
        .controller('labController', labController);


    // labController.$inject = ['$q', '$timeout', '$scope', '$http'];
     labController.$inject = ['$q', '$timeout', '$scope', '$http', 'gitHub'];

     function labController($q, $timeout, $scope, $http, gitHub) {
        // function labController($q, $timeout, $scope, $http) {
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

        $scope.getRepos = function(org) {
            // $http.get('https://api.github.com/orgs/angular/repos')
            //     .then(function(response) {
            //         $scope.model.repos = response.data;
            //     }, function(response) {
            //         $scope.model.repos = 'Error: ' + response.data.message;
            //     })

            // $scope.model.repos = gitHub.getAll({ org: org });
            $scope.model.repos = gitHub.getAll({ org: org });

            // gitHub.getAll({ org: org }).then(function(response) {
            //         $scope.model.repos = response.data;
            //     },
            //     function(response) {
            //         $scope.model.repos = 'Error: ' + response.data.message;
            //     });
        }

        // console.log("NAME: " + $scope.name);
        // $scope.loadDetail = function(name, org) {
            $scope.loadDetail = function(name) {

            // console.log(name);
            //     var url = 'https://api.github.com/repos/angular/' + name;
            //     $http.get(url)
            //         .then(function(response) {
            //                 $scope.model.detail = response.data;
            //             },
            //             function(response) {
            //                 $scope.model.detail = { error: true, message: 'Error: ' + response.data.message };
            //             });

            $scope.model.detail = null;
            // $scope.model.detail = gitHub.getDetail({ id: name, org: org });
            $scope.model.detail = gitHub.getDetail({ id: name});
        }


    } //end of labController 

    // function loadDetail($http, $scope, name) {

    //     var url = 'https://api.github.com/repos/angular/' + name;
    //     $http.get(url)
    //         .then(function(response) {
    //                 $scope.model.detail = response.data;
    //             },
    //             function(response) {
    //                 $scope.model.detail = { error: true, message: 'Error: ' + response.data.message };
    //             });
    // }

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