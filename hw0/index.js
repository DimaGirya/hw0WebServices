'use strict'
var data = "success\n";
var http = require('http');

http.createServer(function(req,res){
	main();
	res.writeHeader(200,{'Content-Type':'text/plain'});
	res.end(data);
}).listen(8080,'127.0.0.1');

function main(){
var EventEmitter  = require('events');
var eventsConfig = require('./hotelrating/config');

var Hotel = require('./hotelrating');
var hotel = new Hotel("Hotel");

hotel.on(eventsConfig.Increment,function(){
	console.log("Hotel name:"+hotel.hotelName);
	console.log("Increment rating");
});
hotel.on(eventsConfig.Increment,function(){
	data=data+"Hotel name:"+hotel.hotelName+"\n";
	data=data+"Increment rating\n";
});
hotel.on(eventsConfig.Decrement,function(){
	console.log("Hotel name:"+hotel.hotelName);
	console.log("Increment rating");
	if(hotel.hotelRating<0){
			console.log("Hotel reting is less than 0");
	}
});

hotel.on(eventsConfig.Decrement,function(){
	data=data+"Hotel name:"+hotel.hotelName+"\n";
	data=data+"Decrement rating\n";
	if(hotel.hotelRating<0){
			data=data+"Hotel reting is less than 0\n";
	}
});


hotel.incrementRating();
hotel.decrementRating();
hotel.decrementRating();
}
