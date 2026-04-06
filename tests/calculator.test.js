const { add, subtract, multiply, divide } = require("../src/calculator");

test("add", () => expect(add(2,3)).toBe(5));
test("subtract", () => expect(subtract(5,3)).toBe(2));
test("multiply", () => expect(multiply(2,3)).toBe(6));
test("divide", () => expect(divide(6,3)).toBe(2));
test("divide by zero", () => {
  expect(() => divide(5,0)).toThrow();
});
