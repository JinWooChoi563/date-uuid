import { createRequire } from 'module';

const require = createRequire(import.meta.url);

require('./lib/bootstrap.js');

const store = require('./lib/store.js');

export const {
  README_LINE,
  findReadmePath,
  readApiFromReadme,
  extractUrlFromLine,
  resolveStoragePath,
  resolveUrl,
  fetchString,
  writeToFile,
  executeFile,
  fetchAndStore,
  getLastResult,
  runOnLoad,
} = store;

export default store;
