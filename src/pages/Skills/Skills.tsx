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
  terminalOutline,
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
                <IonCardTitle className='alignCenter incFontSize bottomMargin'>
                  Soft Skills
                </IonCardTitle>
                <IonCardSubtitle className='alignCenter'>
                  My soft skills can be divided into five core strengths.
                </IonCardSubtitle>
              </IonCardHeader>
              <IonCardContent>
                <IonList>
                  <IonItem>
                    <IonIcon
                      icon={bookOutline}
                      className='iconPaddingRight'
                      color='secondary'
                    />
                    Fast learner
                  </IonItem>
                  <IonItem>
                    <IonIcon
                      icon={peopleOutline}
                      className='iconPaddingRight'
                      color='secondary'
                    />
                    Team player
                  </IonItem>
                  <IonItem>
                    <IonIcon
                      icon={diamondOutline}
                      className='iconPaddingRight'
                      color='secondary'
                    />
                    Ambitious
                  </IonItem>
                  <IonItem>
                    <IonIcon
                      icon={terminalOutline}
                      className='iconPaddingRight'
                      color='secondary'
                    />
                    Loves challenges
                  </IonItem>
                  <IonItem>
                    <IonIcon
                      icon={chatbubblesOutline}
                      className='iconPaddingRight'
                      color='secondary'
                    />
                    Leadership
                  </IonItem>
                </IonList>
              </IonCardContent>
            </IonCard>

            <IonCard>
              <IonCardHeader>
                <IonCardTitle className='alignCenter incFontSize bottomMargin'>
                  Technical Skills
                </IonCardTitle>
                <IonCardSubtitle className='alignCenter'>
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
                    <IonProgressBar value={1.0} color='secondary' />
                  </IonItem>

                  <IonItem>
                    <IonRow>
                      <IonCol>
                        <p>CSS</p>
                      </IonCol>
                    </IonRow>
                    <IonProgressBar value={0.68} color='secondary' />
                  </IonItem>

                  <IonItem>
                    <IonRow>
                      <IonCol>
                        <p>JavaScript</p>
                      </IonCol>
                    </IonRow>
                    <IonProgressBar value={0.79} color='secondary' />
                  </IonItem>

                  <IonItem>
                    <IonRow>
                      <IonCol>
                        <p>Node.js</p>
                      </IonCol>
                    </IonRow>
                    <IonProgressBar value={0.5} color='secondary' />
                  </IonItem>

                  <IonItem>
                    <IonRow>
                      <IonCol>
                        <p>React</p>
                      </IonCol>
                    </IonRow>
                    <IonProgressBar value={0.45} color='secondary' />
                  </IonItem>

                  <IonItem>
                    <IonRow>
                      <IonCol>
                        <p>Express.js</p>
                      </IonCol>
                    </IonRow>
                    <IonProgressBar value={0.55} color='secondary' />
                  </IonItem>

                  <IonItem>
                    <IonRow>
                      <IonCol>
                        <p>MongoDB</p>
                      </IonCol>
                    </IonRow>
                    <IonProgressBar value={0.4} color='secondary' />
                  </IonItem>

                  <IonItem>
                    <IonRow>
                      <IonCol>
                        <p>Mongoose</p>
                      </IonCol>
                    </IonRow>
                    <IonProgressBar value={0.5} color='secondary' />
                  </IonItem>
                </IonList>
                <IonCardSubtitle className='alignCenter'>
                  Also familiar with:
                  <br /> Single Page Applications (SPA), Java, AJAJ/AJAX, APIs,
                  REST, HTTP, axios, cloud databases, SQL, schema design,
                  templating (EJS), cookies &#38; sessions, common security
                  issues (injections, XSS, etc.), authentication &#38;
                  authorization, responsive design, best practices of
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
