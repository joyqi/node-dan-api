import DanApi from ".";
import assert from "assert";
import { describe } from "mocha";

const api = new DanApi({
    token: process.env.TOKEN,
    sandbox: true,
});

describe("Endpoint", () => {
    it("should return the correct url", () => {
        assert.strictEqual(api.endpoint.url("/test"), "https://sandbox.dan.com/api/integrator/v1/test");
    });
});

describe("Token", () => {
    it("should return the correct token", async () => {
        await api.auth.token();
    });
});

describe("Distribution Network, Domains", () => {
    it("should return the correct domain", async () => {
        const domains = await api.dp.search("dan");
        assert.ok(domains.length > 0, 'No domains found');
    });
});