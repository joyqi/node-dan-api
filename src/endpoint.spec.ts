import assert from "assert";
import { describe } from "mocha";
import { endpointUrl } from "./endpoint";

describe("Endpoint", () => {
    it("should return the correct url", () => {
        assert.strictEqual(endpointUrl("/test"), "https://sandbox.dan.com/api/integrator/v1/test");
    });
});