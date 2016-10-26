angular.module('contactForm', [])

.controller('myCFController',['$scope', function($scope){
    
    $scope.formMessage={
        yourName : 'Votre nom',
        yourEmail : 'prenom.nom@exemple.com',
        yourContent : 'Message'
    }
}])

.directive('myContactForm',function(){
    return {
        restrict:'A',
        template: "<form ng-submit='processForm()'>" +
         "<div id='name-group' class='form-group' ng-class='{ 'has-error' : errorName }'>" +
            "<label>Votre nom</label>" + 
            "<input type='text' name='yourName' class='form-control' placeholder='Votre nom' ng-model='formData.yourName' ng-required='true'>" +
            "<span class='help-block' ng-show='errorName'>{{errorName}}</span>" +
         "</div>" +
         "<div id='email-group' class='form-group' ng-class='{ 'has-error' : errorEmail }'>"+
            "<label>Votre email</label>"+
            "<input type='email' name='yourEmail' class='form-control' placeholder='prenom.nom@exemple.com' ng-model='formData.yourEmail' ng-required='true'>" +
            "<span class='help-block' ng-show='errorEmail'>{{errorEmail}}</span>" +
         "</div>" +
         "<div id='content-group' name='content' class='form-group' ng-class='{ 'has-error' : errorContent }'>" +
            "<label>Votre message</label>" +
            "<textarea  rows='5' cols='50' class='form-control' placeholder='Salut ! Comment ça va?' ng-model='formData.content' ng-required='true'></textarea>" +
            "<span class='help-block' ng-show='errorContent'>{{errorContent}}</span>" +
         "</div>" +
         "<button type='submit' class='btn btn-success btn-lg btn-block'>" +
         "<span class='glyphicon glyphicon-flash'></span> Submit!" +
         "</button>" +
      "</form>"
    }
});