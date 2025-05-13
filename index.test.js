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