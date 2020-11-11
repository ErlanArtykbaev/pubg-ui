import React from 'react'
import { useSelector} from 'react-redux'
import PubgPhoto from '../../assets/img/pubg.png'

const ENDOPOINT = 'http://localhost:1717'


const LobbyContainer = (props) => {
  const { myProfile } = useSelector(state => ({
    myProfile: state.profile.myProfile,
  }))

  return (
    <div className='container'>
      <section className='lobby'>
        <img src={PubgPhoto} alt='#' className='lobby-img'/>
        <div className='lobby-content'>
          <div className='lobby-content__mode'>Карта: {props.name_mode}</div>
          <div className='lobby-content__date'>{props.date} {props.time}</div>
          <div className='lobby-content__title'>{props.title}</div>
          <div className='lobby-content__price--game'>Цена участия: {props.priceGame} сомов</div>
          <div className='lobby-content__price--kill'>Цена 1 убийства: {props.priceKill} сомов</div>
          <button className='lobby-content__btn'>Вступить</button>
        </div>
      </section>
    </div>
  )
}

export default LobbyContainer