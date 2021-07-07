import axios from "axios";

const makeRequest = async (path) => {
    return (
        await axios
        .get(`https://jsonplaceholder.typicode.com${path}`)
    )
}

const getResponce = async (path) => {

    try {
        const { data } = await makeRequest(path);
        return [data, null]
    } catch (e) {
        return console.log(e);
    }
    
}

export const jsonAPI = {
    albums : () => getResponce('/albums')
}
