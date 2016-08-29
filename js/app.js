
  var app = angular.module('myApp', [
    'ngRoute', // ngRoute for deep linking in angular
    'contactManagerApp' // the javascript which will handle this module
  ]);


    app.config(['$routeProvider', // routeProvider Service
      function($routeProvider) {
        $routeProvider
            .when('/index', {
            controller: 'PhoneListCtrl',
            templateUrl: 'list.html'
            })
            // .when('/add-contact', {
            // controller: 'addCtl',
            // templateUrl: 'partials/add-contact.html'
            // })
            // .when('/list', {
            // controller: 'IndexCtl',
            // templateUrl: 'partials/list.html'
            // })
            .otherwise({ // defining the home page
            redirectTo: 'index'
            });
      }]);

