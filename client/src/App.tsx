import React, {useState, useEffect} from 'react';
import './App.css';
import openNewAuthWindow from './openWindow';
import axios from 'axios';

// We had to defin this because TS needs to know 
// the shape of our user object
export interface IUser {
  _id?: string;
  spotifyId: number;
}

export interface IPlaylist {
  name: string
  id: number
}
export interface ITracks {
  name: string
}

// A functional component must be of type React.FC
const App: React.FC = () => {
  // useState can be used as a generic 
  const [user, setUser] = useState<IUser>({} as IUser)
  const [playlists, setPlaylist] = useState<IPlaylist[]>([])
  const [tracks, setTracks] = useState<ITracks[]>([])

  useEffect(() => {
    if (Object.keys(user).length) {
      axios.get(`/api/${user.spotifyId}/playlists`)
      .then((res) => {
        setPlaylist(res.data)
      })
    }
  }, [user])

  function handleLogin(e: React.MouseEvent): void {
    e.preventDefault()
    var message: Promise<IUser> = openNewAuthWindow('/auth/spotify')
    message.then(res => {
      setUser(res)
    }).catch(err => {
      console.log(err)
    })
  }

  function handlePlaylistClick(e: React.MouseEvent): void {
    e.preventDefault()
    console.log("CLICKclackCLICK")
    console.log(e.target)

  }








  useEffect(() => {
    console.log("getting TRAACCKS")
    axios.get(`/api/${user.spotifyId}/playlists/playlist_id`)
    .then((res) => {
      console.log(res.data)
      setTracks(res.data)
    })
  }, [playlists])

  var userData = Object.keys(user).length === 0 ? <p>No user</p> : <p> {user.spotifyId}</p>
  // console.log("Playlist!!!!!!!!!!!!!$$$$$$$$$$$%%%%%%%%%%%%%")
  // if (playlists.length !== 0 ) {

  //   console.log(playlists[0].name)
  // }
  
    var playlistData = playlists.map((playlist, id) => {
      return (
        <div onClick={handlePlaylistClick}  className="playlist">
          <p> {playlist.name}</p>
        </div>
      )
    }) 

  return (
    <div className="App">
      <a onClick={handleLogin} href="/auth/spotify">Login to Spotify</a>
      {userData}
      <hr/>
      <h3>PLAYLISTS!</h3>
      {playlistData}
    </div>
  );
}

export default App;