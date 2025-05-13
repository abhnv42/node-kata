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

test('new line between numbers', () => {
	assert.strictEqual(add('5\n7,8,9\n10'), 39);
})

test('custom delimeter', () => {
	assert.strictEqual(add('//;\n5;7;8;9;10'), 39);
})

test('custom delimeter with multiple characters', () => {
	assert.strictEqual(add('//;;;\n5;;;7;;;8;;;9;;;10'), 39);
})

test('a negative number', () => {
	assert.throws(() => { add("-1") }, (err) => {
		assert(err instanceof Error);
		assert.strictEqual(err.message, "negative numbers not allowed -1")
		return true;
	}, 'unexpected error at test: a negative number');
})

test('multiple negative numbers', () => {
	assert.throws(() => { add("-1,88,-77\n-66\n-55") }, (err) => {
		assert(err instanceof Error);
		assert.strictEqual(err.message, "negative numbers not allowed -1,-77,-66,-55")
		return true;
	}, 'unexpected error at test: multiple negative numbers');
})

