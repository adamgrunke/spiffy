import React, {useState, useEffect} from 'react';
import './App.css';
import openNewAuthWindow from './openWindow';
import axios from 'axios';
import Tuning from './components/Tuning';
import {ITuning} from './react-app-env';
import {IUser} from './react-app-env';
import {IPlaylist} from './react-app-env';
import {ITracks} from './react-app-env';

// import Playlists from './components/Playlists'



// We had to defin this because TS needs to know 
// the shape of our user object


// A functional component must be of type React.FC
const App: React.FC = () => {
  // useState can be used as a generic 
  const [user, setUser] = useState<IUser>({} as IUser)
  const [playlists, setPlaylists] = useState<IPlaylist[]>([])
  const [playlist, setPlaylist] = useState<Number>()
  const [tracks, setTracks] = useState<ITracks[]>([])

  // consts for Tuning component
  const [inst, setInst] = useState<number>(0.5)
  const [dance, setDance] = useState<number>(0.5)
  const [energy, setEnergy] = useState<number>(0.5)

// handlers for Tuning component ===== START ======
const handleChangeInst = (e: React.SyntheticEvent<HTMLSelectElement>) => {
  let value = parseFloat((e.target as HTMLSelectElement).value)
  setInst(value)
}   
const handleChangeDance = (e: React.SyntheticEvent) => {
  let value = parseFloat((e.target as HTMLSelectElement).value)
  setDance(value)
}   
const handleChangeEnergy = (e: React.SyntheticEvent) => {
  let value = parseFloat((e.target as HTMLSelectElement).value)
  setEnergy(value)
} 
// handlers for Tuning component ===== END ======


  useEffect(() => {
    if (Object.keys(user).length) {
      axios.get(`/api/${user.spotifyId}/playlists`)
      .then((res) => {
        setPlaylists(res.data)
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

  function handlePlaylistClick(id: Number): void {
    // console.log("CLICKclackCLICK")
    console.log(id)
    axios.get(`/api/${user.spotifyId}/playlists/${id}`)
      .then((res) => {
        console.log("tracks: ", res.data)
        setTracks(res.data)
      })
  }

  function handleCreateClick(): void {
    // console.log("CLICKclackCLICK")
    console.log({inst}, {dance}, {energy})
    // axios.get(`/api/${user.spotifyId}/playlists/${inst}/${dance}/${energy}`)
    //   .then((res) => {
    //     console.log("tracks: ", res.data)
    //     setTracks(res.data)
    //   })
  }

  // useEffect(() => {
  //   // console.log("getting TRAACCKS", playlist)
  //   axios.get(`/api/${user.spotifyId}/playlists/${playlist}`)
  //   // axios.get(`/api/${user.spotifyId}/playlists/37i9dQZF1DWZtZ8vUCzche`)
  //   .then((res) => {
  //     console.log("tracks: ", res.data)
  //     setTracks(res.data)
  //   })
  // }, [playlist])

  var userData = Object.keys(user).length === 0 ? <p>No user</p> : <p> {user.spotifyId}</p>
  
    var playlistData = playlists.map((playlist, id) => {
      return (
        <div onClick={() => handlePlaylistClick(playlist.id)}  className="playlist">
          <p> {playlist.name}</p>
        </div>
        // <div onClick={() => setPlaylist(playlist.id)}  className="playlist">
        //   <p> {playlist.name}</p>
        // </div>
      )
    }) 

  return (
    <div className="App">
      <a onClick={handleLogin} href="/auth/spotify">Login to Spotify</a>
      {userData}
      <hr/>
      <h3>PLAYLISTS!</h3>
      {playlistData}
      <hr/>
      {/* {
        user ? console.log(user) : "no user"
      } */}
      <Tuning inst={inst} dance={dance} energy={energy}
              handleChangeInst={handleChangeInst}
              handleChangeDance={handleChangeDance}
              handleChangeEnergy={handleChangeEnergy} 
              
      />
      <button onClick={() => handleCreateClick()} >Create New Playlist!</button>
    </div>
  );
}

export default App;