import axios, { Method } from "axios";
import DanApi from "./constructor";

const endpoints = {
    sandbox: 'https://sandbox.dan.com/api/integrator/v1',
    production: 'https://dan.com/api/integrator/v1'
};

export function endpoint(api: DanApi) {
    // Get the url of the endpoint
    function url(path: string): string {
        return `${endpoints[api.isSandbox() ? 'sandbox' : 'production']}${path}`;
    }

    // Request the endpoint
    async function request(path: string, method: Method, data?: any) {
        const response = await axios({
            method,
            url: url(path),
            data,
            timeout: api.getTimeOut(),
            headers: {
                Authorization: 'Bearer ' + (await api.auth.token())
            }
        });

        if (response.status !== 200) {
            throw new Error('Endpoint error');
        }

        return response.data;
    }

    return { url, request };
}
