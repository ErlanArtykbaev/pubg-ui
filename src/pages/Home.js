import React from 'react'
import PageTemplate from '../components/templates/PageTemplate'

import HeaderContent from '../components/Home/header-content'
import HomeInfo1 from '../components/Home/home-info-1'
import HomeInfo2 from '../components/Home/home-info-2'
import CardIn from '../components/Home/cardIn'
import Questions from '../components/Home/questions'
import Aos from 'aos'
import 'aos/dist/aos.css'

import { useTranslation } from 'react-i18next'

const Home = () => {
  const { t } = useTranslation()

  React.useEffect(() => {
    window.scrollTo(0, 0)
		Aos.init({duration: 2000})
  }, [])
  return (
    <PageTemplate>
      <div className='home'>
        <HeaderContent />
        <HomeInfo1 />
        <CardIn text={t('Home.instruction.3')} state='Инструкция'/>
        <HomeInfo2 />
        <Questions />
        <CardIn text={t('Home.card.4')} state='Играть'/>
      </div>
    </PageTemplate>
  )
}

export default Home
