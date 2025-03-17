'use client'
import React, { useEffect, useState } from 'react';
import './ListeStyles.css'
import Navbar from '../../components/Navbar';
import { getAllInterventionIntervenant } from '../../services/InterventionIntervenant/InterventionIntervenantService'
import InterventionCard from '../../components/InterventionCard'


export default function Liste() {
    const [allInterventionIntervenant, setAllInterventionIntervenant] = useState([])
    
    useEffect(() => {
        getAllInterventionIntervenant().then((response) => {
            setAllInterventionIntervenant(response)
            console.log(response)
        })
    }, [])
    
    return (
        <div>
            <div>
                <Navbar title={'Liste'}/>
            </div>
            {/* AJOUT DE PAGE DASHBOARD  */}
            {/* BESOIN DE MAPPER LISTE INTERVENTION */}
            {/* RENDRE CLICKABLE CHAQUE ELEM DE LA LISTE INTERVENTION ET REDIRIGER VERS FORM AVEC INFO */}

            <div>
                <div className='intervention'>
                    <div className='intervention-label'>Id </div>
                    <div className='intervention-label'>Lieu</div>
                    <div className='intervention-label'>Tache</div>
                    <div className='intervention-label'>Action Réalisé</div>
                    <div className='intervention-label'>Image</div>
                    <div className='intervention-label'>Signature</div>
                    <div className='intervention-label'>Intervenant</div>
                    <div className='intervention-label'>Status</div>
                </div>
                {allInterventionIntervenant?.map((item, index) => {
                    return (
                        <div key={index}>
                            <InterventionCard 
                            id={item.intervention.id} 
                            location={item.intervention.location} 
                            status={item.intervention.status}
                            task={item.intervention.task}
                            action_performed={item.intervention.action_performed}
                            picture={item.intervention.picture}
                            signature={item.intervention.signature}
                            intervenant={item.intervenant.first_name}
                            tel={item.intervention.tel}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
};

