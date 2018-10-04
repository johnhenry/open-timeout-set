# Open Timeout Set
SetTimeout, but open source and with the callback at the end.

# Usage

```javascript
const timeoutSet = require("open-timeout-set");
const timer0 = timeoutSet(() => {
    console.log("I'm called at the very beginning of the next event loop.")
});
const timer1 = 0 timeoutSet(100, () => {
    console.log("I'm 100 ms later.")
});
const timer2 = 0 timeoutSet(2000, 1, 2, (...args) => {
    console.log("I'm 100 ms later with these arguments:", ...args);
});
clearTimeout(timer0);// unless you're cancelled
clearTimeout(timer1);// unless you're cancelled
clearTimeout(timer2);// unless you're cancelled
```
