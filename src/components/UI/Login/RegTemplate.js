import React, {useState} from 'react'
import Register from './Register'
import Phone from './Phone'
import Activate from './Activate'
import {useDispatch} from "react-redux"
import Header from './Header'
import {showRegister} from "../../../store/actions/modalRegister";
import axios from "../../../axios/axios";

const RegTemplate = () => {
  const [phone, setPhone] = React.useState('')
  const [showPhone, setShowPhone] = React.useState(true)
  const [showActivate, setShowActivate] = React.useState(false)
  const [showRegisterContainer, setShowRegisterContainer] = useState(false)
  const dispatch = useDispatch()

  const handlePhone = (body) => {
    axios.post('/validate/', body)
      .then(() => {
        setPhone(body.phone)
        setShowActivate(true)
        setShowPhone(false)
      })
      .catch(e => console.log(e))
      setPhone(body.phone)
      setShowActivate(true)
      setShowPhone(false)
  }

  const handleActivate = (body) => {
    axios.post('/verify/', body)
      .then((response) => {
        console.log('res', response)
        console.log(body)
        setShowActivate(false)
        setShowRegisterContainer(true)
      })
      .catch(e => console.log(e))
  }

  const handleRegister = (body) => {
    console.log('register')
    axios.post('/register/', body)
      .then(response => {
        dispatch(showRegister())
        console.log(response)
      })
  }

  const dispatchShowRegister = () => {
    dispatch(showRegister())
  }

  return (
    <div className='login'>
      <Header title='Регистрация' class='reg' close={dispatchShowRegister}/>
      {
        showPhone ? (
          <Phone handlePhone={handlePhone}/>
        ) : showActivate ? (
          <Activate handleActivate={handleActivate} phone={phone}/>
        ) : showRegisterContainer ?
          <Register handleRegister={handleRegister} phone={phone}/> : null
      }
    </div>
  )
}

export default RegTemplate

