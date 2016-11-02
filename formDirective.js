angular.module('contactForm', [])

.controller('myCFController', function($scope,$http){
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
    $scope.formMessage={
        yourName : 'Votre nom',
        yourEmail : 'Votre email',
        yourContent : 'Message'
    };
    $scope.mailValidator = 'quelquechose@exemple.com';
    

        
})

.directive('myContactForm',function(){
    return {
        restrict:'A',
        templateUrl: 'contact.html'
    }
});