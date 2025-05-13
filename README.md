## 📘 String Calculator – TDD Kata (Incubyte)

### ✅ Features Implemented

* `""` returns `0`
* `"1"` returns `1`
* `"1,2"` returns `3`
* Handles any number of comma-separated values
* Supports newline `\n` as a delimiter (e.g. `"1\n2,3"` → `6`)
* Supports custom delimiters using the `//<delimiter>\n` format

  * Example: `"//;\n1;2"` → `3`
  * Also supports delimiters with multiple characters: `"//;;;\n1;;;2"` → `3`
* Throws an error if negative numbers are found

  * Example: `"-1"` → throws `"negative numbers not allowed -1"`
  * Multiple negatives → `"negative numbers not allowed -1,-3,-5"`

---

### 🧪 TDD Process

This project strictly follows the TDD cycle:

1. **Red** – Write a failing test for a new feature
2. **Green** – Write the minimal code to make the test pass
3. **Refactor** – Improve structure without changing behavior
4. **Integrate** – Commit after every clean passing state

You can view the full commit history [here](https://github.com/abhnv42/node-kata/commits/master) to trace the evolution of the code, test-first.

---

### 📂 File Structure

```
.
├── index.js               # Implementation of `add()`
├── index.test.js          # Tests using Node's built-in test runner
└── README.md              # This file
```

---

### 🧰 Tech Used

* Node.js v20+
* Native `node:test` module (no external libraries required)
* ECMAScript modules (`.js` with `type: module` in package.json if needed)

---

### ▶️ How to Run

Ensure Node.js (v18+) is installed. Then:

```bash
node --test
```

Or directly run:

```bash
node index.test.js
```

