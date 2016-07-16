 'use strict';

/**
 * @ngdoc function
 * @name trtDisplayApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the trtDisplayApp
 */
angular.module('trtDisplayApp')
  .controller('MainCtrl', function ($scope, $interval, $filter) {
    
  	 var timeController = this;
  	 
	 timeController.time = '';
  	 timeController.localTimeOffset = $filter('date')(Date.now() , 'Z');
  	 console.log(timeController.localTimeOffset );
  	 timeController.DisplayLocation = '';
  	 timeController.usaOfficeUTC = '-0700';
  	 timeController.ausOfficeUTC = '+1000';
  	 timeController.polOfficeUTC = '-0200';

  	 //Set the main location 
  	 if (timeController.localTimeOffset === timeController.ausOfficeUTC){
  	 	console.log('This is sydney bitch');
  	 }else if( timeController.localTimeOffset === timeController.usaOfficeUTC){
  	   	console.log('This is San Diego bitch');
  	 }else if( timeController.localTimeOffset === timeController.polOfficeUTC){
  	 	console.log('This is Poland bitch');
  	 }

<<<<<<< HEAD
  	 function Clock(timezone){
  	 	this.time = Date.now();
  	 	this.getTime = function(){ timeController.localTime = Date.now();};
  	 	this.interval = 1000;
  	 	this.timezone = timezone; 
  	 	this.activeClock = function(){ $interval( this.getTime , this.interval );};
  	 }

  	 timeController.usaOffice = new Clock('+600');
  	 timeController.usaOffice.activeClock();
=======
  	 $interval( function(){
  	 	timeController.time = Date.now();
  	 	timeController.usaOfficetime = $filter('date')(timeController.time, 'medium');
  	 }, 1000);

  	 console.log( timeController.localTime);

  	 function Clock(timezone){
  	 	this.isAm = timeController.localTime;
  	 	this.amPmFilt = {};
  	 	this.thetime = {};
  	 	this.timezone = timezone; 
  	 	this.getday = $filter('date')(timeController.localTime, 'HH', this.timezone); 
  	 	this.dateDay = {}; 

  	 	this.interval = 1000;
  	 	this.test = function(){this.thetime = 'boobs'; console.log(this.thetime);};
  	    /*$interval( function(){  console.log(timezonew);} , this.interval  );*/

  	 }

  	 timeController.usaOffice = new Clock('+600');
  	 timeController.usaOffice.test();
  	 console.log(timeController.usaOffice.isAm);




>>>>>>> 9d67ac8b176961d1a18e5d522c297f8466657854
  });
