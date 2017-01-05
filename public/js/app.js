var app = angular.module('sportivi', [])
    .controller('chatCtrl', function($scope) {

    })
    .controller('postCtrl', function($scope, $http) {

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


    })
    .controller('feed', function($scope, $http) {


    })
    .controller('greetingsCtrl', function($scope,$http) {
        $http.get("/getUserDetails")
            .then(
                function(response){
                    console.log("good");
                    console.log(response.data);
                    $scope.user_first_name = response.data.user_first_name;
                    $scope.user_last_name = response.data.user_last_name;
                    $scope.image_path = response.data.image_path;

                    console.log($scope.user_first_name)
                    console.log($scope.user_last_name)
                    console.log($scope.image_path)


                },
                function(response){
                    console.log("Error: can't get user details");
                    console.log(response);
                }
            );
    })
    .controller('profileCtrl', function($scope) {

        $scope.students = ["Dani,AMit"];
    })
    .controller('divOptionsController', function($scope) {

        $scope.showFeed = false;
        $scope.showPost = false;
        $scope.showProfile = true;

        // function increaseFontSize() {
        //     obj_profile = document.getElementById("profile");
        //     //get current font size of obj
        //     currentSize = parseFloat(obj.style.fontSize); //parseFloat gives you just the numerical value, i.e. strips the 'em' bit away
        //     if(currentSize <= 1.5) {
        //         obj.style.fontSize = (currentSize + .1) + "em";
        //     }
        // }   


        // function decreaseFontSize(objId) {
        //     obj = document.getElementById(objId);
        //     //get current font size of obj
        //     currentSize = parseFloat(obj.style.fontSize); //parseFloat gives you just the numerical value, i.e. strips the 'em' bit away
        //     if(currentSize > 1) {
        //         obj.style.fontSize = (currentSize - .1) + "em";
        //     }
        // }   

        // function changeColor(objId) {
        //     var textColor = document.getElementById(objId).style.color;
        //     if(textColor.localeCompare("yellow") == 0) {
        //         document.getElementById("controller").style.color = "black";
        //         document.getElementById("controller").style.backgroundColor = "white"; //check if needed - I THINK NOT!
        //         document.getElementById("table").style.backgroundColor = "white";
        //         document.getElementById("panel-body").style.backgroundColor = "white";
        //         document.getElementById("row").style.backgroundColor = "white";
        //     } else {
        //         document.getElementById("controller").style.color ="yellow";
        //         document.getElementById("controller").style.backgroundColor = "black"; //check if needed - I THINK NOT!
        //         document.getElementById("table").style.backgroundColor = "black";
        //         document.getElementById("panel-body").style.backgroundColor = "black";
        //         document.getElementById("row").style.backgroundColor = "black";
        //     }
        // }   

    })


    // <a href="javascript:increaseFontSize('container');"><button>+</button></a>
    // <a href="javascript:decreaseFontSize('container');"><button>-</button></a>
    // <a href="javascript:changeColor('controller');"><button>COLOR</button></a>