"use strict";

var app = require('./app');


var restController = function($scope, $http, $timeout, userApiService, promiseService){

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
    $scope.dataSingleUser = userApiService.getUserById(1234);

    console.log($scope.dataSingleUser);

    $scope.process = "almost there"


    $scope.asynCallExecutedSuccess = false;
    promiseService.asynCall(true).then(
        function(data){
        //success
            $scope.asynCallExecutedSuccess = data;
        }, 
        function(error){
        //error
            $scope.asynCallExecutedSuccess = error;
    });


    promiseService.asynCall(false).then(
        function(data){
        //success
            $scope.asynCallExecutedError = data;
        }, 
        function(error){
        //error
            $scope.asynCallExecutedError = error;
    });

};

app.controller("restController",['$scope','$http','$timeout','userApiService', 'promiseService', restController]);

module.exports= app;