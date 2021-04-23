import { IonButtons, IonMenuButton } from '@ionic/react'

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
