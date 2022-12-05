import { dp } from "./api/dp";
import { auth } from "./auth";
import { endpoint } from "./endpoint";

// Configuration for dan api
export type DanConfig = {
    token?: string;
    sandbox: boolean;
    timeout?: number;
};

// Dan api constructor
export default class DanApi {
    private integratorToken: string;
    private sandbox: boolean;
    private timeout: number;

    public endpoint: ReturnType<typeof endpoint>;
    public auth: ReturnType<typeof auth>;
    public dp: ReturnType<typeof dp>;

    // Set the configuration
    constructor(config: DanConfig) {
        this.integratorToken = config.token || '';
        this.sandbox = config.sandbox;
        this.timeout = config.timeout || 3000;

        this.endpoint = endpoint(this);
        this.auth = auth(this);
        this.dp = dp(this);
    }

    // Get integrator token
    getIntegratorToken(): string {
        if (!this.integratorToken) {
            throw new Error('Integrator token not set');
        }

        return this.integratorToken;
    }

    // Get sandbox mode
    isSandbox(): boolean {
        return this.sandbox;
    }

    // Get timeout
    getTimeOut(): number {
        return this.timeout;
    }
}
