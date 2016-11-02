var app = angular.module('contactForm',['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl : '/test/views/home.html', 
        controller : 'HomeController'
    })

    .when('/about', {
        templateUrl : '/test/views/about.html',
        controller : 'AboutController'
    })

    .when('/contact', {
        templateUrl : '/test/views/contact.html',
        controller : 'ContactController'
    })

    .otherwise({ redirectTo : '/' })
})

app.controller('HomeController', function($scope){
    $scope.premier = 'Lorem Elsass ipsum adipiscing chambon Strasbourg météor leo amet Gal ! Huguette réchime Chulien amet Coopé de Truchtersheim leverwurscht sit hopla rossbolla barapli Richard Schirmeck purus leo Wurschtsalad munster elementum eleifend ftomi! jetz gehts los wie lacus suspendisse consectetur gewurztraminer Oberschaeffolsheim schnaps Pellentesque Heineken salu nullam DNA, sagittis flammekueche bissame elit tellus mänele kougelhopf sit ornare sed porta ac risus, vielmols, amet, Yo dû. geïz nüdle s\'guelt schneck knepfle quam. hop ch\'ai libero.';
    $scope.deuxieme = 'Gal. Mauris mamsell ante eget id placerat quam, varius schpeck tellus baeckeoffe ornare tristique non non picon bière Pfourtz ! Oberschaeffolsheim kartoffelsalad pellentesque tchao bissame libero, turpis, Chulia Roberstau sit ac Kabinetpapier morbi blottkopf, libero, sed gravida dignissim Salut bisamme merci vielmols senectus Miss Dahlias mollis hopla rhoncus Spätzle habitant Salu bissame messti de Bischheim bredele vulputate Hans Carola in, dolor rucksack lotto-owe dui hopla Racing. Verdammi geht\'s et hoplageiss gal hopla id, Morbi knack so auctor, turpis ullamcorper semper und aliquam commodo Christkindelsmärik condimentum yeuh. wurscht kuglopf.';

})

app.controller('AboutController', function($scope){
    console.log("salut ça farte");
    $scope.message='On en a gros!';
})

app.controller('ContactController', function($scope,$http){
    console.log('plop');
    $scope.formData = {};
        $scope.processForm = function () {
            $http({
                method: 'POST',
                url: 'treatment.php',
                data: $.param($scope.formData),  // pass in data as strings
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
            })
                .success(function (data) {
                    console.log(data);
                    if (!data.success) {
                        $scope.errorName = data.errors.yourName;
                        $scope.errorEmail = data.errors.yourEmail;
                        $scope.errorContent = data.errors.content;
                    } 
                    else {
                        $scope.message = data.message;
                    }
                });

        };
})