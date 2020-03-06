"use strict";

var app = require('./app');

var promiseService = function ($q){

    this.asynCall = function(isSuccess){
        var deferred = $q.defer();

        if ( isSuccess || isSuccess === undefined){
            deferred.resolve("it worked fine");
        }
        else
        {
            deferred.reject("Something went wrong on your call. Bad Luck.")
        }

        return deferred.promise;
    }

}

app.service("promiseService",["$q", promiseService]);
