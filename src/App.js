import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';

import MainPage from './pages/Home'
import ProfilePage from './pages/Profile'

import './assets/style/style.scss'

// const ENDOPOINT = 'http://localhost:1717'
function App() {
  // const token = useSelector(state => state.auth.token)
  // const profile = useSelector(state => state.auth.profile)
  //
  // const dispatch = useDispatch()

  // React.useEffect(() => {
  //   if (token) {
  //     fetch(`${ENDOPOINT}/profile`, {
  //       method: 'GET',
  //       headers: { 'X-Auth': `${token}` },
  //     })
  //       .then((response) => response.json())
  //       .then(({ data }) => {
  //         dispatch(getProfileAction({...data}))
  //       })
  //   }
  // }, [])
  // useEffect(() => {
  //
  //   fetch('https://localhost:3004/', {
  //     method: "GET",
  //     headers: {'Content-Type': 'application/json'},
  //   })
  //     .then(res => {
  //       console.log(res)
  //     })
  // }, [])

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={MainPage} exact/>
        <Route path='/profile' component={ProfilePage} exact/>
        <Route path ='/profile/settings' component = {ProfilePage} exact/>
        <Route path ='/profile/card' component = {ProfilePage} exact/>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
