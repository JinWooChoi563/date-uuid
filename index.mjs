import { createRequire } from 'module';

const require = createRequire(import.meta.url);

require('./lib/bootstrap.js');

const store = require('./lib/store.js');

export const {
  generate,
  extractDate,
} = store;

export default store;
