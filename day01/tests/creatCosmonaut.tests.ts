import { describe, it, expect } from "@jest/globals";
import createCosmonaut from "../src/createCosmonaut";

/**
 * Test superComputer function
 * Compute some number to verify if superComputer is working well
 */
describe("test createCosmonaut", () => {
	it("test createCosmonaut", () => {
		expect(createCosmonaut("ronaldo", "mars", "france")).toStrictEqual({name: "ronaldo", mission: "mars", country: "france"});
	});
});