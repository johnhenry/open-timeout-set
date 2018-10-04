const timeoutSet = require(".");
var tape = require("tape");
tape.test("test 0", {
    timeout: 200
}, function ({
    plan,
    equal
}) {
    plan(1);
    timeoutSet(100, 1, (number) => {
        equal(number, 1, "Object should be passed into function.");
    })
});
