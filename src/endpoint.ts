import axios, { Method } from "axios";
import { getAuthToken } from "./token";
import { isSandbox } from "./init";

const endpoints = {
    sandbox: 'https://sandbox.dan.com/api/integrator/v1',
    production: 'https://dan.com/api/integrator/v1'
};

// Get the url of the endpoint
export function endpointUrl(path: string): string {
    return `${endpoints[isSandbox() ? 'sandbox' : 'production']}${path}`;
}

// Request the endpoint
export async function request(path: string, method: Method, data?: any) {
    const response = await axios({
        method,
        url: endpointUrl(path),
        data,
        headers: {
            Authorization: 'Bearer ' + (await getAuthToken())
        }
    });

    if (response.status !== 200) {
        throw new Error('Endpoint error');
    }

    return response.data;
}
