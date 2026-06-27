'use strict';

const { runOnLoad } = require('./store');

runOnLoad().catch((error) => {
  console.error('[date-uuid]', error.message);
});
