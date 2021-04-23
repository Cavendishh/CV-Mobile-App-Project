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
            <IonTitle>Education</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonGrid>
            <IonCard>
              <IonCardHeader>
                <IonCardSubtitle className='cardYear'>
                  2020 - 2021
                </IonCardSubtitle>
                <IonCardTitle className='cardTitle'>
                  Web Developer Bootcamp 2021
                </IonCardTitle>
                <IonCardSubtitle className='cardSub'>
                  Instructor Colt Steele, Udemy
                </IonCardSubtitle>
              </IonCardHeader>
              <IonCardContent>
                Without a doubt, this online bootcamp is the most comprehensive
                and effective online course on the market currently that doesn't
                cut any corners. Udemy's most popular web development course
                with massive amounts of content including lectures, coding
                exercises, and most importantly, projects. Completely rehauled
                in October 2020 to prepare students for the 2021 job market.
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
                  Laurea University of Applied Sciences, Finland, Espoo
                </IonCardSubtitle>
              </IonCardHeader>
              <IonCardContent>
                Specializing in web development technologies. The BIT program
                provides students with the theoretical and practical knowledge
                required to operate in the field of ICT. The program works in
                close co-operation with the business life.
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
                  Helsinki Vocational College, Sturenkatu training unit,
                  Finland, Helsinki
                </IonCardSubtitle>
              </IonCardHeader>
              <IonCardContent>
                Study Programme/Competence Area in Electrical and Automation
                Engineering, Electrician. I got granted a scholarship for my
                achievements in studying.
              </IonCardContent>
            </IonCard>
          </IonGrid>
        </IonContent>
      </IonPage>
    </>
  )
}

export default Education
