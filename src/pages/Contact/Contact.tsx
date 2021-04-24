import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonItem,
  IonList,
  IonCardContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonButton,
  IonIcon,
  IonText,
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
          <IonToolbar className='secondaryColor'>
            <MenuButton />
            <IonTitle>Contact</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonGrid>
            <IonCard>
              <IonCardHeader className='alignCenter'>
                <IonCardSubtitle>Contact Details</IonCardSubtitle>
                <IonCardTitle>Janne Kavander</IonCardTitle>
                <IonCardSubtitle>
                  In case you want to contact me I would recommend emailing me
                  for the fastest response. My email can be copied below by
                  clicking 'Copy' button. Do not be afraid to contact me.
                </IonCardSubtitle>
              </IonCardHeader>
              <IonCardContent>
                <IonList>
                  <IonItem>
                    <IonIcon
                      src={locationOutline}
                      className='iconPaddingRight'
                      color='secondary'
                    />
                    <IonText className='decFontSize'>Finland, Southern</IonText>
                  </IonItem>
                  <IonItem>
                    <IonIcon
                      src={mailOutline}
                      className='iconPaddingRight'
                      color='secondary'
                    />
                    <IonText className='decFontSize'>
                      kavanderjanne@gmail.com
                    </IonText>
                    <IonButton
                      fill='outline'
                      onClick={() => {
                        navigator.clipboard.writeText('kavanderjanne@gmail.com')
                      }}
                      color='secondary'
                      className='paddingLeft moreDecFontSize'
                    >
                      Copy
                    </IonButton>
                  </IonItem>

                  <IonButton
                    fill='outline'
                    expand='block'
                    className='alignLeft topMargin'
                    onClick={() =>
                      window.open('https://github.com/Cavendishh', '_blank')
                    }
                    color='secondary'
                  >
                    <IonIcon src={logoGithub} className='iconPaddingRight' />
                    Github
                  </IonButton>

                  <IonButton
                    fill='outline'
                    expand='block'
                    className='alignLeft'
                    onClick={() =>
                      window.open(
                        'https://www.linkedin.com/in/janne-kavander/',
                        '_blank'
                      )
                    }
                    color='secondary'
                  >
                    <IonIcon src={logoLinkedin} className='iconPaddingRight' />
                    Linkedin
                  </IonButton>

                  <IonButton
                    fill='outline'
                    expand='block'
                    className='alignLeft'
                    onClick={() =>
                      window.open(
                        'https://stackoverflow.com/users/13715738/janne?tab=profile',
                        '_blank'
                      )
                    }
                    color='secondary'
                  >
                    <IonIcon
                      src={logoStackoverflow}
                      className='iconPaddingRight'
                    />
                    Stack Overflow
                  </IonButton>
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
