var app = angular.module('sportivi', []);

app.controller('feedCtrl', function($scope) {

    $scope.posts = ["walk", "rffffn", "play football", "play basketball"];

    $scope.sports = ["walk", "run", "play football", "play basketball"];

    $scope.cities = ["Jerusalem", "Tel-Aviv", "Beer-Sheva", "Haifa"];

    $scope.date = new Date();

    $scope.time = new Date(1970, 0, 0, 11, 29, 0);

    $scope.chosenSport = "";

    $scope.chosenCity = "";

    $scope.textareaValue = "";
    
    $scope.send = function () {
        var data = {
            
        }

        
    }

});



