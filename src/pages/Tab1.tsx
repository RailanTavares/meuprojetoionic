import { 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  IonCard, 
  IonCardContent, 
  // IonCardHeader, 
  IonCardTitle,
  IonButton,
  // IonAvatar 
} from '@ionic/react';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      {/* Cabeçalho Fixo do Topo com imagem do GitHub */}
      <IonHeader>
        <IonToolbar>
          <IonTitle>Sobre mim</IonTitle>
          {/* slot="end" posiciona a imagem no canto direito */}
          {/* <IonAvatar slot="end" className="avatar-header"> */}
            <img 
            alt="Foto de perfil do GitHub" 
            src="https://avatars.githubusercontent.com/u/223161873?s=400&u=49014bab52874f43b82c69d75aa07202f1994562&v=4" 
            />
          {/* </IonAvatar> */}
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        {/* Cabeçalho Colapsável (Apenas com o título grande) */}
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle className="subtitulo" size="large">Sobre mim</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonCard>
          {/* IonCardHeader com a classe Flex para alinhar imagem e título */}
          {/* <IonCardHeader className="card-header-flex"> */}
            {/* <IonAvatar className="avatar-card"> */}
              <img 
                // alt="Foto de perfil do GitHub" 
                // src="https://avatars.githubusercontent.com/u/223161873?s=400&u=49014bab52874f43b82c69d75aa07202f1994562&v=4" 
              />
            {/* </IonAvatar> */}
            <IonCardTitle className="titulo">Especialista em TI</IonCardTitle>
          {/* </IonCardHeader> */}
          <IonCardContent className="corpo">
            <p>
              Sou natural de Corrente, Piauí, e apaixonado por tecnologia
              e aprendizado contínuo.
              Minha trajetória combina uma base técnica sólida com uma visão educacional e estratégica, permitindo desenvolver 
              soluções com mais eficiência e propósito.
              Atualmente, foco na área de Sistemas para Internet, criando aplicações modernas e voltadas para problemas reais.
            </p>

            {/* Links dos Projetos e Serviços */}
            <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <IonButton 
                expand="block" 
                fill="solid" 
                href="https://railantavares.github.io/Railan-Tavares/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAb21jcAU9CPZleHRuA2FlbQIxMQBwZG9mAnNydGMGYXBwX2lkDzU2NzA2NzM0MzM1MjQyNwABpzIyeSacSXoeKxe9zvfyDMSw2nbxWMzNNzKQUvIn-bCsO0W_TDURaIy1OA-J_aem_KZaW6HVGXr-IrQq1pjGOpA#projetos" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ '--background': '#0a2164' }}
              >
                Projetos
              </IonButton>

              <IonButton 
                expand="block" 
                fill="outline" 
                href="https://railantavares.github.io/Railan-Tavares/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAb21jcAU9CPZleHRuA2FlbQIxMQBwZG9mAnNydGMGYXBwX2lkDzU2NzA2NzM0MzM1MjQyNwABpzIyeSacSXoeKxe9zvfyDMSw2nbxWMzNNzKQUvIn-bCsO0W_TDURaIy1OA-J_aem_KZaW6HVGXr-IrQq1pjGOpA#servicos" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ '--color': '#0a2164', '--border-color': '#0a2164' }}
              >
                Serviços
              </IonButton>
            </div>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;