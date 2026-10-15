import { 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  IonCard, 
  IonCardContent, 
  IonIcon, 
  IonText 
} from '@ionic/react';
import { logoGithub, logoInstagram, logoWhatsapp, sendOutline } from 'ionicons/icons';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Contatos</IonTitle>
        </IonToolbar>
      </IonHeader>
      
      <IonContent fullscreen className="contatos-content">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Contatos</IonTitle>
          </IonToolbar>
        </IonHeader>

        <div className="contatos-container">
          <div className="contatos-header-text">
            <h2>Vamos conversar?</h2>
            <p>Entre em contato comigo através das minhas redes sociais ou envie uma mensagem direta.</p>
          </div>

          {/* GitHub */}
          <a 
            href="https://github.com/RailanTavares" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="contato-card-link"
          >
            <IonCard className="contato-card github">
              <IonCardContent className="card-content">
                <IonIcon icon={logoGithub} className="contato-icon" />
                <div className="contato-info">
                  <h3>GitHub</h3>
                  <p>RailanTavares</p>
                </div>
                <IonIcon icon={sendOutline} className="arrow-icon" />
              </IonCardContent>
            </IonCard>
          </a>

          {/* Instagram */}
          <a 
            href="https://www.instagram.com/rahy_tavares?igsh=MWVxbHcxZHkxdTFtNg%3D%3D" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="contato-card-link"
          >
            <IonCard className="contato-card instagram">
              <IonCardContent className="card-content">
                <IonIcon icon={logoInstagram} className="contato-icon" />
                <div className="contato-info">
                  <h3>Instagram</h3>
                  <p>@rahy_tavares</p>
                </div>
                <IonIcon icon={sendOutline} className="arrow-icon" />
              </IonCardContent>
            </IonCard>
          </a>

          {/* WhatsApp */}
          <a 
            href="https://wa.me/5589999812492" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="contato-card-link"
          >
            <IonCard className="contato-card whatsapp">
              <IonCardContent className="card-content">
                <IonIcon icon={logoWhatsapp} className="contato-icon" />
                <div className="contato-info">
                  <h3>WhatsApp</h3>
                  <p>(89) 99981-2492</p>
                </div>
                <IonIcon icon={sendOutline} className="arrow-icon" />
              </IonCardContent>
            </IonCard>
          </a>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
