import { useState } from 'react'
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
import { mailOutline, lockClosedOutline } from 'ionicons/icons'
import { Link, useHistory } from 'react-router-dom'
import './Login.css'
import Menu from '../../components/Menu/Menu'
import MenuButton from '../../components/Menu/MenuButton'
import coverImg from '../../assets/Login/software-engineer.jpg'
import { useAuth } from '../../contexts/AuthContext'

const Login = () => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [loading, setLoading] = useState(false)
  const [error, clearError] = useIonToast()
  const history = useHistory()

  const { login } = useAuth()

  const handleLogin = async () => {
    try {
      setLoading(true)
      await login(email, password)
      history.push('/profile')
    } catch (err) {
      console.log('Failed to Login.')

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
            <IonTitle>Login</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonGrid className='container'>
            <IonCard>
              <IonCardHeader>
                <IonImg src={coverImg} />
                <IonCardTitle className='cardTitle'>Log In</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <IonList>
                  <IonItem>
                    <IonIcon src={mailOutline} className='icon' />
                    <IonInput placeholder='Email' onIonChange={changeEmail} />
                  </IonItem>

                  <IonItem className='marginBottom'>
                    <IonIcon src={lockClosedOutline} className='icon' />
                    <IonInput
                      placeholder='Password'
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

                  <IonItem className='cardSub'>
                    <IonCardSubtitle className='cardSub'>
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
