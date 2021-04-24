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

  const { signup } = useAuth()

  const handleSignUp = async () => {
    try {
      setLoading(true)
      await signup(email, password)
      history.push('/login')
    } catch (err) {
      console.log('Failed to Sign Up.')

      if (err.message.includes('"email" must be a valid string')) {
        error('Email is not valid', 3000)
      } else if (err.message.includes('"password" must be a valid string')) {
        error('Password is not valid', 3000)
      } else {
        error(err.message, 3000)
      }
    }
    setLoading(false)
  }

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
