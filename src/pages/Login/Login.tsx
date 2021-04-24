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
import { Link, useHistory } from 'react-router-dom'
import './Login.css'
import Menu from '../../components/Menu/Menu'
import MenuButton from '../../components/Menu/MenuButton'
import coverImg from '../../assets/Profile/cover-img.jpg'
import { useAuth } from '../../contexts/AuthContext'

const Login = () => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const history = useHistory()

  const { login } = useAuth()

  const handleLogin = async (event) => {
    event.preventDefault()

    try {
      setLoading(true)
      setError('')
      await login(email, password)
      history.push('/profile')
    } catch (err) {
      console.log('Failed to Login. Error: ', err)
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
            <IonTitle>Login</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonGrid>
            <IonCard>
              <IonCardHeader>
                <IonImg src={coverImg} />
                <IonCardTitle className='cardTitle'>
                  Welcome to my CV!
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
                      Fill in your Log In credentials below
                    </IonCardSubtitle>
                  </IonItem>

                  <IonItem>
                    <IonIcon src={mailOutline} />
                    <IonInput placeholder='Email' onIonChange={changeEmail} />
                  </IonItem>

                  <IonItem>
                    <IonIcon src={lockClosedOutline} />
                    <IonInput
                      placeholder='Password'
                      onIonChange={changePassword}
                    />
                  </IonItem>

                  <IonButton
                    expand='block'
                    disabled={loading}
                    onClick={handleLogin}
                  >
                    <IonIcon src={keyOutline} />
                    Login
                  </IonButton>

                  <IonItem>
                    <IonCardSubtitle className='cardSub'>
                      Or Sign up here first
                    </IonCardSubtitle>
                  </IonItem>

                  <Link to='/signup'>
                    <IonButton expand='block' disabled={loading}>
                      <IonIcon src={personAddOutline} />
                      Sign Up
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

export default Login
