import EventEmmiter from "events";
import dispatcher from "../dispatcher";

class ArtistsStore extends EventEmmiter {
	constructor() {
		super();
		this.state = {
			artists: [
				
			]
		}
	}

  getAllArtists() {
  	return this.state.artists;
  }

  setArtists(list) {
  	this.setState({artists: list})
  }

  actionHandler(action) {
  	switch(action.type){
  		case "GET_ARTISTS": {
  			//Put artists in state
  			this.setArtists(action.artistsList);
  		}
  	}
  	this.emit("change");
  }
}

const artistsStore = new ArtistsStore();
dispatcher.register(artistsStore.actionHandler.bind(artistsStore));
export default artistsStore;

