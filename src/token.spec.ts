import assert from "assert";
import { describe } from "mocha";
import { getAuthToken } from "./token";

describe("Token", () => {
    it("should return the correct token", async () => {
        await getAuthToken();
    });
});