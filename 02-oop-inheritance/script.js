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
			//Deletes the play() method of the Movie subclass, not the play() method from the prototype.
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
		this.actorsList = new Array();
	}

	play(){
		console.log(`Playing ${this.title}`);
	}
	pause(){
		console.log(`The movie ${this.title} is paused`);
	}
	resume(){
		console.log('Movie resumed');
	}
	stop(){
		console.log(`The movie ${this.title} is stopped`);
	}
	addCast(actor){
		this.actorsList = this.actorsList.concat(actor);
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

class Actor{
	constructor(name, age){
		this.name = name;
		this.age = age;
	}
}

let terminator = new Movie('Terminator', 1984, 90);
let logger = new Logger();
let arnold = new Actor('Arnold Schwarzenegger', 50);
terminator.addCast(arnold);
let otherCast = [
  new Actor('Paul Winfield', 50),
  new Actor('Michael Biehn', 50),
  new Actor('Linda Hamilton', 50)
];



let Social = {
	share: function(friendName){
		console.log(`${friendName} shared ${this.title}`);
	},
	like: function(friendName){
		console.log(`${friendName} likes ${this.title}`);
	},
}

Object.assign(terminator,Social);

//Some tests below:
terminator.play();
terminator.on('play', logger);
terminator.play();
terminator.off('play');
terminator.play();
terminator.on('play', logger);
terminator.play();
terminator.emit('play');
terminator.off('play');
terminator.emit('play');
terminator.on('stop', logger);
terminator.stop();
terminator.share('Alexander');
terminator.like('Pepe');
terminator.addCast(otherCast);
console.log(terminator.actorsList);