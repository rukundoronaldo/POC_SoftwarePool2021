import { describe, it, expect } from '@jest/globals';
import superComputer,{opators, callback} from "../src/superComputer";

/**
 * Test superComputer function
 * Compute some number to verify if superComputer is working well
 */
describe('Test superComputer function', () => {
	it('Simply 4 + 5', () => {
		expect(superComputer(4, opators.add, 5, callback)).toBe(9);
	});

	it('10 - 5', () => {
		expect(superComputer(10, opators.minus, 5, callback)).toBe(5);
	});
});