import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {NavLink} from 'react-router-dom'

import { setLoading} from '../../store/actions/lobbies'

import axios from '../../axios/axios'
import Timer from '../UI/Timer'
import Players from './Players'

import {getDate} from "../../axios/dateFormatter";
import {loading} from "../../store/actions/isLoading";

const LobbyContainer = (props) => {
  const dispatch = useDispatch()
  const [isPlaying, setIsPlaying] = useState(false)
  const [password, setPassword] = useState(false)

  const {myProfile, isLoading} = useSelector(state => ({
    myProfile: state.profile.myProfile,
    isLoading: state.isLoading
  }))

  const isUserIsPlaying = () => {
    for (let i = 0; i < props.players.length; i++) {
      if (props.players[i].id === myProfile.pk) {
        return true
      }
    }
    return false
  }

  const enterGame = () => {
    axios.post('/lobby/users/', {rates: props.id, user: myProfile.pk, balance: myProfile.balance})
      .then(() => {
        dispatch(setLoading(true))
        // setIsPlaying(true)
      })
      .catch(e => console.log(e))
  }

  const showPass = () => {
    console.log('start of function')
    for (let i = 0; i < props.players.length; i++) {
      if (props.players[i].id === myProfile.pk) {
        setPassword(true)
        console.log('set pass')
      }
      console.log('player:', props.players[i])
    }
  }

  useEffect(() => {
    if(props.players){
      setIsPlaying(isUserIsPlaying())
    }
  }, [props.players, isLoading])

  return (
    <div className='container wrapper'>
      <section className='lobby'>
        <div className='lobby-left'>
          <img src={`${props.image}`} alt='#' className='avatar'/>
          <div className='lobby-content'>
            <div className='map'>Карта: {props.map}</div>
            <div className='date'>{getDate(props.date)}</div>
            <div className='name'>{props.name}</div>
            <div className='rule'>Я соглашаюсь с <span>
                    <NavLink
                      to={`/rules`}
                      exact
                    >
                        Правилами игры
                    </NavLink>
              </span></div>
            <div className='price'>Цена участие: <span>{props.priceGame} сомов</span></div>
            <div className='price'>Цена 1 убийства: <span>{props.priceKill} сомов</span></div>
            {props.date !== '0000-00-00T00:00:00+06:00' ? <Timer date={props.date}/> : ' '}
            {isPlaying ? null : <button className='lobby-content__btn btn' onClick={enterGame}>Вступить</button> }
            {isPlaying ? <button className='lobby-content__btn btn' onClick={showPass}>Пароль</button> : null}
          </div>
        </div>
        <Players id={props.lobby_id}/>
      </section>
      {password === true ?
        <div className='password-block'>
          <div>Ваш код для участия в игре</div>
          <div className='password'>{props.pass}</div>
        </div> : null}
    </div>
  )
}

export default LobbyContainer