"use strict";

var app = require('./app');

var userApiService = function($http){

    this.getCall = function(params){
        return $http.get('/api/users',params);
    }

    this.getUsers = function(){
        
        var data = {
            users : undefined,
            error : undefined
        };
    
        var succescallBack = function(response){
            data.users = response.data.users;
        }
    
        var erroCallBack = function(error){ data.error =  error; }

        $http({
            method:'GET',
            url : '/api/users'
        })
        .then(succescallBack, erroCallBack);

        return data;

    }    


    this.getUserById = function(userID){
        var data = {
            user : undefined,
            error : undefined
        };

        var objParam = {
            params : {
                id : userID
            }
        };

        var succescallBack = function(response){
            data.user = response.data;
        }
    
        var erroCallBack = function(error){ data.error =  error;}

        this.getCall(objParam).then(succescallBack, erroCallBack);

        return data;
    }
}

app.service('userApiService',['$http',userApiService]);

module.export = app;