// Designer, Developer, and Author - Janne Kavander
// Student number 1903048

import { IonButtons, IonMenuButton } from '@ionic/react'

// This component is button that will open the Menu (top left corner of screen)
const MenuButton = () => {
  return (
    <>
      <IonButtons slot='start'>
        <IonMenuButton />
      </IonButtons>
    </>
  )
}

export default MenuButton
