import React from 'react';
import { useHistory } from 'react-router-dom';
import './TabContent.css';

function TabContent({ activeTab }) {
    const renderTabContent = () => {
        switch (activeTab) {
            case 'GARNER_Energies':
                return (
                    <div className="tab-content-item">
                        <div className="GARNER_Energies-title"> Société de conseil en Innovation Digitale et Transition Ecologique </div>
                         
                        <p> Notre expertise est à la disposition de nos clients pour répondre à leurs problématiques écologiques et promouvoir ensemble un environnement plus vert.</p>
                    </div>
                );
            case 'Clients':
                return (
                    <div className="tab-content-item">
                      <p>Nos clients témoignent </p>
                    </div>
                );
            case 'Activités':
                return (
                    <div className="tab-content-item">
                        <div className="Activités-title">Notre Expertise</div>
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
                            Au coeur d'un paysage en constante évolution,notre mission est d'accompagner nos clients dans leurs parcours vers un avenir plus écologique, efficient et connecté.
                        </p>
                    </div>
                );
            case 'Vision':
                return (
                    <div className="tab-content-item">
                        <div className="vision-title">Notre Vision</div>
                        <p>
                             Chez GARNER_Energies, nous croyons en un avenir où la technologie et l'innovation sont mises au service de la durabilité et de la prospérité pour tous. 
                            
                       </p>
                    </div>
                );
            case 'Log-IN':
                return (
                    <div className="tab-content-item">
                        <div className="Log-In-title"> </div>
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


