import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik';
import Header from './Header'
import * as Yup from 'yup';
import {useDispatch} from "react-redux";
import {showLogin} from "../../../store/actions/modalLogin";
import {setToken, setUser} from "../../../store/actions/auth";
import {logIn} from "../../../store/actions/logInOut";
import {showRegister} from "../../../store/actions/modalRegister";

const Login = (props) => {
  const dispatch = useDispatch()
  const handleRegister = (body) => {
    fetch(`http://127.0.0.1:8000/register/`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(body),
    })
  }
  const handleLogin = (body) => {
    fetch('http://127.0.0.1:8000/login/', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(body),
    })
      .then((response) => {
        return response.json()
      })
      .then( data => {
        console.log(data)
        // dispatch(setUser({...data}))
        // dispatch(setToken(data.access_token))
        // dispatch(logIn())
      })
      .catch(e => {
        console.log( e.message )
      })
  }
  return (
    <div className='login'>
      <Header title={props.title} bg={props.bg} close={props.close}/>
      <Formik
        initialValues={
          props.title === 'Регистрация' ?
            {
              login: '',
              email: '',
              password: '',
              confirmPassword: '',
            } :
            {
              login: '',
              email: '',
              password: '',
            }
        }
        validationSchema={
          props.title === 'Вход' ?
            Yup.object().shape({
              phone: Yup.string()
                .required('Введите никнейм!'),
              name: Yup.string()
                .required('Введите почту!'),
              password: Yup.string()
                .required('Введите пароль!'),
            }) :
            Yup.object().shape({
              phone: Yup.string()
                .required('Введите никнейм!'),
              name: Yup.string()
                .required('Введите почту!'),
              password: Yup.string()
                .required('Введите пароль!'),
              confirmPassword: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Пароли должны совпадать')
                .required('Подтвердите пароль!'),
            })
        }
        onSubmit={
          props.title === 'Регистрация' ?
            fields => {
              handleRegister(fields)
              dispatch(showRegister())
            }
            :
            fields => {
              handleLogin(fields)
              dispatch(showLogin())
            }
        }
      >
        {() => (
          <Form className='loginForm'>
            <Field type="text" name="phone" placeholder='phone' />
            <ErrorMessage name="name" component="div" className='error'/>
            <Field name="name" type="text" placeholder='name'/>
            <ErrorMessage name="name" component="div" className='error'/>
            <Field type="password" name="password" placeholder='Пароль'/>
            <ErrorMessage name="password" component="div" className='error'/>
            {
              props.title === 'Регистрация' ?
                <div>
                  <Field type="password" name="confirmPassword" placeholder='Повторите пароль'/>
                  <ErrorMessage name="confirmPassword" component="div" className='error'/>
                </div>
                : ''
            }
            <button type="submit" className='loginFormBtn' style={{background: props.bg}}>
              {props.title}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default Login
