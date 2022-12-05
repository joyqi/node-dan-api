// Configuration for dan api
export type DanConfig = {
    token?: string;
    sandbox: boolean;
    timeout?: number;
};

const config: DanConfig = {
    sandbox: false
};

// Set the configuration
export function init(c: DanConfig) {
    Object.assign(config, c);
}

// Get integrator token
export function getIntegratorToken(): string {
    if (!config.token) {
        throw new Error('Integrator token not set');
    }

    return config.token;
}

// Get sandbox mode
export function isSandbox(): boolean {
    return config.sandbox;
}

// Get timeout
export function getTimeOut(): number {
    return config.timeout ?? 3000;
}