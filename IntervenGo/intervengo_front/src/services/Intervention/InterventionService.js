import api from '../api'

export const getInterventionHistory = async () => {
    return await api.get("/intervention/history").then((response) => response.data)
}

export const updateIntervention = async (id, image, signature_url, action, status) => {
    return await api.put("/intervention/" + id,
        {
            "picture": image,
            "signature": signature_url,
            "action_performed": action,
            "status": status
        }
    )
}
 
export const getAllIntervention = async () => {
    // console.log(api.get("/intervention").then((response) => response.data))
    return await api.get("/intervention").then((response) => response.data)
}

export const createIntervention = async (location, task) => {
    return await api.post("/intervention", 
        {
            "location": location,
            "task": task,
        }
    )
}