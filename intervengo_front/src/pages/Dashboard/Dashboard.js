'use client'
import React, { useEffect, useState } from 'react';
import './DashboardStyles.css'
import Navbar from '../../components/Navbar';
import { getAllInterventionIntervenant } from '../../services/InterventionIntervenant/InterventionIntervenantService'
import InterventionCard from '../../components/InterventionCard'


export default function Dashboard() {
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
                <Navbar title={'Dashboard'}/>
            </div>
            <div className='big'>
                <div className='sep1'>
                    <div className='div1'>
                        
                        <div className='TitreList'>
                                <p1 className='textt'>Id</p1>
                                <p1 className='textt'>Tâche</p1>
                                <p1 className='textt'>Lieux</p1>
                                <p1 className='textt'>Status</p1>
                        </div>
                        {allInterventionIntervenant?.map((item, index) => {
                        return (
                            
                        <div key={index} >
                            {
                                item.intervention.status === "A faire" ? (
                                    <div className='list1'>
                                        <p1 className='text'>{item.id}</p1>
                                        <p1 className='text'>{item.intervention.task}</p1>
                                        <p1 className='text'>{item.intervention.location}</p1>
                                        <p1 className='text'>{item.intervention.status}</p1>
                                    </div>
                                ):
                                null
                            }
                        </div>
                        
                        )
                        })}
        
                    </div>
                    <div className='div2'>
                        <div className='TitreList'>
                                <p1 className='textt'>Id</p1>
                                <p1 className='textt'>Tâche</p1>
                                <p1 className='textt'>Lieux</p1>
                                <p1 className='textt'>Status</p1>
                        </div>
                        {allInterventionIntervenant?.map((item, index) => {
                        return (
                        <div key={index}>
                            {
                                item.intervention.status === "Fini" ? (
                                    <div className='list1'>
                                        <p1 className='text'>{item.id}</p1>
                                        <p1 className='text'>{item.intervention.task}</p1>
                                        <p1 className='text'>{item.intervention.location}</p1>
                                        <p1 className='text'>{item.intervention.status}</p1>
                                    </div>
                                ):
                                null
                            }
                        </div>
                        )
                        })}
                    </div>/
                </div>

                <div className='sep2'>
                    <div className='div3'>
                    <div className='TitreList'>
                                <p1 className='textt'>Id</p1>
                                <p1 className='textt'>Tâche</p1>
                                <p1 className='textt'>Lieux</p1>
                                <p1 className='textt'>Status</p1>  
                        </div>
                        {allInterventionIntervenant?.map((item, index) => {
                        return (
                        <div key={index} className='list1'>
                            <p1 className='text'>{item.id}</p1>
                            <p1 className='text'>{item.intervention.task}</p1>
                            <p1 className='text'>{item.intervention.location}</p1>
                            <p1 className='text'>{item.intervention.status}</p1>
                        </div>
                        )
                        })}
                    </div>/
                </div>
            </div>
        </div>
    )
    // const styles = {
    //     backgroundColor : red
    // }
};

