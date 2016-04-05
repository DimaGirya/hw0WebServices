'use strict'

var EventEmitter  = require('events');
var eventsConfig = require('./config');

module.exports  = class Hotel extends  EventEmitter{
	constructor(hotelName){
		super();
     this.hotelName = hotelName;
     this.hotelRating = 0;
	}
		incrementRating(){
			this.hotelRating++;
			this.emit(eventsConfig.Increment);
			
		}
		decrementRating(){
			this.hotelRating--;
			this.emit(eventsConfig.Decrement);
		}


}

