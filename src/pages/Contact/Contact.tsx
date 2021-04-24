import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonText,
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
  IonList,
  IonCardContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonButton,
  IonIcon,
} from '@ionic/react'
import {
  logoGithub,
  logoLinkedin,
  logoStackoverflow,
  mailOutline,
  locationOutline,
} from 'ionicons/icons'
import './Contact.css'
import Menu from '../../components/Menu/Menu'
import MenuButton from '../../components/Menu/MenuButton'

const Contact = () => {
  return (
    <>
      <IonPage>
        <Menu />
        <IonHeader>
          <IonToolbar>
            <MenuButton />
            <IonTitle>Contact</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonGrid>
            <IonCard>
              <IonCardHeader>
                <IonCardSubtitle className='cardYear'>
                  Contact Details
                </IonCardSubtitle>
                <IonCardTitle className='cardTitle'>
                  Janne Kavander
                </IonCardTitle>
                <IonCardSubtitle className='cardSub'>
                  In case you want to contact me I would recommend emailing me
                  for the fastest response. My email can be copied below by
                  clicking 'Copy' button. Do not be afraid to contact me.
                </IonCardSubtitle>
              </IonCardHeader>
              <IonCardContent>
                <IonList>
                  <IonItem>
                    <IonIcon src={locationOutline} />
                    Finland, Southern
                  </IonItem>
                  <IonItem>
                    <IonIcon src={mailOutline} />
                    kavanderjanne@gmail.com
                    <IonButton
                      fill='clear'
                      id='kavanderjanne@gmail.com'
                      onClick={() => {
                        navigator.clipboard.writeText('kavanderjanne@gmail.com')
                      }}
                    >
                      Copy
                    </IonButton>
                  </IonItem>

                  <IonItem>
                    <IonButton
                      fill='clear'
                      onClick={() =>
                        window.open('https://github.com/Cavendishh', '_blank')
                      }
                    >
                      <IonIcon src={logoGithub} />
                      Github
                    </IonButton>
                  </IonItem>

                  <IonItem>
                    <IonButton
                      fill='clear'
                      onClick={() =>
                        window.open(
                          'https://www.linkedin.com/in/janne-kavander/',
                          '_blank'
                        )
                      }
                    >
                      <IonIcon src={logoLinkedin} />
                      Linkedin
                    </IonButton>
                  </IonItem>

                  <IonItem>
                    <IonButton
                      fill='clear'
                      onClick={() =>
                        window.open(
                          'https://stackoverflow.com/users/13715738/janne?tab=profile',
                          '_blank'
                        )
                      }
                    >
                      <IonIcon src={logoStackoverflow} />
                      Stack Overflow
                    </IonButton>
                  </IonItem>
                </IonList>
              </IonCardContent>
            </IonCard>
          </IonGrid>
        </IonContent>
      </IonPage>
    </>
  )
}

export default Contact
