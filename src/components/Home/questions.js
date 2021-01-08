import React from 'react'
import Chevron from '../../assets/icons/chevron'
import { useTranslation } from 'react-i18next'

const Questions = () => {
  const [answer1, setAnswer1] = React.useState(false)
  const [answer2, setAnswer2] = React.useState(false)
  const [answer3, setAnswer3] = React.useState(false)
  const [answer4, setAnswer4] = React.useState(false)

  const { t } = useTranslation()

  return (
    <section className='questions container' data-aos='fade-right'>
      <h1>{t('Home.questions.1')}</h1>
      <div className='item'>
        <div className='question' onClick={() => setAnswer1(!answer1)}><Chevron answer={answer1}/>{t('Home.questions.2')}?</div>
        {answer1 ?<p className='answer'>{t('Home.questions.3')}</p> : null}
      </div>
      <div className='item'>
        <div className='question' onClick={() => setAnswer2(!answer2)}><Chevron answer={answer2}/>{t('Home.questions.4')}</div>
        {answer2 ?<p className='answer'>{t('Home.questions.5')}</p> : null}
      </div>
      <div className='item'>
        <div className='question' onClick={() => setAnswer3(!answer3)}><Chevron answer={answer3}/>{t('Home.questions.6')}</div>
        {answer3 ?<p className='answer'>{t('Home.questions.7')}</p> : null}
      </div>
      <div className='item'>
        <div className='question' onClick={() => setAnswer4(!answer4)}><Chevron answer={answer4}/>{t('Home.questions.8')}</div>
        {answer4 ?<p className='answer'>{t('Home.questions.9')}</p> : null}
      </div>
    </section>
  )
}

export default Questions

