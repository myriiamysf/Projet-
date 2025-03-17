import api from "../api";

export const generatePdf = async (id) => {
    api.get('/pdf/' + id).then((response) => response.data)
}