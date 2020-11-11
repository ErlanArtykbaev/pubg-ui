import React from 'react'
import PageTemplate from '../components/templates/PageTemplate'
import LobbyPage from '../components/Lobbies/LobbyContainer'
import {useParams} from 'react-router'

const ENDOPOINT = 'http://localhost:1717'

const Lobby = () => {
  let {id} = useParams()

  const [lobby, setLobby] = React.useState('')
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(false)

  React.useEffect(() => {
    fetch(`${ENDOPOINT}/lobby/${id}`, {
    // fetch(`${ENDOPOINT}/list/${id}`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        setLoading(false)
        setLobby(data)
          console.log('lobby one', data)
      })
      .catch(() => {
        setLoading(false)
        setError(true)
      })
  }, [])


  return (
    <PageTemplate>
      <div style={{minHeight: '50vh', position: 'relative'}}>
        {loading && !error ? 
          <div className='loading'></div> : !loading && !error ?
          <LobbyPage 
            title={lobby.name}
            name_mode={lobby.map}
            date={lobby.date}
            time={lobby.time}
            priceGame={lobby.price}
            priceKill={lobby.kill_award}
            playerCount={lobby.playerCount}
          /> : !loading && error ?
          <div className='error-fetch'>Обновите</div> : null
        }
      </div>
    </PageTemplate>
  )
}

export default Lobby