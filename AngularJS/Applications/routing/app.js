'use strict'

var mainApp = angular.module('mainApp',['ngRoute']);

mainApp.config(['$routeProvider', function($routeProvider){
    
    $routeProvider
    .when("/", {
        templateUrl: "home.html"
    })
    
    .when('/page1',{
        templateUrl: 'page1.html'
    })
    
    .when('/page2',{
        templateUrl: 'page2.html'
    })
    .otherwise({
        templateUrl: "home.html"
    });
    
    
    
}]);