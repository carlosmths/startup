import dispatcher from "../dispatcher";
import axios from "axios";

export function getAlbums(value) {
	//console.log("getAlbums value: ", value);
	axios.get(`https://api.spotify.com/v1/artists/${value}/albums`)
  .then(function(response){
    let albumsList = response.data.items;
    //console.log("albumsList on getAlbums: ", albumsList);
    dispatcher.dispatch({type: "GET_ALBUMS", albumsList});
  })
  .catch(function(error){
    console.log("ERROR ON GETALBUMS: ", error);
  });
}

//To select only one album and show it on the albums section as selected. -> to implement.
export function selectAlbum(value) {
  dispatcher.dispatch({type: "SELECT_ALBUM", value});
}