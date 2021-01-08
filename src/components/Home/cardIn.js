import React from 'react'
import {NavLink} from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const CardIn = ({text, state}) => {
  const {t} = useTranslation()

  return (
    <section className='cardIn container' data-aos='fade-left'>
      <h1>
        {
          state === 'Играть' ? 
            t('Home.card.1') :
            t('Home.instruction.2')
        }
      </h1>
      <p>{text}</p>
      <div>
          {
            state === 'Играть' ? 
            <NavLink
              to='/tournaments'
              className='home-btn'
              exact
            >
            {t('Home.card.3')}
            </NavLink> :
            <NavLink
              to='/instruction'
              className='home-btn'
              exact
            >
            {t('Home.instruction.1')}
            </NavLink>
          }
        </div>
    </section>
  )
}

export default CardIn
