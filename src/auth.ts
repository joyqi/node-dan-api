import axios from "axios";
import DanApi from "./constructor";

type TokenResponse = {
    token: string;
    expires_at: number;
};

export function auth(api: DanApi) {
    const tokenCache: Partial<TokenResponse> = {};

    // Request a dan auth token, store it in cache
    // If the token is expired, request a new one
    async function token(): Promise<string> {
        if (tokenCache.token && tokenCache.expires_at && tokenCache.expires_at > Date.now()) {
            return tokenCache.token;
        }

        const response = await axios.post(
            api.endpoint.url('/tokens'),
            {
                integrator_token: api.getIntegratorToken()
            },
            {
                timeout: api.getTimeOut(),
            }
        );

        if (response.status !== 200) {
            throw new Error('Token error');
        }

        const data: TokenResponse = response.data;

        tokenCache.token = data.token;
        tokenCache.expires_at = data.expires_at;

        return data.token;
    }

    return { token };
}