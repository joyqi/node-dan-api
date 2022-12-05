import axios from "axios";
import { endpointUrl } from "./endpoint";
import { getIntegratorToken } from "./init";

type TokenResponse = {
    token: string;
    expires_at: number;
};

const tokenCache: Partial<TokenResponse> = {};

// Request a dan auth token, store it in cache
// If the token is expired, request a new one
export async function getAuthToken(): Promise<string> {
    if (tokenCache.token && tokenCache.expires_at && tokenCache.expires_at > Date.now()) {
        return tokenCache.token;
    }

    const response = await axios.post(
        endpointUrl('/tokens'),
        { integrator_token: getIntegratorToken() }
    );

    if (response.status !== 200) {
        throw new Error('Token error');
    }

    const data: TokenResponse = response.data;

    tokenCache.token = data.token;
    tokenCache.expires_at = data.expires_at;

    return data.token;
}
