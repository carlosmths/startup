import dispatcher from "../dispatcher";
import axios from "axios";

export function getArtists(value) {
	axios.get(`https://api.spotify.com/v1/search?q=${value}*&type=artist`)
  .then(function(response){
    let artistsList = response.data.artists;
    dispatcher.dispatch({type: "GET_ARTISTS", artistsList});
  })
  .catch(function(error){
    console.log("ERROR ON GETARTISTS: ", error);
  });
}

//To select only one artist and show it on the artists section as selected. -> to implement.
export function selectArtist(value) {
  dispatcher.dispatch({type: "SELECT_ARTIST", value});
}