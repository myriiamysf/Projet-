'use client'
import { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import './CreateInterventionStyles.css'
import { getAllIntervenant } from '../../services/Intervenant/IntervenantService';
import { createIntervention, getAllIntervention } from '../../services/Intervention/InterventionService';
import { createInterventionIntervenant } from '../../services/InterventionIntervenant/InterventionIntervenantService';


export default function CreateIntervention() {
   
    const [location, setLocation] = useState('');
    const [task, setTask] = useState('');
    const [allIntervenant, setAllIntervenant] = useState([]);
    const [intervention, setIntervention] = useState([]);

    useEffect(() => {
        getAllIntervenant().then((response) => {
            setAllIntervenant(response)
        })
        getAllIntervention().then((response) => {
            setIntervention(response)
        })
    }, [])

    const handleSubmit = async (data) => { 
        data.preventDefault();
        try {
            const intervenant_id = Number(document.getElementById("intervenant").value);
            createIntervention(location, task);
            const intervention_id = intervention[intervention.length-1].id + 1;
            createInterventionIntervenant(intervenant_id, intervention_id)
        }
        catch (err) {
            console.log(err)
        }
    }
    return (
        <div>
            <div>
                <Navbar title={'Create-Intervention'} />
            </div>

            <div className='form'>
                <form onSubmit={handleSubmit} className='form-base'>
                    <div className='items'>
                        <label htmlFor='location'>Location</label>
                        <input
                            className='item-input'
                            type='text'
                            id='location'
                            name='location'
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            placeholder='Lieu'
                            required minLength={3}
                        />
                    </div>
                    <div className='items'>
                        <label htmlFor='task'>Task</label>
                        <textarea 
                            className='item-area'
                            type='text'
                            name='task'
                            id='task'
                            placeholder='Tache'
                            value={task}
                            onChange={(e) => setTask(e.target.value)}
                            required minLength={5}
                        />
                    </div>
                    <div className='items'>
                        <label htmlFor='intervenant'>Intervenant</label>
                        <select id='intervenant' className='item-input' required>
                            {allIntervenant?.map((item, key) => 
                            <option key={key} value={item.id}>{item.last_name} {item.first_name}</option>
                        )}
                        </select>
                    </div>
                    <button className='button' type='submit'>Submit</button>
                </form>
            </div>
        </div>
    )
};

