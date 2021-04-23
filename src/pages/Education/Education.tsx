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
  IonImg,
  IonCardContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
} from '@ionic/react'
import './Education.css'
import Menu from '../../components/Menu/Menu'
import MenuButton from '../../components/Menu/MenuButton'

const Education = () => {
  return (
    <>
      <IonPage>
        <Menu />
        <IonHeader>
          <IonToolbar>
            <MenuButton />
            <IonTitle>Profile</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonGrid>
            <IonCard>
              <IonCardHeader>
                {/* <IonImg src={profileImg}></IonImg> */}
                <IonCardTitle>Web Developer Bootcamp 2021</IonCardTitle>
                <IonCardSubtitle>2020 - 2021</IonCardSubtitle>
              </IonCardHeader>
              <IonCardContent>
                One of my favorite quotes is, "Obstacles don't have to stop you.
                If you run into a wall, don't turn around and give up. Figure
                out how to climb it, go through it, or work around it." That is
                more than just a quote to me. It is more like a principle of how
                to live my life. This logic applies to everything in life. I am
                not afraid to make mistakes because mistakes teach you valuable
                lessons if you are willing to learn from them. Are you looking
                for a very experienced person for the job? Well, maybe I am not
                the most experienced person out there for the job - but I most
                certainly am hard working and try my best every day. A day
                without learning anything new is a day wasted.
              </IonCardContent>
            </IonCard>
          </IonGrid>
        </IonContent>
      </IonPage>
    </>
  )
}

export default Education
