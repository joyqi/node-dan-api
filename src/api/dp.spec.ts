import assert from "assert";
import { describe } from "mocha";
import { search } from "./dp";

describe("Distribution Network, Domains", () => {
    it("should return the correct domain", async () => {
        const domains = await search("dan");
        assert.ok(domains.length > 0, 'No domains found');
    });
});