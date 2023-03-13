const { sayHello } = require('./strings');

// Testing:
test("It should return Hello Mohamed", () => {

    // Error:
    // expect(sayHello("Mohamed!")).toBe("Hello Mohamed");

    // Fix:
    expect(sayHello("Mohamed!")).toMatch("Hello Mohamed");
});