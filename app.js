var app = angular.module('contactForm',['ngRoute','ngMessages']);

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

app.controller('HomeController', function($scope,$http){

    $scope.url='/test/data/contents.json';
    $scope.content = [];
    
    $scope.fetchContent = function() {
    $http.get($scope.url).then(function(result){
        $scope.content = result.data;
    
        $scope.premier = $scope.content[3].data;
        $scope.deuxieme = $scope.content[4].data;
    });
    }
    $scope.fetchContent();
})

app.controller('AboutController', function($scope){
    $scope.message='On en a gros!';
})

app.controller('FooterController', function($scope){
    $scope.footer = '\u00a9 - J.MIJEON | 2016';
})

app.controller('ContactController', function($scope,$http){

    /*Affichage des titres de champs du formulaire en allant les chercher dans un JSON :*/
    $scope.url='/test/data/contents.json';
    $scope.content = [];
    
    $scope.fetchContent = function() {
    $http.get($scope.url).then(function(result){
        $scope.content = result.data;
    
        $scope.enterName = $scope.content[0].data;
        $scope.enterEmail = $scope.content[1].data;
        $scope.enterContent = $scope.content[2].data;
    });
    }
    $scope.fetchContent();
    //Affichage des erreurs côté client : 
    $scope.errorsUrl='/test/data/errors.json';
    $scope.errors = [];
    
    $scope.fetchContent = function() {
    $http.get($scope.errorsUrl).then(function(result){
        $scope.errors = result.data;
        $scope.minlengthError = $scope.errors[0].minlengthError;
        $scope.maxlengthError = $scope.errors[1].maxlengthError;
        $scope.requiredError = $scope.errors[2].requiredError;
        $scope.emailError = $scope.errors[3].emailError;

    });
    }
    $scope.fetchContent();
    /* fin affichage JSON */

    /*$scope.enterName="Votre nom :";
    $scope.enterEmail="Votre email :";
    $scope.enterContent="Votre message :";*/
    $scope.formData = {};
        $scope.processForm = function (isValid) {
            $http({
                method: 'POST',
                url: 'treatment.php',
                data: $.param($scope.formData),  // pass in data as strings
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
            })
                .success(function (data) {
                    console.log(data);
                    //if (!data.success) {
                    if(!isValid){
                        $scope.errorName = data.errors.yourName;
                        $scope.errorEmail = data.errors.yourEmail;
                        $scope.errorContent = data.errors.yourContent;
                    } 
                    else {
                        $scope.message = data.message;
                    }
                });
        };
})