import EventEmmiter from "events";
import dispatcher from "../dispatcher";

class ArtistsStore extends EventEmmiter {
	constructor() {
		super();
		this.state = {
			name: [
				
			]
		}
	}
	setArtists(newName) {

	}

  getAllArtists() {
  	return this.state.name;
  }

  actionHandler(action) {
  	switch(action.type){
  		case "GET_ARTISTS": {
  			console.log(action.name);
  		}
  	}
  }
}

const artistsStore = new ArtistsStore();
dispatcher.register(artistsStore.actionHandler.bind(artistsStore));
export default artistsStore;

