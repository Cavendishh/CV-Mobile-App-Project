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
  IonText,
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
                  <i>Workfellow, Finland</i>
                </IonCardSubtitle>
              </IonCardHeader>
              <IonCardContent>
                <IonList>
                  <IonItem>
                    <IonText className='bulletPoint'>
                      Development as a Fullstack engineer using modern
                      technologies
                    </IonText>
                  </IonItem>
                  <IonItem>
                    <IonText className='bulletPoint'>
                      Working with Microsoft ecosystem (Azure)
                    </IonText>
                  </IonItem>
                  <IonItem>
                    <IonText className='bulletPoint'>
                      Setting up development pipelines
                    </IonText>
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
                  <i>Finavia Oyj, Finland, Helsinki-Vantaa airport</i>
                </IonCardSubtitle>
              </IonCardHeader>
              <IonCardContent>
                <IonList>
                  <IonItem>
                    <IonText className='bulletPoint'>
                      Installation, cabling, maintenance, troubleshooting, and
                      commissioning of different IT-appliances
                    </IonText>
                  </IonItem>
                  <IonItem>
                    <IonText className='bulletPoint'>
                      Executing and/or leading many different sized projects
                    </IonText>
                  </IonItem>
                  <IonItem>
                    <IonText className='bulletPoint'>
                      Maintenance, troubleshooting, commissioning, and
                      electrical installations related mostly towards industrial
                      electricitys
                    </IonText>
                  </IonItem>
                  <IonItem>
                    <IonText className='bulletPoint'>
                      Working on high voltage circuits and appliances located at
                      runway and apron areas
                    </IonText>
                  </IonItem>
                  <IonItem>
                    <IonText className='bulletPoint'>
                      Annual and monthly inspections
                    </IonText>
                  </IonItem>
                  <IonItem>
                    <IonText className='bulletPoint'>
                      I was part of the Ground Power Systems Team at Aviation
                      Electricity
                    </IonText>
                  </IonItem>
                </IonList>
              </IonCardContent>
            </IonCard>

            <IonCard>
              <IonCardHeader>
                <IonCardSubtitle className='cardYear'>
                  2018 - 2019
                </IonCardSubtitle>
                <IonCardTitle className='cardTitle'>
                  English Teacher
                </IonCardTitle>
                <IonCardSubtitle className='cardSub'>
                  <i>New Way Company, Vietnam, Hanoi</i>
                </IonCardSubtitle>
              </IonCardHeader>
              <IonCardContent>
                <IonList>
                  <IonItem>
                    <IonText className='bulletPoint'>
                      Speaking and performing at conventions
                    </IonText>
                  </IonItem>
                  <IonItem>
                    <IonText className='bulletPoint'>
                      Teaching English to people all the way from 5 to 30 years
                      old
                    </IonText>
                  </IonItem>
                  <IonItem>
                    <IonText className='bulletPoint'>
                      Private teaching and tutoring
                    </IonText>
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
                  <i>Finavia Oyj, Finland, Helsinki-Vantaa airport</i>
                </IonCardSubtitle>
              </IonCardHeader>
              <IonCardContent>
                <IonList>
                  <IonItem>
                    <IonText className='bulletPoint'>
                      Very diverse tasks related to industrial and airport
                      electricity
                    </IonText>
                  </IonItem>
                  <IonItem>
                    <IonText className='bulletPoint'>
                      Troubleshooting and maintenance of high voltage circuits
                      and appliances located at runway and apron areas
                    </IonText>
                  </IonItem>
                  <IonItem>
                    <IonText className='bulletPoint'>
                      Working in many different projects
                    </IonText>
                  </IonItem>
                  <IonItem>
                    <IonText className='bulletPoint'>
                      I was part of the Airfield Lighting Team at Aviation
                      Electricity
                    </IonText>
                  </IonItem>
                </IonList>
              </IonCardContent>
            </IonCard>

            <IonCard>
              <IonCardHeader>
                <IonCardSubtitle className='cardYear'>
                  2020 - 2021
                </IonCardSubtitle>
                <IonCardTitle className='cardTitle'>
                  Member of Board - Company Relations
                </IonCardTitle>
                <IonCardSubtitle className='cardSub'>
                  <i>
                    Business Information Technology Student Association of
                    Laurea
                  </i>
                </IonCardSubtitle>
              </IonCardHeader>
              <IonCardContent>
                <IonItem>
                  I am in charge of company relations. We work closely with
                  Laurea BIT-students, different schools, and many companies. I
                  help companies find students for open job positions.; opening
                  a dialogue between companies, students, and schools; arranging
                  excursions to IT-companies like Frantic, CGI &#38; etc.; and
                  doing sponsorships with companies that benefit both parties.
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
