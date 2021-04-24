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
  IonText,
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
          <IonToolbar className='secondaryColor'>
            <MenuButton />
            <IonTitle>Education</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonGrid className='container'>
            <IonCard>
              <IonCardHeader>
                <IonCardSubtitle className='cardYear'>
                  2020 - 2021
                </IonCardSubtitle>
                <IonCardTitle className='cardTitle'>
                  Web Developer Bootcamp 2021
                </IonCardTitle>
                <IonCardSubtitle className='cardSub'>
                  <i>Instructor Colt Steele, Udemy</i>
                </IonCardSubtitle>
              </IonCardHeader>
              <IonCardContent className='topMargin'>
                <IonText>
                  Without a doubt, this online bootcamp is the most
                  comprehensive and effective online course on the market
                  currently that doesn't cut any corners. Udemy's most popular
                  web development course with massive amounts of content
                  including lectures, coding exercises, and most importantly,
                  projects. Completely rehauled in October 2020 to prepare
                  students for the 2021 job market.
                </IonText>
              </IonCardContent>
            </IonCard>

            <IonCard>
              <IonCardHeader className='cardTitle'>
                <IonCardSubtitle className='cardYear'>
                  2019 - 2021
                </IonCardSubtitle>
                <IonCardTitle>
                  Bachelor's Degree Programme in Business Information Technology
                </IonCardTitle>
                <IonCardSubtitle className='cardSub'>
                  <i>Laurea University of Applied Sciences, Finland, Espoo</i>
                </IonCardSubtitle>
              </IonCardHeader>
              <IonCardContent className='topMargin'>
                <IonText>
                  Specializing in web development technologies. The BIT program
                  provides students with the theoretical and practical knowledge
                  required to operate in the field of ICT. The program works in
                  close co-operation with the business life.
                </IonText>
              </IonCardContent>
            </IonCard>

            <IonCard>
              <IonCardHeader>
                <IonCardSubtitle className='cardYear'>
                  2021 - 2015
                </IonCardSubtitle>
                <IonCardTitle className='cardTitle'>
                  Vocational Qualification in Electrical &#38; Automation
                  Engineering
                </IonCardTitle>
                <IonCardSubtitle className='cardSub'>
                  <i>
                    Helsinki Vocational College, Sturenkatu training unit,
                    Finland, Helsinki
                  </i>
                </IonCardSubtitle>
              </IonCardHeader>
              <IonCardContent className='topMargin'>
                <IonText>
                  Study Programme/Competence Area in Electrical and Automation
                  Engineering, Electrician. I got granted a scholarship for my
                  achievements in studying.
                </IonText>
              </IonCardContent>
            </IonCard>
          </IonGrid>
        </IonContent>
      </IonPage>
    </>
  )
}

export default Education
