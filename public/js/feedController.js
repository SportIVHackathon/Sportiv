var app = angular.module('sportivi', []);

app.controller('feedCtrl', function($scope, $http) {

    $scope.posts = ["walk", "rffffn", "play football", "play basketball"];

    $scope.sports = ["walk", "run", "play football", "play basketball"];

    $scope.cities = ["Jerusalem", "Tel-Aviv", "Beer-Sheva", "Haifa"];

    $scope.ages = ["18 - 24", "25 - 30", "31 - 40", "41+"];

    $scope.date = new Date(2010, 11, 28, 14, 57);
    $scope.date2 = ""
    $scope.chosenSport = "";

    $scope.chosenCity = "";

    $scope.textareaValue = "";

    $scope.ageGroup = "";

    $(function () {
        $('#datetimepicker1').datepicker();
    });

    $(function () {
        $('.clockpicker').clockpicker();
    });

    $scope.send = function () {
        var data = {
            sport: $scope.chosenSport,
            city: $scope.chosenCity,
            date: $scope.date,
            age: $scope.age,
            textarea: $scope.textareaValue
        };

        var url = "";

        $http.post(url, data).then(function successCallback(response) {
            console.log("great")
        }, function errorCallback(response) {
            console.log("error")
        });
    }


});



