import api from '../api'

export const getAllInterventionIntervenant = async () => {
    return await api.get('intervention-intervenant').then((response) => response.data)
}

export const createInterventionIntervenant = async (intervenant, intervention) => {
    console.log(intervenant, intervention)
    console.log(typeof(intervenant))
    console.log(typeof(intervention))
    return await api.post('/intervention-intervenant',
        {
            intervention: {
                'id' : intervention,
            },
            intervenant: {
                'id': intervenant,
            }
        }
     )
}
