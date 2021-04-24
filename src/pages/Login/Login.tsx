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
import { Link } from 'react-router-dom'
import './Login.css'
import Menu from '../../components/Menu/Menu'
import MenuButton from '../../components/Menu/MenuButton'
import coverImg from '../../assets/Profile/cover-img.jpg'

const Login = () => {
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
                    <IonInput
                      placeholder='Email'
                      onIonChange={(e) =>
                        console.log('Email: ', e.detail.value)
                      }
                    />
                  </IonItem>

                  <IonItem>
                    <IonIcon src={lockClosedOutline} />
                    <IonInput
                      placeholder='Password'
                      onIonChange={(e) =>
                        console.log('Password: ', e.detail.value)
                      }
                    />
                  </IonItem>

                  <IonButton expand='block'>
                    <IonIcon src={keyOutline} />
                    Login
                  </IonButton>

                  <IonItem>
                    <IonCardSubtitle className='cardSub'>
                      Or Sign up here first
                    </IonCardSubtitle>
                  </IonItem>

                  <Link to='/signup'>
                    <IonButton expand='block'>
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
