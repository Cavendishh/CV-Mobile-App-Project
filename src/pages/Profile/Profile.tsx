import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonImg,
  IonCardContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
} from '@ionic/react'
import './Profile.css'
import Menu from '../../components/Menu/Menu'
import MenuButton from '../../components/Menu/MenuButton'
import profileImg from '../../assets/Profile/profile-img.png'

const Profile = () => {
  return (
    <>
      <IonPage>
        <Menu />
        <IonHeader>
          <IonToolbar className='secondaryColor'>
            <MenuButton />
            <IonTitle>Profile</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonGrid className='container'>
            <IonCard>
              <IonCardHeader>
                <IonImg src={profileImg} alt='Janne Kavander picture' />
                <IonCardSubtitle className='mediumFont'>
                  Junior Software Engineer
                </IonCardSubtitle>
                <IonCardTitle className='titleMarginFont'>
                  Janne Kavander
                </IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                One of my favorite quotes is, "Obstacles don't have to stop you.
                If you run into a wall, don't turn around and give up. Figure
                out how to climb it, go through it, or work around it." That is
                more than just a quote to me. It is more like a principle of how
                to live my life. This logic applies to everything in life. I am
                not afraid to make mistakes because mistakes teach you valuable
                lessons if you are willing to learn from them.
                <br />
                <br />
                Are you looking for a very experienced person for the job? Well,
                maybe I am not the most experienced person out there for the job
                - but I most certainly am hard working and try my best every
                day. A day without learning anything new is a day wasted.
              </IonCardContent>
            </IonCard>
          </IonGrid>
        </IonContent>
      </IonPage>
    </>
  )
}

export default Profile
