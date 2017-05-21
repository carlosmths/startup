import dispatcher from "../dispatcher";
import axios from "axios";

export function mostrar(text) {
	dispatcher.dispatch({
		type: "MOSTRAR_USUARIO",
		text
	})
}

export function getArtists(value) {
	axios.get("https://api.spotify.com/v1/search?q=tania%20bowra&type=artist").then(function(response){
    let name = response.data.artists.items[0].name;
    dispatcher.dispatch({type: "GET_ARTISTS", name});
  }).catch(function(error){
    console.log(error)
  });
}