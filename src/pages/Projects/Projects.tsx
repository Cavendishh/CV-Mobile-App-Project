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
} from '@ionic/react'
import './Projects.css'
import Menu from '../../components/Menu/Menu'
import MenuButton from '../../components/Menu/MenuButton'

const Projects = () => {
  return (
    <>
      <IonPage>
        <Menu />
        <IonHeader>
          <IonToolbar>
            <MenuButton />
            <IonTitle>Projects</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonGrid>
            <IonText>. . .</IonText>
          </IonGrid>
        </IonContent>
      </IonPage>
    </>
  )
}

export default Projects
