var loginApp = angular.module('loginApp', ['$http']);

loginApp.controller('loginAppCtrl', function($scope, $http) {
    $scope.email = "";
    $scope.password = "";

    $scope.submit = function(){
        var data = {
            email: $scope.email,
            password: $scope.password

        };

        var config = {
            headers : {
                'Content-Type': 'application/json'
            }
        };

        $http.post("/login", data, config)
            .then(
                function(response){
                    console.log(response);
                },
                function(response){
                    console.log(response);
                }
            );
    }
});
