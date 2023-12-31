const { test, expect } = require("@jest/globals");
const { spawn } = require("child_process");

test("Insufficient params", () => {
    const main = spawn("node", ["main.js", "avg"]);
    const outputs = [];
    main.stdout.on("data", (output) => {
        outputs.push(output);
    });

    main.stdout.on("end", () => {
        const output = outputs.join("").trim();
        expect(output).toBe("Insufficient parameter!");
    });
});

test("Insufficient params", () => {
    const main = spawn("node", ["main.js", "prime"]);
    const outputs = [];
    main.stdout.on("data", (output) => {
        outputs.push(output);
    });

    main.stdout.on("end", () => {
        const output = outputs.join("").trim();
        expect(output).toBe("Insufficient parameter!");
    });
});

test("Insufficient params", () => {
    const main = spawn("node", ["main.js", "fact"]);
    const outputs = [];
    main.stdout.on("data", (output) => {
        outputs.push(output);
    });

    main.stdout.on("end", () => {
        const output = outputs.join("").trim();
        expect(output).toBe("Insufficient parameter!");
    });
});

test("Wrong result", () => {
    const main = spawn("node", ["main.js", "avg", "4", "6", "8"]);
    const outputs = [];
    main.stdout.on("data", (output) => {
        outputs.push(output);
    });

    main.stdout.on("end", () => {
        const output = outputs.join("").trim();
        expect(output).toBe("6");
    });
});

test("Wrong result", () => {
    const main = spawn("node", ["main.js", "prime", "3"]);
    const outputs = [];
    main.stdout.on("data", (output) => {
        outputs.push(output);
    });

    main.stdout.on("end", () => {
        const output = outputs.join("").trim();
        expect(output).toBe("true");
    });
});

test("Wrong result", () => {
    const main = spawn("node", ["main.js", "fact", "5"]);
    const outputs = [];
    main.stdout.on("data", (output) => {
        outputs.push(output);
    });

    main.stdout.on("end", () => {
        const output = outputs.join("").trim();
        expect(output).toBe("120");
    });
});


test("Wrong command", () => {
    const main = spawn("node", ["main.js", "sum", "1", "2", "3"]);
    const outputs = [];
    main.stdout.on("data", (output) => {
        outputs.push(output);
    });

    main.stdout.on("end", () => {
        const output = outputs.join("").trim();
        expect(output).toBe("Wrong command!");
    });
});
