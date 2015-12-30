'use strict';

angular.module('savingisfun', [
    'ngRoute',
    'savingisfun.controller.statistics',
     'savingisfun.controller.account'
]).
config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {templateUrl: 'account.html'})
        .when('/account', {templateUrl: 'account.html', controller: "accountController"})
         .when('/friends', {templateUrl: 'friends.html', controller: "accountController"})
        .when('/statistics', {templateUrl: 'statistics.html', controller: "statisticsController"})
        .otherwise({redirectTo: '/'});
}]).
run(function($rootScope) {
    console.log("loading app");
});
