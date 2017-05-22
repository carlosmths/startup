import EventEmmiter from "events";
import dispatcher from "../dispatcher";

class ArtistsStore extends EventEmmiter {
	constructor() {
		super();
		this.state = {
			artists: ""
		}
	}

  getAllArtists() {
  	return this.state.artists;
  }

  actionHandler(action) {
  	switch(action.type){
  		case "GET_ARTISTS": {
  			this.state.artists = action.artistsList.items;
  		}
  		break;
  		case "SELECT_ARTIST": {
  			//console.log("Action on actionHandler: ",action.value);
  			this.state.artists = undefined;
  		}
  		break;
  	}
  	this.emit("change");
  }
}

const artistsStore = new ArtistsStore();
dispatcher.register(artistsStore.actionHandler.bind(artistsStore));
export default artistsStore;

