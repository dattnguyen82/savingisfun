'use strict';

/* Controllers */
angular.module('savingisfun.controller.account', [])
.controller('accountController', function ($scope) {
   console.log("account");
   
   $scope.source = 10000.0;
   $scope.savings = 250.0;
   $scope.delta = 0;
   
   $scope.history = [];
   $scope.phrases = ["Great!", "Keep it up!", "You rock!", "Excellent!", "You'll hit your goal in no time!", "Nice job!", "There's no stopping you!"];
   
   $scope.addToSavings = function(){
      var d = Math.min($scope.delta, $scope.source);    
      $scope.source -= d;
      $scope.savings += d;      
      
      var timeline_class = "timeline-inverted";
      
      if ( $scope.history.length % 2 == 0 )
      {
         timeline_class = "";
      }
      
      var p = $scope.phrases[Math.floor((Math.random() * 6))];
      
      $scope.history.push( {timestamp: Date.now(), delta: d, class: timeline_class, phrase: p} );
       
      console.log($scope.history);
   };
   
});