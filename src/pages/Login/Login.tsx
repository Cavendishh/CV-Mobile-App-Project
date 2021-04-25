// Designer, Developer, and Author - Janne Kavander
// Student number 1903048

import { useState } from 'react'
import {
  IonContent,
  IonPage,
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
import { mailOutline, lockClosedOutline } from 'ionicons/icons'
import './Login.css'
import { Link, useHistory } from 'react-router-dom'
import coverImg from '../../assets/Login/software-engineer.png'
import { useAuth } from '../../contexts/AuthContext'

const Login = () => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [loading, setLoading] = useState(false)
  const [error, clearError] = useIonToast()
  const history = useHistory()

  // Brings login function for handleLogin
  const { login } = useAuth()

  // Handles login with firebase
  const handleLogin = async () => {
    try {
      // Sets loading (disabled buttons)
      // Waits for firebase to respond before redirecting to Profile
      setLoading(true)
      await login(email, password)
      history.push('/profile')
    } catch (err) {
      // If login unsuccesfull give popup feedback to user for 3 seconds
      console.log('Failed to Login.')

      if (err.message.includes('"email" must be a valid string')) {
        error('Email is not valid', 3000)
      } else if (err.message.includes('"password" must be a valid string')) {
        error('Password is not valid', 3000)
      } else {
        error(err.message, 3000)
      }
    }
    // Buttons are useable again in case request fails
    setLoading(false)
  }

  // Sets loading (disabled buttons)
  // Waits for firebase to respond before redirecting to Profile
  const changeEmail = (event) => setEmail(event.detail.value)
  const changePassword = (event) => setPassword(event.detail.value)

  return (
    <>
      <IonPage>
        <IonContent>
          <IonGrid className='container'>
            <IonCard>
              <IonCardHeader>
                <IonImg src={coverImg} alt='Avatar' />
                <IonCardTitle className='titleMarginFont'>Log In</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <IonList>
                  <IonItem>
                    <IonIcon src={mailOutline} className='iconPaddingRight' />
                    <IonInput placeholder='Email' onIonChange={changeEmail} />
                  </IonItem>

                  <IonItem>
                    <IonIcon
                      src={lockClosedOutline}
                      className='iconPaddingRight'
                    />
                    <IonInput
                      placeholder='Password'
                      type='password'
                      onIonChange={changePassword}
                    />
                  </IonItem>

                  <IonButton
                    expand='block'
                    disabled={loading}
                    onClick={handleLogin}
                    color='secondary'
                  >
                    Login
                  </IonButton>

                  <IonItem>
                    <IonCardSubtitle className='cardSubCenter'>
                      Or Sign up here first
                    </IonCardSubtitle>
                  </IonItem>

                  <Link to='/signup'>
                    <IonButton expand='block' disabled={loading}>
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
