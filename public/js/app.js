var app = angular.module('sportivi', [])
    .controller('chatCtrl', function($scope) {

    })
    .controller('postCtrl', function($scope, $http) {

        $scope.posts = ["Walk", "Play Football", "Basketball"];

        $scope.sports = ["Walk", "Football", "Basketball", "Basketball", "Swim", "Tennis", "Yoga Class",
            "Run", "Bike Ride"];

        $scope.cities = ["Jerusalem", "Tel-Aviv", "Beer-Sheva", "Haifa"];

        $scope.ages = ["18 - 24", "25 - 30", "31 - 40", "41+"];

        $scope.date2 = "";
        $scope.chosenSport = "";

        $scope.chosenCity = "";

        $scope.time = ""

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
                date: $scope.date2,
                age: $scope.age,
                time: $scope.time
            };


            console.log("Data to request: ");
            console.log(data);

            var url = "newEvent";
            $http.post(url, data).then(function successCallback(response) {
                console.log("great, this is the response:")
                console.log(response);
            }, function errorCallback(response) {
                console.log("error")
            });
        }


    })
    .controller('feedCtrl', function($scope, $http) {

        $http.get("/getEvents")
            .then(
                function(response){
                    $scope.events = [];
                    angular.extend($scope.events,response.data);

                    $scope.colors = [];
                    for ( var i = 0; i < $scope.events.length; i++ ){
                        var color = {"background-color": 'red'};
                        if(!$scope.events[i].event_kind.localeCompare("Yoga Class")){
                            color = {"background-color": '#3C61A5'};
                            $scope.events[i].event_icon = "static/images/icon_yoga.svg"
                        }
                        else if(!$scope.events[i].event_kind.localeCompare("Run")){
                            color = {"background-color": '#8B1E35'};
                            $scope.events[i].event_icon = "static/images/icon_run.svg"

                        }
                        else if(!$scope.events[i].event_kind.localeCompare("Bike Ride")){
                            color = {"background-color": '#EA9047'};
                            $scope.events[i].event_icon = "static/images/icon_bike.svg"

                        }
                        else if(!$scope.events[i].event_kind.localeCompare("Walk")){
                            color = {"background-color": '#00AAA0'};
                            $scope.events[i].event_icon = "static/images/icon_walk.svg"
                        }

                        else if(!$scope.events[i].event_kind.localeCompare("Football")){
                            color = {"background-color": '#47aa47'};
                            $scope.events[i].event_icon = "static/images/footballiCon.png"
                        }

                        else if(!$scope.events[i].event_kind.localeCompare("Basketball")){
                            color = {"background-color": '#aa160f'};
                            $scope.events[i].event_icon = "static/images/basketBall.png"
                        }

                        $scope.colors.push(color);
                    }
                    $scope.colors.reverse();
                    $scope.events.reverse();
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
                        $scope.user_first_name = response.data.user_first_name;
                        $scope.user_last_name = response.data.user_last_name;
                        $scope.image_path = response.data.image_path;

                    },
                    function(response){
                        console.log("Error: can't get user details");
                        console.log(response);
                    }
                );
        },3000)

    })
    .controller('profileCtrl', function($scope) {

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


