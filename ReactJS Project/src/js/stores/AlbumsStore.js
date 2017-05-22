import EventEmmiter from "events";
import dispatcher from "../dispatcher";

class AlbumsStore extends EventEmmiter {
	constructor() {
		super();
		this.state = {
			albums: undefined
		}
	}

  getAllAlbums() {
  	return this.state.albums;
  }

  actionHandler(action) {
  	switch(action.type){
  		case "GET_ALBUMS": {
  			this.state.albums = action.albumsList;
  		}
	  	break;
			case "SELECT_ALBUM": {
				//console.log("Action on actionHandler: ",action.value);
				this.state.albums = undefined;
			}
			break;
  	}
  	this.emit("change");	
  	//console.log("AlbumsStore emitted a change");
  }
}

const albumsStore = new AlbumsStore();
dispatcher.register(albumsStore.actionHandler.bind(albumsStore));
export default albumsStore;
