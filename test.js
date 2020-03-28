const unhandledError = require('./index.js');

Promise.reject(new Error('THIS_IS_UNHANDLED'));

unhandledError();
