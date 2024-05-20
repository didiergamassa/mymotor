import React from 'react';
import { useHistory } from 'react-router-dom';
import './TabContent.css';

function TabContent({ activeTab }) {
    const renderTabContent = () => {
        switch (activeTab) {
            case 'GARNER_Energies':
                return (
                    <div className="tab-content-item">
                        <div className="GARNER_Energies">Société de conseil en Transformation Digitale et de Transition Ecologique Globale</div>
                        <p className="apegg-message">Notre expertise est à disposition de vos problématiques écologiques afin de bâtir ensemble un monde plus vert.</p>
                    </div>
                );
            case 'Solutions':
                return (
                    <div className="tab-content-item">
                      <p>Contenu de l'onglet Solutions</p>
                    </div>
                );
            case 'Expertise':
                return (
                    <div className="tab-content-item">
                        <div className="Expertise-title">Notre Expertise</div>
                        <p>
                            <strong>Transformation Digitale</strong>
                            <br />
                            Nous proposons des stratégies sur mesure pour guider nos clients à travers leur transformation digitale, en optimisant leurs processus métier et en exploitant pleinement les technologies émergentes telles que l'IA, le cloud computing et l'IoT.
                            {/* Autres domaines d'expertise */}
                        </p>
                    </div>
                );
            case 'Mission':
                return (
                    <div className="tab-content-item">
                        <div className="Mission-title">Notre Mission</div>
                        <p>
                            Au sein du paysage en constante évolution de la transformation digitale et de l'ingénierie pour la transition écologique, L'APEGG s'engage à fournir des solutions innovantes et durables pour répondre aux défis complexes de notre époque. Notre mission est d'accompagner nos clients dans leur parcours vers un avenir plus écologique, efficient et connecté.
                        </p>
                    </div>
                );
            case 'Engagement':
                return (
                    <div className="tab-content-item">
                        <div className="Engagement-title">Notre Engagement</div>
                        <p>
                            Chez l'APEEG, nous croyons en un avenir où la technologie et l'innovation sont mises au service de la durabilité et de la prospérité pour tous. Nous nous engageons à travailler en partenariat avec nos clients pour créer un impact positif sur la société et l'environnement, et à œuvrer ensemble pour une transition écologique globale réussie.
                        </p>
                    </div>
                );
            case 'Vision':
                return (
                    <div className="tab-content-item">
                        <div className="vision-title">Notre Vision</div>
                        <p>
                            <strong>Une Vision écologique enracinée dans l'Engagement </strong>
                            <br />
                            Chez GARNER_Energies, nous croyons en un avenir où la technologie et l'innovation sont mises au service de la durabilité et de la prospérité pour tous. 
                            <br />
                       </p>
                    </div>
                );
            case 'Log-IN':
                return (
                    <div className="tab-content-item">
                        <div className="Engagement-title">Notre Engagement</div>
                        <p>
                           Redirection vers notre solution
                        </p>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="tab-content">
            {renderTabContent()}
        </div>
    );
}

export default TabContent;


