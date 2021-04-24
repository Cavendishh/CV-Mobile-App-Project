import { Redirect, Route } from 'react-router-dom'
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react'
import {
  libraryOutline,
  logInOutline,
  logOutOutline,
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
import { AuthProvider } from './contexts/AuthContext'
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

const App = () => (
  <AuthProvider>
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            {/* <PrivateRoute exact path='/' component={Profile} />
            <PrivateRoute exact path='/profile' component={Profile} />
            <PrivateRoute exact path='/education' component={Education} />
            <PrivateRoute exact path='/experience' component={Experience} />
            <PrivateRoute exact path='/skills' component={Skills} />
            <PrivateRoute exact path='/projects' component={Projects} />
            <PrivateRoute exact path='/contact' component={Contact} /> */}
            <Route exact path='/' component={Profile} />
            <Route exact path='/profile' component={Profile} />
            <Route exact path='/education' component={Education} />
            <Route exact path='/experience' component={Experience} />
            <Route exact path='/skills' component={Skills} />
            <Route exact path='/projects' component={Projects} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={SignUp} />
          </IonRouterOutlet>

          <IonTabBar slot='bottom'>
            <IonTabButton tab='profile' href='/profile'>
              <IonIcon icon={accessibilityOutline} />
              <IonLabel>Profile</IonLabel>
            </IonTabButton>

            <IonTabButton tab='education' href='/education'>
              <IonIcon icon={libraryOutline} />
              <IonLabel>Education</IonLabel>
            </IonTabButton>

            <IonTabButton tab='experience' href='/experience'>
              <IonIcon icon={newspaperOutline} />
              <IonLabel>Experience</IonLabel>
            </IonTabButton>

            <IonTabButton tab='skills' href='/skills'>
              <IonIcon icon={barChartOutline} />
              <IonLabel>Skills</IonLabel>
            </IonTabButton>

            <IonTabButton tab='projects' href='/projects'>
              <IonIcon icon={folderOpenOutline} />
              <IonLabel>Projects</IonLabel>
            </IonTabButton>

            <IonTabButton tab='contact' href='/contact'>
              <IonIcon icon={chatboxOutline} />
              <IonLabel>Contact</IonLabel>
            </IonTabButton>

            <IonTabButton tab='login' href='/login'>
              <IonIcon icon={logInOutline} />
              <IonLabel>Login</IonLabel>
            </IonTabButton>

            <IonTabButton tab='signup' href='/signup'>
              <IonIcon icon={logOutOutline} />
              <IonLabel>Sign Up</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  </AuthProvider>
)

export default App
