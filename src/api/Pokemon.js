import {API_HOST} from "../Utils/constants"

export async function getPokemonApi(endpointUrl){
    try {
        const url = `${API_HOST}/pokemon?limit=20&offset=0`;
        const response = await fetch(endpointUrl || url);
        const result = await response.json();
        return result;
    }catch (err){
        throw err;
    }
}


export async function getPokemoDetailsApi(url){
    try {
        const response = await fetch(url);
        const result = await response.json();
        return result;

    }catch (err){
        throw err;
    }
}

export async function onePokemonApi(id){
    try {
        const url= `${API_HOST}/pokemon/${id}`;
        const response = await fetch(url);
        const result = await response.json();
        return result;

    }catch (err){
        throw err;
    }
}