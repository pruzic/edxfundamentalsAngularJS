(function() {

    'use strict';

    angular.module('app')
        .controller('labController', labController);

    labController.$inject = ['$scope', 'registration'];

    function labController($scope, registration) {

        $scope.reset = reset;
        $scope.submit = submit;

        function reset() {
            $scope.model = {};
        }

        function submit(model) {
            registration.submit(model).$promise
                .then(function(response) {
                        alert('success');
                    },
                    function(response) {
                        alert(response.$error);
                    });
        }
    }
})();