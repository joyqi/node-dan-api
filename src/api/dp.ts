import { request } from "../endpoint";

type BuyAmount = {
    value: number;
    currency_code: string;
    formatted: string;
};

type Buy = {
    url: string;
    amount: BuyAmount;
}

type MonthlyLeaseAmount = {
    total: number;
    markup_percentage: string;
    formatted: string;
    markup: number;
};

type LeaseAmount = {
    max_lease_period: number;
    currency_code: string;
    formatted: string;
    monthly_values: Record<string, MonthlyLeaseAmount>;
};

type Lease = {
    url: string;
    amount: LeaseAmount;
}

type Domain = {
    name: string;
    options: {
        buy_now: Buy,
        lease_to_own?: Lease
    }
}

// Search distribution network for domain
export async function search(query: string) {
    const { results } = await request('/dp/demand/domains', 'GET', { query });
    return results as Domain[];
}