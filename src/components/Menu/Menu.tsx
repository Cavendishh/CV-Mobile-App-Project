import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import {
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonIcon,
  IonButton,
} from '@ionic/react'
import {
  libraryOutline,
  logInOutline,
  logOutOutline,
  barChartOutline,
  accessibilityOutline,
  newspaperOutline,
  folderOpenOutline,
  chatboxOutline,
} from 'ionicons/icons'
import { useAuth } from '../../contexts/AuthContext'

const Menu = () => {
  const [error, setError] = useState('')
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  const handleLogout = async () => {
    setError('')
    try {
      await logout()
      history.push('/login')
    } catch (err) {
      console.log('Something went wrong with Log Out. ', err)
    }
  }

  return (
    <>
      <IonMenu side='start' contentId='content'>
        <IonHeader>
          <IonToolbar color='primary'>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent id='content'>
          <IonList>
            <IonItem>
              <IonIcon icon={accessibilityOutline} />
              <Link to='/profile'>
                <IonButton fill='clear'>Profile</IonButton>
              </Link>
            </IonItem>

            <IonItem>
              <IonIcon icon={libraryOutline} />
              <Link to='/education'>
                <IonButton fill='clear'>Education</IonButton>
              </Link>
            </IonItem>

            <IonItem>
              <IonIcon icon={newspaperOutline} />
              <Link to='/experience'>
                <IonButton fill='clear'>Experience</IonButton>
              </Link>
            </IonItem>

            <IonItem>
              <IonIcon icon={barChartOutline} />
              <Link to='/skills'>
                <IonButton fill='clear'>Skills</IonButton>
              </Link>
            </IonItem>

            <IonItem>
              <IonIcon icon={folderOpenOutline} />
              <Link to='/projects'>
                <IonButton fill='clear'>Projects</IonButton>
              </Link>
            </IonItem>

            <IonItem>
              <IonIcon icon={chatboxOutline} />
              <Link to='/contact'>
                <IonButton fill='clear'>Contact</IonButton>
              </Link>
            </IonItem>

            <IonItem>
              <IonIcon icon={logInOutline} />
              <Link to='/login'>
                <IonButton fill='clear'>Login</IonButton>
              </Link>
            </IonItem>

            <IonItem>
              <IonIcon icon={logOutOutline} />
              <Link to='/signup'>
                <IonButton fill='clear'>Sign Up</IonButton>
              </Link>
            </IonItem>

            <IonItem>
              <IonIcon icon={logOutOutline} />
              <IonButton fill='clear' onClick={handleLogout}>
                Log Out
              </IonButton>
            </IonItem>
          </IonList>
        </IonContent>
      </IonMenu>
    </>
  )
}

export default Menu
