(function() {
    'use strict';

    angular.module('app')
        .controller('menuController', menuController);

    menuController.$inject = ['$scope'];

    function menuController($scope) {

        $scope.$watch('model.mainDish', function(newVlue, oldValue) {
            if (newVlue === 'BBQ Chicken Pizza') {
                alert('You have selected the BBQ Chicken Pizza!!!');
            }
        });

        console.log("From controller");
        $scope.model = { title: 'Our Menu' };

        $scope.changeMainDish = function(item) {

            var pizzaPrice;
            var namePizza = item.substring(0, item.indexOf("Pizza", 0)).trim();
            console.log(namePizza);

            switch (namePizza) {
                case "Cheese":
                    pizzaPrice = 7.99;
                    break;
                case "Pepperoni":
                    pizzaPrice = 8.99;
                    break;
                case "Margherita":
                    pizzaPrice = 15.99;
                    break;
                case "BBQ Chicken":
                    pizzaPrice = 14.99;
                    break;
                case "Combo":
                    pizzaPrice = 14.99;
                    break;
                default:
                    pizzaPrice = 5.99;
            }

            $scope.model.mainDish = { name: item, price: pizzaPrice };
        }
    }

})();