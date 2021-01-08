import React from 'react'

import Phone from '../../assets/img/phone-2.png'
import ImgShiet from '../../assets/icons/shiet.svg'
import ImgTrend from '../../assets/icons/trending-up.svg'
import ImgUsers from '../../assets/icons/user-plus.svg'
import ImgEdit from '../../assets/icons/edit-3.svg'

import { useTranslation } from 'react-i18next'

const HomeInfo2 = () => {
  const { t } = useTranslation()

  return (
    <section className='info-content-2 container' data-aos='fade-right'>
      <h1>{t('Home.info-2.1')}</h1>
      <div className='content'>
        <div>
          <img src={Phone} alt='#' className='phone'/>
          <div className='text-item rate-mobile'>
            <img src={ImgTrend} alt='#' />
            <div>{t('Home.info-2.8')}</div>
            <p>
            {t('Home.info-2.9')}   
            </p>
          </div>
        </div>
        <div className='info-text'>
          <div className='text-item'>
            <img src={ImgEdit} alt='#'/>
            <div>{t('Home.info-2.2')}</div>
            <p>
            {t('Home.info-2.3')}
            </p>
          </div>
          <div className='text-item'>
            <img src={ImgUsers} alt='#' />
            <div>{t('Home.info-2.4')}</div>
            <p>
            {t('Home.info-2.5')}
            </p>
          </div>
          <div className='text-item'>
            <img src={ImgShiet} alt='#' />
            <div>{t('Home.info-2.6')}</div>
            <p>
            {t('Home.info-2.7')}
            </p>
          </div>
          <div className='text-item rate'>
            <img src={ImgTrend} alt='#' />
            <div>{t('Home.info-2.8')}</div>
            <p>
            {t('Home.info-2.9')}  
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeInfo2
