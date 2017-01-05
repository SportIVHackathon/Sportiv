var loginApp = angular.module('loginApp', []);

loginApp.controller('loginAppCtrl', function($scope, $http) {
    $scope.email = "";
    $scope.password = "";


    $scope.submit = function(){
        var data = {
            username: $scope.email,
            password: $scope.password

        };

        var config = {
            headers : {
                'Content-Type': 'application/json'
            }
        };

        $http.post("/login", data)
            .then(
                function(response){
                    if(response.data.success){
                        console.log("Good login");
                        window.location.href="/";
                    }

                },
                function(response){
                    console.log("ERROR");
                    console.log(response);
                }
            );
    }
});
