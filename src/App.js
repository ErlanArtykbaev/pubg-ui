import React, {useEffect} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'

import { fetchProfileActionCreator} from './store/actions/profile'

import HomePage from './pages/Home'
import LobbiesPage from './pages/Lobbies'
import ProfilePage from './pages/Profile'
import LobbyPage from './pages/LobbyPage'
import PrivacyPage from './pages/Privacy'
import TermsPage from './pages/Terms'
import RulesPage from './pages/Rules'
import RatesPage from "./pages/Rates"
import RefundPage from "./pages/Refund"
import SignUpPage from './pages/SignUp'
import PageNotFound from "./pages/404Page"
import SupportPage from "./pages/Supports"
import Pay24Page from './pages/Pay24'
import InstructionPage from './pages/Instruction'

import './assets/style/style.scss'
import PasswordSettings from "./pages/PasswordSettings";

function App() {
  const dispatch = useDispatch()

  const { token } = useSelector(state => ({
    token: state.profile.token,
  }))

  useEffect(() => {
    if (token) {
      dispatch(fetchProfileActionCreator())
    }
  }, [token]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={HomePage} exact/>
        <Route path='/tournaments' component={LobbiesPage} exact/>
        <Route path='/lobby/:id' component = {LobbyPage}/>
        <Route path='/privacy' component = {PrivacyPage}/>
        <Route path='/terms' component = {TermsPage}/>
        <Route path='/rules' component = {RulesPage}/>
        <Route path='/refund' component = {RefundPage}/>
        <Route path='/rates' component = {RatesPage} />
        <Route path='/signUp' component = {SignUpPage} />
        <Route path='/instruction' component = {InstructionPage} />
        <Route path ='/change-password' component ={PasswordSettings} exact/>
        <Route path ='/support' component ={SupportPage} exact/>
        <Route path='/profile' component={ProfilePage} exact/>
        <Route path ='/profile/cardIn' component = {ProfilePage} exact/>
        <Route path ='/profile/cardIn/pay24' component = {Pay24Page} exact/>
        <Route path ='/profile/cardOut' component = {ProfilePage} exact/>
        <Route path ='/profile/createLobbie' component = {ProfilePage} exact />
        <Route path='/profile/rating' component={ProfilePage} exact />
        <Route path='/profile/settings' component={ProfilePage} exact />
        <Route component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
