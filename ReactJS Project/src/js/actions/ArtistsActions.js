import dispatcher from "../dispatcher";
import axios from "axios";

export function getArtists(value) {
	axios.get(`https://api.spotify.com/v1/search?q=*${value}*&type=artist`)
  .then(function(response){
    let artistsList = response.data.artists.items;
    dispatcher.dispatch({type: "GET_ARTISTS", artistsList});
  })
  .catch(function(error){
    console.log(error)
  });
}