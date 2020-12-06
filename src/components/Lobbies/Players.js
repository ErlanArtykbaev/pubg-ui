import React from 'react'
import {useSelector, useDispatch} from 'react-redux'

import { useTranslation } from 'react-i18next'

const Players = () => {
  const { t } = useTranslation()

  const {players, isLoadingPlayers} = useSelector(state => ({
    players: state.lobbies.players,
    isLoadingPlayers: state.lobbies.isLoading,
  }))

  return (
    <div className='lobby-right players-list'>
      <h2 className='title'>{t('Events.6')}</h2>
      {
        isLoadingPlayers ? <div className='players-loading'></div> :
          players ? players.map((item, index) => {
            return <div className='player' key={item.id}> {index + 1}. {item.name}</div>
          }) : null
      }
    </div>
  )
}

export default Players