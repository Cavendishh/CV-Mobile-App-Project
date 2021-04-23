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
} from '@ionic/react'
import './Experience.css'
import Menu from '../../components/Menu/Menu'
import MenuButton from '../../components/Menu/MenuButton'

const Experience = () => {
  return (
    <>
      <IonPage>
        <Menu />
        <IonHeader>
          <IonToolbar>
            <MenuButton />
            <IonTitle>Experience</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonGrid>
            <IonCard>
              <IonCardHeader>
                <IonCardSubtitle className='cardYear'>
                  2021 -&#62;
                </IonCardSubtitle>
                <IonCardTitle className='cardTitle'>
                  Junior Software Engineer
                </IonCardTitle>
                <IonCardSubtitle className='cardSub'>
                  Workfellow, Finland
                </IonCardSubtitle>
              </IonCardHeader>
              <IonCardContent>
                <IonList>
                  <IonItem>
                    - Development as a Fullstack engineer using modern
                    technologies
                  </IonItem>
                  <IonItem>- Working with Microsoft ecosystem (Azure)</IonItem>
                  <IonItem>- Setting up development pipelines</IonItem>
                </IonList>
              </IonCardContent>
            </IonCard>

            <IonCard>
              <IonCardHeader>
                <IonCardSubtitle className='cardYear'>
                  2018 - 2019
                </IonCardSubtitle>
                <IonCardTitle className='cardTitle'>Electrician</IonCardTitle>
                <IonCardSubtitle className='cardSub'>
                  Finavia Oyj, Finland, Helsinki-Vantaa airport
                </IonCardSubtitle>
              </IonCardHeader>
              <IonCardContent>
                <IonList>
                  <IonItem>
                    - Installation, cabling, maintenance, troubleshooting, and
                    commissioning of different IT-appliances
                  </IonItem>
                  <IonItem>
                    - Executing and/or leading many different sized projects
                  </IonItem>
                  <IonItem>
                    - Maintenance, troubleshooting, commissioning, and
                    electrical installations related mostly towards industrial
                    electricitys
                  </IonItem>
                  <IonItem>
                    - Working on high voltage circuits and appliances located at
                    runway and apron areas
                  </IonItem>
                  <IonItem>- Annual and monthly inspections</IonItem>
                  <IonItem>
                    - I was part of the Ground Power Systems Team at Aviation
                    Electricity
                  </IonItem>
                </IonList>
              </IonCardContent>
            </IonCard>

            <IonCard>
              <IonCardHeader>
                <IonCardSubtitle className='cardYear'>
                  2018 - 2019
                </IonCardSubtitle>
                <IonCardTitle className='cardTitle'>Electrician</IonCardTitle>
                <IonCardSubtitle className='cardSub'>
                  Finavia Oyj, Finland, Helsinki-Vantaa airport
                </IonCardSubtitle>
              </IonCardHeader>
              <IonCardContent>
                <IonList>
                  <IonItem>- Speaking and performing at conventions</IonItem>
                  <IonItem>
                    - Teaching English to people all the way from 5 to 30 years
                    old
                  </IonItem>
                  <IonItem>- Private teaching and tutoring</IonItem>
                </IonList>
              </IonCardContent>
            </IonCard>

            <IonCard>
              <IonCardHeader>
                <IonCardSubtitle className='cardYear'>
                  2018 - 2019
                </IonCardSubtitle>
                <IonCardTitle className='cardTitle'>Electrician</IonCardTitle>
                <IonCardSubtitle className='cardSub'>
                  Finavia Oyj, Finland, Helsinki-Vantaa airport
                </IonCardSubtitle>
              </IonCardHeader>
              <IonCardContent>
                <IonList>
                  <IonItem>
                    - Very diverse tasks related to industrial and airport
                    electricity
                  </IonItem>
                  <IonItem>
                    - Troubleshooting and maintenance of high voltage circuits
                    and appliances located at runway and apron areas
                  </IonItem>
                  <IonItem>- Working in many different projects</IonItem>
                  <IonItem>
                    - I was part of the Airfield Lighting Team at Aviation
                    Electricity
                  </IonItem>
                </IonList>
              </IonCardContent>
            </IonCard>

            <IonCard>
              <IonCardHeader>
                <IonCardSubtitle className='cardYear'>
                  2020 - 2021
                </IonCardSubtitle>
                <IonCardTitle className='cardTitle'>Jenkins ry</IonCardTitle>
                <IonCardSubtitle className='cardSub'>
                  Business Information Technology Student Association of Laurea
                </IonCardSubtitle>
              </IonCardHeader>
              <IonCardContent>
                <IonItem>
                  Member of the board. I am in charge of company relations. We
                  work closely with Laurea BIT-students, different schools, and
                  many companies. I help companies find students for open job
                  positions.; opening a dialogue between companies, students,
                  and schools; arranging excursions to IT-companies like
                  Frantic, CGI &#38; etc.; and doing sponsorships with companies
                  that benefit both parties.
                </IonItem>
              </IonCardContent>
            </IonCard>
          </IonGrid>
        </IonContent>
      </IonPage>
    </>
  )
}

export default Experience
