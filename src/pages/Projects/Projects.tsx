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
import './Projects.css'
import Menu from '../../components/Menu/Menu'
import MenuButton from '../../components/Menu/MenuButton'
import project0 from '../../assets/Projects/project0.png'
import project1 from '../../assets/Projects/project1.png'
import project2 from '../../assets/Projects/project2.png'
import project3 from '../../assets/Projects/project3.png'
import project4 from '../../assets/Projects/project4.png'
import project5 from '../../assets/Projects/project5.png'

const Projects = () => {
  return (
    <>
      <IonPage>
        <Menu />
        <IonHeader>
          <IonToolbar className='secondaryColor'>
            <MenuButton />
            <IonTitle>Projects</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonGrid>
            <IonCard>
              <IonCardHeader>
                <IonImg src={project0} />
                <IonCardTitle className='alignCenter tinyIncFontSize'>
                  YelpCamp
                </IonCardTitle>
                <IonCardSubtitle className='alignCenter bottomMargin'>
                  JavaScript, Node.js, Express.js, MongoDB, Mongoose, Cloudify,
                  EJS, Authentication, Geocoding
                </IonCardSubtitle>
              </IonCardHeader>
              <IonCardContent>
                This massive project was done at the end of Colt Steele's The
                Web Developer Bootcamp 2021 to showcase some of the learned
                tools, methods, skills, and technologies during the bootcamp.
                The bootcamp was comprehensive and taught me a lot of modern-day
                web development practices. To digest all that massive
                information took a while but I am confident this project taught
                me a significant amount.
              </IonCardContent>
            </IonCard>

            <IonCard>
              <IonCardHeader>
                <IonImg src={project1} />
                <IonCardTitle className='alignCenter tinyIncFontSize'>
                  Github Search
                </IonCardTitle>
                <IonCardSubtitle className='alignCenter bottomMargin'>
                  React, React Router, React Bootstrap, Context API, Node.js,
                  Axios, Express.js
                </IonCardSubtitle>
              </IonCardHeader>
              <IonCardContent>
                This project has been done in different ways. First I did this
                single page application using old ways of React - using
                class-based methods. Then I refactored the project to use React
                hooks. Due to prop drilling and App.js being very messy - I
                refactored the project for the third time. This time I used
                Context API to make the app structure much clearer.
              </IonCardContent>
            </IonCard>

            <IonCard>
              <IonCardHeader>
                <IonImg src={project2} />
                <IonCardTitle className='alignCenter tinyIncFontSize'>
                  Ticket System
                </IonCardTitle>
                <IonCardSubtitle className='alignCenter bottomMargin'>
                  React, Redux, Context API, Materialize, Node.js
                </IonCardSubtitle>
              </IonCardHeader>
              <IonCardContent>
                Experimental ticket system for an IT-department. The project
                uses modern React and the main purpose of this project was to
                learn more about Context API and Redux. This SPA is only a small
                frontend application so no backend was made for it. Instead, I
                used a fake REST API package called JSON Server.
              </IonCardContent>
            </IonCard>

            <IonCard>
              <IonCardHeader>
                <IonImg src={project3} />
                <IonCardTitle className='alignCenter tinyIncFontSize'>
                  Phonebook
                </IonCardTitle>
                <IonCardSubtitle className='alignCenter bottomMargin'>
                  React, React Bootstrap, Node.js, Express.js, Axios, MongoDB,
                  Mongoose
                </IonCardSubtitle>
              </IonCardHeader>
              <IonCardContent>
                This project's main idea was to learn some Full Stack (MERN)
                development by learning integrating frontend, backend and
                databases together. It is made from scratch to publishing. No
                classes were used in creating this SPA. I focused on using
                React's 16.8+ hooks because I think they're much better than a
                class-based system. Also, a heavy focus was on learning node.js
                and its features in-depth. The back-end has been connected to
                MongoDB and to help with that it is using Axios & mongoose.
              </IonCardContent>
            </IonCard>

            <IonCard>
              <IonCardHeader>
                <IonImg src={project4} />
                <IonCardTitle className='alignCenter tinyIncFontSize'>
                  Task Manager
                </IonCardTitle>
                <IonCardSubtitle className='alignCenter bottomMargin'>
                  JavaScript, HTML, CSS
                </IonCardSubtitle>
              </IonCardHeader>
              <IonCardContent>
                This is a small Task Manager project to make a dynamic
                JavaScript web application while using good programming
                practices and without any kind of frameworks or libraries. So it
                is just pure JavaScript. The Task Manager also has only some
                basic bootstrap styling (some of it added dynamically) but the
                focus of the project is not styling.
              </IonCardContent>
            </IonCard>

            <IonCard>
              <IonCardHeader>
                <IonImg src={project5} />
                <IonCardTitle className='alignCenter tinyIncFontSize'>
                  Covid Tracker
                </IonCardTitle>
                <IonCardSubtitle className='alignCenter bottomMargin'>
                  JavaScript, HTML, CSS
                </IonCardSubtitle>
              </IonCardHeader>
              <IonCardContent>
                This project was done by myself as a school project to
                dynamically make a Javascript web application while using good
                programming practices and without any kind of framework or
                library (except jQuery). It is vital to know the fundamentals of
                Javascript because it reinforces learning when moving into more
                further in the world of Javascript. Covid tracker's point is to
                fetch JSON data from three different APIs that are fetched by
                using jQuery ajax functions. It also parses the information and
                displays it to user graphically. The tracker also has only very
                basic CSS (some of it added dynamically) because that was not
                the focus of this project.
              </IonCardContent>
            </IonCard>
          </IonGrid>
        </IonContent>
      </IonPage>
    </>
  )
}

export default Projects
