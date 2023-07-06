import Navbar from './Navbar';
import { IonAvatar, IonItem, IonLabel, IonThumbnail } from '@ionic/react';
import pro13 from './public/pro13.jpg';

function MeuPedido() {

  return (
    <>
      
      <Navbar/>
     
      <h2>Veja o que está na sua sacola</h2>

      <IonItem>
        <IonAvatar slot="start">
          <img src={mac} className="App-logo" alt="logo" />
        </IonAvatar>
        <IonLabel>Avatar Item</IonLabel>
      </IonItem>

      <IonItem>
        <IonThumbnail slot="start">
          <img src={mac} className="App-logo" alt="logo" />
        </IonThumbnail>
        <IonLabel>Thumbnail Item</IonLabel>
      </IonItem>



    </>
  );

}
export default MeuPedido
