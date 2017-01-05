var app = angular.module('sportivi', [])
    .controller('chatCtrl', function($scope) {

    })
    .controller('postCtrl', function($scope, $http) {

        $scope.posts = ["walk", "rffffn", "play football", "play basketball"];

        $scope.sports = ["walk", "run", "play football", "play basketball"];

        $scope.cities = ["Jerusalem", "Tel-Aviv", "Beer-Sheva", "Haifa"];

        $scope.ages = ["18 - 24", "25 - 30", "31 - 40", "41+"];

        $scope.date = new Date(2010, 11, 28, 14, 57);
        $scope.date2 = "";
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


    })
    .controller('feedCtrl', function($scope, $http) {

        $http.get("/getEvents")
            .then(
                function(response){
                    console.log("good");
                    console.log(response.data);
                    $scope.events = response.data;
                    $scope.colors = [];
                    for ( var i = 0; i < $scope.events.length; i++ ){
                        var color = {"background-color": 'red'};
                        if(!$scope.events[i].event_kind.localeCompare("yoga_class")){
                            color = {"background-color": '#3C61A5'};
                            $scope.events[i].event_icon = "static/images/icon_yoga.svg"
                        }
                        else if(!$scope.events[i].event_kind.localeCompare("run")){
                            color = {"background-color": '#8B1E35'};
                            $scope.events[i].event_icon = "static/images/icon_run.svg"

                        }
                        else if(!$scope.events[i].event_kind.localeCompare("bike ride")){
                            color = {"background-color": '#EA9047'};
                            $scope.events[i].event_icon = "static/images/icon_bike.svg"

                        }
                        else if(!$scope.events[i].event_kind.localeCompare("walk")){
                            color = {"background-color": '#00AAA0'};
                            $scope.events[i].event_icon = "static/images/icon_walk.svg"
                        }

                        $scope.colors.push(color);
                    }
                },
                function(response){
                    console.log("Error: can't get user details");
                    console.log(response);
                }
            );
    })
    .controller('greetingsCtrl', function($scope,$http) {

        setInterval(function(){
            $http.get("/getUserDetails")
                .then(
                    function(response){
                        console.log("good");
                        console.log(response.data);
                        $scope.user_first_name = response.data.user_first_name;
                        $scope.user_last_name = response.data.user_last_name;
                        $scope.image_path = response.data.image_path;

                        console.log($scope.user_first_name);
                        console.log($scope.user_last_name);
                        console.log($scope.image_path);


                    },
                    function(response){
                        console.log("Error: can't get user details");
                        console.log(response);
                    }
                );
        },3000)

    })
    .controller('profileCtrl', function($scope) {

        $scope.students = ["Dani,AMit"];
    })
    .controller('divOptionsController', function($scope) {

        $scope.showFeed = true;
        $scope.showPost = true;
        $scope.showProfile = false;

        $scope.toProfile = function () {
            $scope.showFeed = false;
            $scope.showPost = false;
            $scope.showProfile = true;
        };

        $scope.toHome = function () {
            $scope.showProfile = false;
            $scope.showFeed = true;
            $scope.showPost = true;

        }
    });


