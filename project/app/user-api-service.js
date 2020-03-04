"use strict";

var app = require('./app');

var userApiService = function($http){

    this.getUsers = function(){
        
        var data = {
            users : undefined,
            error : undefined
        };
    
        var succescallBack = function(response){
            data.users = response.data.users;
        }
    
        var erroCallBack = function(error){
            data.error =  error;
        }


        $http({
            method:'GET',
            url : '/api/users'
        })
        .then(succescallBack, erroCallBack);

        return data;

    }    
}

app.service('userApiService',['$http',userApiService]);

module.export = app;