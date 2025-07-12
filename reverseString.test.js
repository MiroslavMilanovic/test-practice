const reverseString = require("./reverseString");

test('reverse a string', () => {
    expect(reverseString("hello")).toBe("olleh");
}
)

test('reverse a string with multiple words', () => {
    expect(reverseString("hello word")).toBe("drow olleh")
})