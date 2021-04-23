import { Link } from 'react-router-dom'
import {
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonIcon,
  IonButton,
} from '@ionic/react'
import {
  libraryOutline,
  logInOutline,
  logOutOutline,
  barChartOutline,
  accessibilityOutline,
  newspaperOutline,
  folderOpenOutline,
  chatboxOutline,
} from 'ionicons/icons'

const Menu = () => (
  <>
    <IonMenu side='start' contentId='content'>
      <IonHeader>
        <IonToolbar color='primary'>
          <IonTitle>Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent id='content'>
        <IonList>
          <IonItem>
            <IonIcon icon={accessibilityOutline}></IonIcon>
            <Link to='/profile'>
              <IonButton fill='clear'>Profile</IonButton>
            </Link>
          </IonItem>
          <IonItem>
            <IonIcon icon={libraryOutline}></IonIcon>
            <Link to='/education'>
              <IonButton fill='clear'>Education</IonButton>
            </Link>
          </IonItem>
          <IonItem>
            <IonIcon icon={newspaperOutline}></IonIcon>
            <Link to='/experience'>
              <IonButton fill='clear'>Experience</IonButton>
            </Link>
          </IonItem>
          <IonItem>
            <IonIcon icon={barChartOutline}></IonIcon>
            <Link to='/skills'>
              <IonButton fill='clear'>Skills</IonButton>
            </Link>
          </IonItem>
          <IonItem>
            <IonIcon icon={folderOpenOutline}></IonIcon>
            <Link to='/projects'>
              <IonButton fill='clear'>Projects</IonButton>
            </Link>
          </IonItem>
          <IonItem>
            <IonIcon icon={chatboxOutline}></IonIcon>
            <Link to='/contact'>
              <IonButton fill='clear'>Contact</IonButton>
            </Link>
          </IonItem>
          <IonItem>
            <IonIcon icon={logInOutline}></IonIcon>
            <Link to='/login'>
              <IonButton fill='clear'>Login</IonButton>
            </Link>
          </IonItem>
          <IonItem>
            <IonIcon icon={logOutOutline}></IonIcon>
            <Link to='/register'>
              <IonButton fill='clear'>Register</IonButton>
            </Link>
          </IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
  </>
)

export default Menu
