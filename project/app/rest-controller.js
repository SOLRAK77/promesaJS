"use strict";

var app = require('./app');


var restController = function($scope, $http, $timeout, userApiService){

    $scope.data;
    $scope.process = "procesing.."

    //Don't do it, Add http calls to the service/factory not on Controller
    $http({
        method:'GET',
        url : '/api/users'
    })
    .then(function(response)
    {
        $timeout(function(){
            //console.log(response.data);
            $scope.data = response.data;                
            $scope.process = "processed";
        },2000)
    });

    //console.log(userApiService.getUsers());
    $scope.dataFromService = userApiService.getUsers();

    $scope.process = "almost there"

};

app.controller("restController",['$scope','$http','$timeout','userApiService', restController]);

module.exports= app;