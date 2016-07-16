 'use strict';

/**
 * @ngdoc function
 * @name trtDisplayApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the trtDisplayApp
 */
angular.module('trtDisplayApp')
  .controller('MainCtrl', function ($scope, $interval) {
    
  	 var timeController = this;

  	 timeController.localTime = new Date();
  	 timeController.localTimeZoneOffsetHrs = timeController.localTime.getTimezoneOffset();
  	 console.log(timeController.localTimeZoneOffsetHrs);

  	 function Clock(timezone){
  	 	this.time = Date.now();
  	 	this.getTime = function(){ timeController.localTime = Date.now();};
  	 	this.interval = 1000;
  	 	this.timezone = timezone; 
  	 	this.activeClock = function(){ $interval( this.getTime , this.interval );};
  	 }

  	 timeController.usaOffice = new Clock('+600');
  	 timeController.usaOffice.activeClock();
  });
