import React, {useState, useEffect} from 'react';
import './App.css';
import openNewAuthWindow from './openWindow';
import axios from 'axios';
import Tuning from './components/Tuning';
import GeneratedTracks from './components/GeneratedTracks';
import SavedTunings from './components/SavedTunings'
import {ITuning} from './react-app-env';
import {IUser} from './react-app-env';
import {IPlaylist} from './react-app-env';
import {ITracks} from './react-app-env';
import {IGeneratedTracks} from './react-app-env';
import {ISavedTunings} from './react-app-env'

const App: React.FC = () => {
  const [user, setUser] = useState<IUser>({} as IUser)
  const [playlists, setPlaylists] = useState<IPlaylist[]>([])
  const [playlist, setPlaylist] = useState<Number>()
  const [tracks, setTracks] = useState<ITracks[]>([])
  const [genTracks, setGenTracks] = useState<IGeneratedTracks[]>([])
  const [seedArtist, setSeedArtist] = useState<String>('')
  const [seedTrack, setSeedTrack] = useState<String>('')
  const [savedTunings, setSavedTunings] = useState<ISavedTunings[]>([])

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

// GET ALL Saved Tuning Configurations
useEffect( () => {
  axios.get('/api').then( res => console.log(res.data))
  },[])


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
    axios.get(`/api/${user.spotifyId}/playlists/${id}`)
      .then((res) => {
        console.log('heeeeeererererererererer')
        // setTracks(res.data)
        setSeedArtist(res.data[0].track.artists[0].id)
        setSeedTrack(res.data[0].track.id)
        console.log({seedArtist})
        console.log({seedTrack})
      })
  }

  function handleCreateClick(): void {
    // console.log({inst}, {dance}, {energy})
    axios.get(`/api/${user.spotifyId}/playlists/${inst}/${dance}/${energy}/${seedArtist}/${seedTrack}`)
      .then((res) => {
        // console.log("tracks from create: ", res.data.tracks, res.data.seeds)
        setGenTracks(res.data.tracks)
      })
  }

  function handleSaveTunings(): void {
    axios.post(`/api/savetuning/${user.spotifyId}/${inst}/${dance}/${energy}/${seedArtist}/${seedTrack}`)
      .then((res) => {
      })
  }

  function handleGetSavedTunings(): void {
    console.log("WORK")
    axios.get(`/api/saved`)
      .then((res) => {
        console.log('Show saved tunings!!!', res.data)
        setSavedTunings(res.data)
      }).catch( err => console.log(err))
  }

  var userData = Object.keys(user).length === 0 ? <p>No user</p> : <p> {user.spotifyId}</p>
  
  var playlistData = playlists.map((playlist, id) => {
    return (
      <div onClick={() => handlePlaylistClick(playlist.id)}  className="playlist">
        <p> {playlist.name}</p>
      </div>
    )
  }) 
    console.log({genTracks})
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
      <button onClick={() => handleSaveTunings()} >Save these tuning parameters</button>
      <hr/>
      <button onClick={() => handleCreateClick()} >Create New Playlist!</button>
      <hr/>
      <GeneratedTracks genTracks={genTracks}/>
      <hr/>
      <hr/>
      <button onClick={() => handleGetSavedTunings()} >See saved tunings</button>
      <SavedTunings savedTunings={savedTunings}/>


    </div>
  );
}

export default App;