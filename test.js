const unhandledError = require('./index.js');

unhandledError();

// Should show an UNHANDLED ERROR with the reason below.
Promise.reject(new Error('Test unhandled rejection'));
