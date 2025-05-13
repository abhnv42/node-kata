"use strict";

import assert from "node:assert";
import test from "node:test";
import add from "./index.js";

test("empty string", () => {
	assert.strictEqual(add(""), 0);
})

test("single number", () => {
	assert.strictEqual(add("5"), 5);
})

test('two numbers', () => {
	assert.strictEqual(add('5,7'), 12);
})

test('multiple numbers', () => {
	assert.strictEqual(add('5,7,8,9,10'), 39);
})