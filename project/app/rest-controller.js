"use strict";

var app = require('./app');


var restController = function($scope, $http, $timeout){

    $scope.data;
    $scope.process = "procesing.."

    $http({
        method:'GET',
        url : '/api/users'
    })
    .then(function(response)
        {
            $timeout(function(){
                console.log(response.data);
                $scope.data = response.data;                
                $scope.process = "processed";
            },2000)
        }
    );

    $scope.process = "almost there"

};

app.controller("restController",['$scope','$http','$timeout',restController]);

module.exports= app;