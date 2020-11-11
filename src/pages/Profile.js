import React from 'react'
import { Route } from 'react-router-dom'
import PageTemplate from '../components/templates/PageTemplate'
import Sidebar from '../components/layout/Sidebar'
import UserRating from '../components/User/UserRating'
import CardIn from '../components/Card/CardIn'
import CardOut from '../components/Card/CardOut'

const Profile = () => {
  return (
    <PageTemplate class='footer-profile'>
      <div className='container profile'>
        <Sidebar />
        <div className='content'>
          <Route path='/profile' exact>
            <UserRating />
          </Route>
          <Route path='/profile/settings' exact>
            Настройки
          </Route>
          <CardIn />
          <CardOut />
        </div>
      </div>
    </PageTemplate>
  )
}

export default Profile