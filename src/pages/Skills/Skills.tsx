import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonCardContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonProgressBar,
  IonItem,
  IonList,
  IonIcon,
} from '@ionic/react'
import {
  bookOutline,
  peopleOutline,
  buildOutline,
  diamondOutline,
  chatbubblesOutline,
} from 'ionicons/icons'
import './Skills.css'
import Menu from '../../components/Menu/Menu'
import MenuButton from '../../components/Menu/MenuButton'

const Skills = () => {
  return (
    <>
      <IonPage>
        <Menu />
        <IonHeader>
          <IonToolbar>
            <MenuButton />
            <IonTitle>Skills</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonGrid>
            <IonCard>
              <IonCardHeader>
                <IonCardTitle className='cardTitle'>Soft Skills</IonCardTitle>
                <IonCardSubtitle className='cardSub'>
                  My soft skills can be divided into five strengths.
                </IonCardSubtitle>
              </IonCardHeader>
              <IonCardContent>
                <IonList>
                  <IonItem>
                    <IonIcon icon={bookOutline} />
                    Fast learner
                  </IonItem>
                  <IonItem>
                    <IonIcon icon={peopleOutline} />
                    Team player
                  </IonItem>
                  <IonItem>
                    <IonIcon icon={diamondOutline} />
                    Ambitious
                  </IonItem>
                  <IonItem>
                    <IonIcon icon={buildOutline} />
                    Loves challenges
                  </IonItem>
                  <IonItem>
                    <IonIcon icon={chatbubblesOutline} />
                    Leadership
                  </IonItem>
                </IonList>
              </IonCardContent>
            </IonCard>

            <IonCard>
              <IonCardHeader>
                <IonCardTitle className='cardTitle'>
                  Technical Skills
                </IonCardTitle>
                <IonCardSubtitle className='cardSub'>
                  My skills have been acquired from many different courses that
                  I have done in my free time and school. The main focus of my
                  studies currently is web development technologies, preferably
                  Full Stack Development. To learn to program I study courses
                  from many different schools, including Helsinki University,
                  Laurea, and Metropolia. I am studying comprehensive and
                  reputable courses on Udemy and Youtube as well to deepen my
                  knowledge.
                </IonCardSubtitle>
              </IonCardHeader>
              <IonCardContent>
                <IonList>
                  <IonItem>
                    <IonRow>
                      <IonCol>
                        <p>HTML</p>
                      </IonCol>
                    </IonRow>
                    <IonProgressBar value={1.0} />
                  </IonItem>

                  <IonItem>
                    <IonRow>
                      <IonCol>
                        <p>CSS</p>
                      </IonCol>
                    </IonRow>
                    <IonProgressBar value={0.68} />
                  </IonItem>

                  <IonItem>
                    <IonRow>
                      <IonCol>
                        <p>JavaScript</p>
                      </IonCol>
                    </IonRow>
                    <IonProgressBar value={0.79} />
                  </IonItem>

                  <IonItem>
                    <IonRow>
                      <IonCol>
                        <p>Node.js</p>
                      </IonCol>
                    </IonRow>
                    <IonProgressBar value={0.5} />
                  </IonItem>

                  <IonItem>
                    <IonRow>
                      <IonCol>
                        <p>React</p>
                      </IonCol>
                    </IonRow>
                    <IonProgressBar value={0.45} />
                  </IonItem>

                  <IonItem>
                    <IonRow>
                      <IonCol>
                        <p>Express.js</p>
                      </IonCol>
                    </IonRow>
                    <IonProgressBar value={0.55} />
                  </IonItem>

                  <IonItem>
                    <IonRow>
                      <IonCol>
                        <p>MongoDB</p>
                      </IonCol>
                    </IonRow>
                    <IonProgressBar value={0.4} />
                  </IonItem>

                  <IonItem>
                    <IonRow>
                      <IonCol>
                        <p>Mongoose</p>
                      </IonCol>
                    </IonRow>
                    <IonProgressBar value={0.5} />
                  </IonItem>
                </IonList>
                <IonCardSubtitle className='cardSub'>
                  Also familiar with: Single Page Applications (SPA), Java,
                  AJAJ/AJAX, APIs, REST, HTTP, axios, cloud databases, SQL,
                  schema design, templating (EJS), cookies &#38; sessions,
                  common security issues (injections, XSS, etc.), authentication
                  &#38; authorization, responsive design, best practices of
                  developers, and deployment of applications.
                </IonCardSubtitle>
              </IonCardContent>
            </IonCard>
          </IonGrid>
        </IonContent>
      </IonPage>
    </>
  )
}

export default Skills
