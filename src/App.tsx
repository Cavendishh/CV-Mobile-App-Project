import { Redirect, Route } from 'react-router-dom'
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonText,
} from '@ionic/react'
import {
  libraryOutline,
  barChartOutline,
  accessibilityOutline,
  newspaperOutline,
  folderOpenOutline,
  chatboxOutline,
} from 'ionicons/icons'
import { IonReactRouter } from '@ionic/react-router'
import Profile from './pages/Profile/Profile'
import Education from './pages/Education/Education'
import Experience from './pages/Experience/Experience'
import Skills from './pages/Skills/Skills'
import Projects from './pages/Projects/Projects'
import Contact from './pages/Contact/Contact'
import Login from './pages/Login/Login'
import SignUp from './pages/SignUp/SignUp'
import { useAuth } from './contexts/AuthContext'
import PrivateRoute from './PrivateRoute'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css'

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css'
import '@ionic/react/css/float-elements.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/display.css'

/* Theme variables */
import './theme/variables.css'

const App = () => {
  const { currentUser } = useAuth()

  if (!currentUser) {
    return (
      <IonApp>
        <IonReactRouter>
          <IonRouterOutlet>
            <PrivateRoute exact path='/' component={Profile} />
            <PrivateRoute exact path='/profile' component={Profile} />
            <PrivateRoute exact path='/education' component={Education} />
            <PrivateRoute exact path='/experience' component={Experience} />
            <PrivateRoute exact path='/skills' component={Skills} />
            <PrivateRoute exact path='/projects' component={Projects} />
            <PrivateRoute exact path='/contact' component={Contact} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={SignUp} />
            <Redirect to='/' />
          </IonRouterOutlet>
        </IonReactRouter>
      </IonApp>
    )
  } else {
    return (
      <IonApp>
        <IonReactRouter>
          <IonTabs>
            <IonRouterOutlet>
              <PrivateRoute exact path='/' component={Profile} />
              <PrivateRoute exact path='/profile' component={Profile} />
              <PrivateRoute exact path='/education' component={Education} />
              <PrivateRoute exact path='/experience' component={Experience} />
              <PrivateRoute exact path='/skills' component={Skills} />
              <PrivateRoute exact path='/projects' component={Projects} />
              <PrivateRoute exact path='/contact' component={Contact} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/signup' component={SignUp} />
              <Redirect to='/' />
            </IonRouterOutlet>

            <IonTabBar slot='bottom'>
              <IonTabButton tab='profile' href='/profile' className='tabBarBtn'>
                <IonIcon icon={accessibilityOutline} />
                <IonLabel>
                  <IonText class='navFontSize'>Profile</IonText>
                </IonLabel>
              </IonTabButton>

              <IonTabButton
                tab='education'
                href='/education'
                className='tabBarBtn'
              >
                <IonIcon icon={libraryOutline} />
                <IonLabel>
                  <IonText class='navFontSize'>Education</IonText>
                </IonLabel>
              </IonTabButton>

              <IonTabButton
                tab='experience'
                href='/experience'
                className='tabBarBtn'
              >
                <IonIcon icon={newspaperOutline} />
                <IonLabel>
                  <IonText class='navFontSize'>Experience</IonText>
                </IonLabel>
              </IonTabButton>

              <IonTabButton tab='skills' href='/skills' className='tabBarBtn'>
                <IonIcon icon={barChartOutline} />
                <IonLabel>
                  <IonText class='navFontSize'>Skills</IonText>
                </IonLabel>
              </IonTabButton>

              <IonTabButton
                tab='projects'
                href='/projects'
                className='tabBarBtn'
              >
                <IonIcon icon={folderOpenOutline} />
                <IonLabel>
                  <IonText class='navFontSize'>Projects</IonText>
                </IonLabel>
              </IonTabButton>

              <IonTabButton tab='contact' href='/contact' className='tabBarBtn'>
                <IonIcon icon={chatboxOutline} />
                <IonLabel>
                  <IonText class='navFontSize'>Contact</IonText>
                </IonLabel>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </IonReactRouter>
      </IonApp>
    )
  }
}

export default App
