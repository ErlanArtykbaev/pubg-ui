import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import MainPage from './pages/Home'
import ProfilePage from './pages/Profile'
import LobbyPage from './pages/Lobby'
import {getMyProfile as getProfileAction} from './store/actions/profile'
import {getLobbiesList as getLobbiesListAction, getLobbiesSuccess as getLobbiesSuccessAction} from './store/actions/lobbies'

import './assets/style/style.scss'

const ENDOPOINT = 'http://localhost:1717'

function App() {

  const { token, myProfile, lobbies, getLobbiesSuccess } = useSelector(state => ({
      token: state.auth.token,
      myProfile: state.profile.myProfile,
      lobbies: state.lobbies.list,
      getLobbiesSuccess: state.lobbies.success,
      lobbies: state.lobbies.list
    }))

  const dispatch = useDispatch()

  React.useEffect(() => {
    if (token) {
      fetch(`${ENDOPOINT}/profile`, {
        method: 'GET',
        headers: { 'X-Auth': `${token}` },
      })
        .then((response) => response.json())
        .then(({ data }) => {
          dispatch(getProfileAction(data))
        })
    }
    if(getLobbiesSuccess) {
      fetch(`${ENDOPOINT}/list`, {
        method: 'GET',
      })
        .then((response) => response.json())
        .then((data) => {
          dispatch(getLobbiesListAction(data))
          dispatch(getLobbiesSuccessAction(false))
        })
    }
  }, [token, getLobbiesSuccess])
  
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={MainPage} exact/>
        <Route path='/profile' component={ProfilePage} exact/>
        <Route path = '/profile/settings' component = {ProfilePage} exact/>
        <Route path = '/profile/cardIn' component = {ProfilePage} exact/>
        <Route path = '/profile/cardOut' component = {ProfilePage} exact/>
        <Route path = '/profile/createLobbie' component = {ProfilePage} exact/>
        {lobbies.map(item => (
        <Route path={`/lobby-${item.id}`} component = {LobbyPage} key={item.id} exact />
        ))}
      </Switch>
    </BrowserRouter>
  )
}

export default App;
