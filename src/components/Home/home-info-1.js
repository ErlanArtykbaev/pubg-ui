import React from 'react'
import Phone from '../../assets/img/phone.png'
import ImgXm from '../../assets/icons/XMLID.svg'
import ImgShiet from '../../assets/icons/shiet.svg'
import ImgHeadPhone from '../../assets/icons/headphones.svg'

import { useTranslation } from 'react-i18next'


const HomeInfo1 = () => {
  const { t } = useTranslation()

  return (
    <section className='home-info--1 container'>
      <h1 className='title'>{t('Home.info-1.1')}</h1>
      <div className='info-content' data-aos='fade-right'>
        <div className='info-content--left'>
          <div>
            <div className='info-text'>
              <img src={ImgShiet} alt='#' />
              <div>{t('Home.info-1.2')}</div>
              <p>
              {t('Home.info-1.3')}
              </p>
            </div>
            <div className='info-text'>
              <img src={ImgXm} alt='#' />
              <div>{t('Home.info-1.4')}</div>
              <p>
              {t('Home.info-1.5')}    
              </p>
            </div>
            <div className='info-text'>
              <img src={ImgHeadPhone} alt='#' />
              <div>{t('Home.info-1.6')}</div>
              <p>
              {t('Home.info-1.7')}    
              </p>
            </div>
          </div>
        </div>
        <img src={Phone} alt='phone' className='phone'/>
      </div>
    </section>
  )
}

export default HomeInfo1
