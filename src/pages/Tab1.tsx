import { 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  IonCard, 
  IonCardContent, 
  IonCardHeader, 
  IonCardSubtitle, 
  IonCardTitle,
  IonAvatar 
} from '@ionic/react';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      {/* Cabeçalho Fixo do Topo */}
      <IonHeader>
        <IonToolbar>
          <IonTitle>Apresentação</IonTitle>
          {/* slot="end" posiciona o avatar no canto direito (depois do título) */}
          <IonAvatar slot="end" className="avatar-header">
            <img 
              alt="Silhouette of a person's head" 
              src="https://ionicframework.com/docs/img/demos/avatar.svg" 
            />
          </IonAvatar>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        {/* Cabeçalho Colapsável */}
        <IonHeader collapse="condense">
          <IonToolbar>
            <div className="cabecalho-condense">
              <IonTitle size="large">Apresentação</IonTitle>
              <IonAvatar className="avatar-header">
                <img 
                  alt="Silhouette of a person's head" 
                  src="https://ionicframework.com/docs/img/demos/avatar.svg" 
                />
              </IonAvatar>
            </div>
          </IonToolbar>
        </IonHeader>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle className='titulo' >Meu Portifolios</IonCardTitle>
            <IonCardSubtitle>Subtítulo do Cartão</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>Pequena descrição do cartão.</IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;