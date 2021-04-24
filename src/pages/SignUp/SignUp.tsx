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
  const [error, setError] = useState('')
  const history = useHistory()

  const { signup } = useAuth()

  const handleSignUp = async (event) => {
    event.preventDefault()

    try {
      setLoading(true)
      setError('')
      await signup(email, password)
      history.push('/login')
    } catch (err) {
      console.log('Failed to Sing Up. Error: ', err)
      setError(err)
    }
    setLoading(false)
  }

  const changeEmail = (event) => {
    setEmail(event.detail.value)
  }

  const changePassword = (event) => {
    setPassword(event.detail.value)
  }

  email && console.log('Email: ', email)
  password && console.log('Password: ', password)

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
                  {error && (
                    <h1>
                      <b>Something went wrong</b>
                    </h1>
                  )}
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
                    <IonButton expand='block'>
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
