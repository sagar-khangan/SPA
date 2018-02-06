///<reference path  = "scripts/angular.js">
///<reference path  = "scripts/angular-route.js">

var app = angular.module("SPA",['ngRoute'])
                 .config(function ($routeProvider) {
                     $routeProvider
                         .when("/",{
                             templateUrl: 'templates/home.html',
                             controller: 'homeController'
                         })
                         .when("/about",{
                             templateUrl: 'templates/about.html',
                             controller: 'aboutController'
                         })
                         .when("/contact",{
                             templateUrl:'templates/contact.html',
                             controller:'contactController'
                         })
                         .when("/error",{
                             templateUrl:'templates/error.html',
                             controller:'errorController'
                         })
                         .otherwise({
                             redirectTo:"/error"
                         })
                 })
                 .controller("homeController",function ($scope) {
                     $scope.message = "Home Page";
                 })
                .controller("aboutController",function ($scope) {
                    $scope.message = "About Page";
                })
                .controller("contactController",function ($scope) {
                    $scope.message = "Contact Page";
                })
                .controller("errorController",function ($scope) {
                    $scope.messgae  =  "Error Page";
                });
