import React, { useState } from 'react'
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonCardContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonList,
  IonItem,
  IonButton,
  IonImg,
  IonIcon,
  IonInput,
  useIonToast,
} from '@ionic/react'
import {
  keyOutline,
  personAddOutline,
  mailOutline,
  lockClosedOutline,
} from 'ionicons/icons'
import './SignUp.css'

import { Link, useHistory } from 'react-router-dom'
import Menu from '../../components/Menu/Menu'
import MenuButton from '../../components/Menu/MenuButton'
import coverImg from '../../assets/Profile/cover-img.jpg'
import { useAuth } from '../../contexts/AuthContext'

const SignUp = () => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [loading, setLoading] = useState(false)
  const [error, clearError] = useIonToast()
  const history = useHistory()

  const { signup } = useAuth()

  const handleSignUp = async (event) => {
    try {
      setLoading(true)
      await signup(email, password)
      history.push('/login')
    } catch (err) {
      console.log('Failed to Sign Up.')

      if (err.message.includes('"email" must be a valid string')) {
        error('Email not valid', 3000)
      } else if (err.message.includes('"password" must be a valid string')) {
        error('Password not valid', 3000)
      } else {
        error(err.message, 3000)
      }
    }
    setLoading(false)
  }

  const changeEmail = (event) => {
    setEmail(event.detail.value)
  }

  const changePassword = (event) => {
    setPassword(event.detail.value)
  }

  return (
    <>
      <IonPage>
        <Menu />
        <IonHeader>
          <IonToolbar>
            <MenuButton />
            <IonTitle>Sign Up</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonGrid>
            <IonCard>
              <IonCardHeader>
                <IonImg src={coverImg} />
                <IonCardTitle className='cardTitle'>
                  Sign Up below to access my CV
                </IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <IonList>
                  <IonItem>
                    <IonCardSubtitle className='cardSub'>
                      Fill in your Sign Up credentials below
                    </IonCardSubtitle>
                  </IonItem>

                  <IonItem>
                    <IonIcon src={mailOutline} />
                    <IonInput
                      placeholder='Set Email'
                      onIonChange={changeEmail}
                    />
                  </IonItem>

                  <IonItem>
                    <IonIcon src={lockClosedOutline} />
                    <IonInput
                      placeholder='Set Password'
                      onIonChange={changePassword}
                    />
                  </IonItem>

                  <IonButton
                    expand='block'
                    onClick={handleSignUp}
                    disabled={loading}
                  >
                    <IonIcon src={personAddOutline} />
                    Sign Up
                  </IonButton>

                  <IonItem>
                    <IonCardSubtitle className='cardSub'>
                      Or if you already registered go back to Login
                    </IonCardSubtitle>
                  </IonItem>

                  <Link to='/login'>
                    <IonButton expand='block' disabled={loading}>
                      <IonIcon src={keyOutline} />
                      Return to Login
                    </IonButton>
                  </Link>
                </IonList>
              </IonCardContent>
            </IonCard>
          </IonGrid>
        </IonContent>
      </IonPage>
    </>
  )
}

export default SignUp
