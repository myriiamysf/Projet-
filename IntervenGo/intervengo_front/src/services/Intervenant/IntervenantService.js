import api from '../api'

export const getAllIntervenant = async () => {
    return await api.get('intervenant').then((response) => response.data)
}