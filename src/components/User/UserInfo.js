import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {getName, getPhone} from "../../store/actions/auth";

const UserInfo = () => {
  const dispatch = useDispatch()
  const name = useSelector(state => state.auth.name)
  const phone = useSelector(state => state.auth.phone)
  return (
    <section className='block'>
      <div className='blockUser'>
        <div className='userInfo'>
          <div className='avatar'></div>
          <div className='name'>{name}</div><br />
          <div className='name'>{phone}</div>
        </div>
        <div className='results'>
          <div className='item'>
            <p>0</p>
            <p>mmr</p>
          </div>
          <div className='item'>
            <p>0</p>
            <p>Подписчиков</p>
          </div>
          <div className='item'>
            <p>0</p>
            <p>Подписки</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UserInfo