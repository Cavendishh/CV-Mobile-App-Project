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
import './SignUp.css'
import { Link, useHistory } from 'react-router-dom'
import coverImg from '../../assets/Login/software-engineer.png'
import { useAuth } from '../../contexts/AuthContext'

const SignUp = () => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [loading, setLoading] = useState(false)
  const [error, clearError] = useIonToast()
  const history = useHistory()

  // Brings sign up function for handleSingUp
  const { signup } = useAuth()

  // Handles login with firebase
  const handleSignUp = async () => {
    try {
      // Sets loading (disabled buttons)
      // Waits for firebase to respond before redirecting to Profile
      setLoading(true)
      await signup(email, password)
      history.push('/profile')
    } catch (err) {
      // If login unsuccesfull give popup feedback to user for 3 seconds
      console.log('Failed to Sign Up.')

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

  // Keeps track of email and password field
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
                <IonCardTitle className='titleMarginFont'>Sign Up</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <IonList>
                  <IonItem>
                    <IonIcon src={mailOutline} className='iconPaddingRight' />
                    <IonInput
                      placeholder='Set Email'
                      onIonChange={changeEmail}
                    />
                  </IonItem>

                  <IonItem>
                    <IonIcon
                      src={lockClosedOutline}
                      className='iconPaddingRight'
                    />
                    <IonInput
                      placeholder='Set Password'
                      onIonChange={changePassword}
                      type='password'
                    />
                  </IonItem>

                  <IonButton
                    expand='block'
                    onClick={handleSignUp}
                    disabled={loading}
                    color='secondary'
                  >
                    Sign Up
                  </IonButton>

                  <IonItem>
                    <IonCardSubtitle className='cardSubCenter'>
                      Or if you already registered
                    </IonCardSubtitle>
                  </IonItem>

                  <Link to='/login'>
                    <IonButton expand='block' disabled={loading}>
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
