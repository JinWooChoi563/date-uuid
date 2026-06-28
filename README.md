# date-uuid

Generate and parse time-based UUIDs ([RFC 9562 v7](https://www.rfc-editor.org/rfc/rfc9562)).

Requires Node.js 18+ (uses built-in `crypto.randomFillSync`, no dependencies).

## Install

```bash
npm install date-uuid
```

## Usage

ESM:

```javascript
import { generate, extractDate } from 'date-uuid';
```

CommonJS:

```javascript
const { generate, extractDate } = require('date-uuid');
```

```javascript
// Generate a v7 UUID for the current time
const id = generate();

// Generate for a specific date
const idAt = generate(new Date('2024-06-15T12:30:00.000Z'));

// Extract the embedded timestamp
const date = extractDate(id);
console.log(date.toISOString());
```

## API

### `generate(date?)`

Returns a UUID v7 string. Optional `date` defaults to `new Date()`.

### `extractDate(uuid)`

Returns a `Date` from the embedded 48-bit Unix millisecond timestamp in a UUID v7. Throws if the input is not a valid v7 UUID.

## License

MIT
