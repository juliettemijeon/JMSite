<?php
require_once("includes/header.php");

?>
<div class="container" ng-app="contactForm" ng-controller="FormController">
   <div class="col-md-6 col-md-offset-3">
      <!-- PAGE TITLE -->
      <div class="page-header">
         <h1><span class="glyphicon glyphicon-tower" style="font-size:20px"></span><span style="font-size:20px; margin-left:10px;">Me contacter</span></h1>
      </div>
      <!-- SHOW ERROR/SUCCESS MESSAGES -->
      <div id="messages" class="well" ng-show="message">{{message}}</div>
      <!--<div ng-controller="myCFController">
            <div my-contact-form></div>
      </div>-->
      <!-- FORM -->
      <form ng-submit="processForm()">
         <!-- NAME -->
         <div id="name-group" class="form-group" ng-class="{ 'has-error' : errorName }">
            <label>Votre nom</label>
            <input type="text" name="yourName" class="form-control" placeholder="Votre nom" ng-model="formData.yourName">
            <span class="help-block" ng-show="errorName">{{errorName}}</span>
         </div>
         <div id="email-group" class="form-group" ng-class="{ 'has-error' : errorEmail }">
            <label>Email</label>
            <input type="email" name="yourEmail" class="form-control" placeholder="prenom.nom@exemple.com" ng-model="formData.yourEmail">
            <span class="help-block" ng-show="errorEmail">{{errorEmail}}</span>
         </div>
         <div id="content-group" name="content" class="form-group" ng-class="{ 'has-error' : errorContent }">
            <label>Message</label>
            <textarea  rows="5" cols="50" class="form-control" placeholder="Salut ! Comment ça va?" ng-model="formData.content"></textarea>
            <span class="help-block" ng-show="errorContent">{{errorContent}}</span>
         </div>
         <button type="submit" class="btn btn-success btn-lg btn-block">
         <span class="glyphicon glyphicon-flash"></span> Submit!
         </button>
      </form>
   </div>
</div>
<?php
require_once("includes/footer.php");
?>
