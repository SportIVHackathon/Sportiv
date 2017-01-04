var app = angular.module('myApp', []);

app.controller('feedCtrl', function($scope, $http) {

    $scope.students = ["Dani,AMit"];
    $http.get("welcome.htm")
        .then(function(response) {
            $scope.myWelcome = response.data;
        });
});