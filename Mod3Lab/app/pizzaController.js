(function() {
    'use strict';

    angular.module('app')
        .controller('pizzaController', pizzaController);


    pizzaController.$inejct = ['$scope'];

    function pizzaController($scope) {
        $scope.model = {
            title: 'Pizza Builder',
            availableToppings: ['Cheese', 'Pepperoni', 'Bacon', 'Pineapple', 'Sausage', 'Ham', 'Chicken', 'Mushrooms', 'Onion', 'Olives', 'Green Peppers'],
            toppings: [],
            toppingAdded: false,
            toppingFound: -1
        };

        $scope.addTopping = function(topping) {
            var toppingToAdd = $scope.model.toppings.indexOf(topping);
            // console.log("IndexOf: " + toppingToAdd);

            if (toppingToAdd === -1) {
                $scope.model.toppings.push(topping);
                $scope.model.toppingAdded = true;
            } else {
                alert(topping + " already added! Choose another topping.");
            }
            $scope.model.search = null;
        }

        $scope.searchedToppingFound = function() {

            if ($scope.toppings != undefined && $scope.toppings.length > 0) {
                $scope.model.toppingAdded = true;
            }

            for (var i = 0; i < $scope.model.availableToppings.length; i++) {

                var searchTopping = $scope.model.availableToppings[i].toLowerCase().indexOf($scope.model.search.toLowerCase());

                if (searchTopping === -1) {
                    $scope.model.toppingFound = 0;
                } else {
                    $scope.model.toppingFound = 1;
                    return;
                }
            }

        }
    }


})();