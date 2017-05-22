import EventEmmiter from "events";
import dispatcher from "../dispatcher";

class SongsStore extends EventEmmiter {
	constructor() {
		super();
		this.state = {
			songs: undefined
		}
	}

  getAllSongs() {
  	return this.state.songs;
  }

  actionHandler(action) {
  	switch(action.type){
  		case "GET_SONGS": {
  			this.state.songs = action.songsList;
  		}
  	}
  	this.emit("change");
  }
}

const songsStore = new SongsStore();
dispatcher.register(songsStore.actionHandler.bind(songsStore));
export default songsStore;
