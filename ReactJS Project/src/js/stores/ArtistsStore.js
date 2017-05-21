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
	/*getArtists() {
    axios.get("https://api.spotify.com/v1/search?q=tania%20bowra&type=artist").then(function(response){
      let name = response.data.artists.items[0].name;
    }).catch(function(error){
      console.log(error)
    });
  }*/

  getAllArtists() {
  	return this.state.name;
  }

  actionHandler(action) {
  	switch(action.type){
  		case "MOSTRAR_USUARIO": {
  			console.log(action.text);

  		}
  	}
  }
}

const artistsStore = new ArtistsStore();
dispatcher.register(artistsStore.actionHandler.bind(artistsStore));
window.dispatcher = dispatcher;
export default artistsStore;

