import React from 'react'
import { useTranslation } from 'react-i18next'

// import instr1 from '../../assets/img/instr-1.png'
// import instr2 from '../../assets/img/instr-2.png'
// import instr3 from '../../assets/img/instr-3.png'
// import instr4 from '../../assets/img/instr-4.png'
import instr5 from '../../assets/img/instr-5.png'
// import instr6 from '../../assets/img/instr-6.png'

import mobReg1 from '../../assets/img/mobile_register1.jpg'
import mobReg2 from '../../assets/img/mobile_register2.jpg'
import mobReg3 from '../../assets/img/mobile_register3.jpg'
import mobPubg1 from '../../assets/img/pubg-mobile-1.PNG'
import mobPubg2 from '../../assets/img/pubg-mobile-2.PNG'
import mobPubg3 from '../../assets/img/pubg-mobile-3.PNG'

const Instruction = () => {
  const { t } = useTranslation()
  return (
    <section className='instruction container'>
      <h1>{t('Home.instruction.11')}</h1>
      <div className='instr-item'>
        <div className='instr-text'>{t('Home.instruction.13')}</div>
        <img src={mobReg1} alt='instr-1' className='instr-photo'/>
      </div>
      <div className='instr-item'>
        <div className='instr-text'>{t('Home.instruction.14')}</div>
        <img src={mobReg2} alt='instr-1' className='instr-photo'/>
      </div>
      <div className='instr-item'>
        <div className='instr-text'>{t('Home.instruction.18')}</div>
        <img src={mobReg3} alt='instr-1' className='instr-photo'/>
      </div>
      <div className='instr-item'>
        <div className='instr-text'>{t('Home.instruction.9')}</div>
        <img src={instr5} alt='instr-1' className='instr-photo'/>
      </div>
      <h1>{t('Home.instruction.12')}</h1>
      <div className='instr-item'>
        <div className='instr-text'>{t('Home.instruction.15')}</div>
        <img src={mobPubg1} alt='instr-1' className='instr-photo'/>
      </div>
      <div className='instr-item'>
        <div className='instr-text'>{t('Home.instruction.16')}</div>
        <img src={mobPubg2} alt='instr-1' className='instr-photo'/>
      </div>
      <div className='instr-item'>
        <div className='instr-text'>{t('Home.instruction.17')}</div>
        <img src={mobPubg3} alt='instr-1' className='instr-photo'/>
      </div>
      {/*<h1>{t('Home.instruction.4')}</h1>*/}
      {/*<div className='instr-item'>*/}
      {/*  <div className='instr-text'>{t('Home.instruction.5')}</div>*/}
      {/*  <img src={instr1} alt='instr-1' className='instr-photo'/>*/}
      {/*</div>*/}
      {/*<div className='instr-item'>*/}
      {/*  <div className='instr-text'>{t('Home.instruction.6')}</div>*/}
      {/*  <img src={instr2} alt='instr-1' className='instr-photo'/>*/}
      {/*</div>*/}
      {/*<div className='instr-item'>*/}
      {/*  <div className='instr-text'>{t('Home.instruction.7')}</div>*/}
      {/*  <img src={instr3} alt='instr-1' className='instr-photo'/>*/}
      {/*</div>*/}
      {/*<div className='instr-item'>*/}
      {/*  <div className='instr-text'>{t('Home.instruction.8')}</div>*/}
      {/*  <img src={instr4} alt='instr-1' className='instr-photo'/>*/}
      {/*</div>*/}
      {/*<div className='instr-item'>*/}
      {/*  <div className='instr-text'>{t('Home.instruction.9')}</div>*/}
      {/*  <img src={instr5} alt='instr-1' className='instr-photo'/>*/}
      {/*</div>*/}
      {/*<div className='instr-item'>*/}
      {/*  <div className='instr-text'>{t('Home.instruction.10')}</div>*/}
      {/*  <img src={instr6} alt='instr-1' className='instr-photo instr-photo--players'/>*/}
      {/*</div>*/}
    </section>
  )
}

export default Instruction
