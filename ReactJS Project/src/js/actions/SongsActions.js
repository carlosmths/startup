import dispatcher from "../dispatcher";
import axios from "axios";

export function getSongs(value) {
	//console.log("getSons value: ", value);
	axios.get(`https://api.spotify.com/v1/albums/${value}/tracks`)
  .then(function(response){
    let songsList = response.data.items;
    //console.log("songsList on getSongs: ", albumsList);
    dispatcher.dispatch({type: "GET_SONGS", songsList});
  })
  .catch(function(error){
    console.log("ERROR ON GETSONGS: ", error);
  });
}