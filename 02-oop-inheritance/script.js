class EventEmmiter{

	constructor(){
		this.superClass = Object.getPrototypeOf(this);
	}

	on(event, logger){

		if(this.superClass.hasOwnProperty(event)){
			//Since play() method is on the prototype after extending the class and as on() method is being invoked by the created Movie object
			//'this' refers to that Movie object. So I decided to create a method that has the same name as the one on the prototype and
			//after calling the on() method for the first time, every time the play() method is invoked, the play() defined here will have
			//precedence over the play() defined on the prototype.
			this[event] = function() {
				logger.log(event);
			} 
			//this['play'] = function(){ ... }
			//The Movie object has now a method called play(). 
		}
		else{
			logger.error(event);
		}
	}
	emit(event){
		if(this.superClass.hasOwnProperty(event)){
			this[event]();
		}
		else{
			logger.error(event);
		}
	}
	off(event){
		if(this.superClass.hasOwnProperty(event)){
			delete this[event];
		}
		else{
			console.log('Error al eliminar');
		}
	}
}

class Movie extends EventEmmiter{

	constructor(title, year, duration){
		super();
		this.title = title;
		this.year = year;
		this.duration = duration;	
	}

	play(){
		console.log(`Playing ${this.title}`);
	}
	pause(){
		console.log(`The movie ${this.title} is paused`);
	}
	resume(){
		console.log('Resume');
	}
	stop(){
		console.log(`The movie ${this.title} is stopped`);
	}
}

class Logger{
	constructor(){

	}

	log(info){
		console.log(`The ${info} event has been emitted`);
	}
	error(info){
		console.log(`The ${info} method is not defined`);
	}
}


let movie1 = new Movie('Random Movie 1', 2017, 120);
let logger = new Logger();


//Some tests below:
movie1.play();
movie1.on('play', logger);
movie1.play();
movie1.off('play');
movie1.play();
movie1.on('play', logger);
movie1.play();
movie1.emit('play');
movie1.off('play');
movie1.emit('play');
movie1.on('stop', logger);
movie1.stop();
