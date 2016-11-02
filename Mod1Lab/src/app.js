(function() {

    'use strict';

    var helloWorldApp = angular.module('helloWorldApp', [])
        .controller('firstController', firstController)
        .constant('myConfig', { applicationName: "My Angular JS APP" })
        .constant('crDate', { currentDate: new Date() });



    firstController.$inject = ['$scope', 'myConfig', 'crDate'];

    function firstController($scope, myConfig, crDate) {
        $scope.appName = myConfig.applicationName;
        $scope.currentDate = crDate.currentDate;
    }


})();