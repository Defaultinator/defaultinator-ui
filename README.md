# Getting started

## Configuration

The following environment variables can be set in a `.env` file or on the command line. An example with all default values is listed below.

```
PORT=3001
API_BASE_URI="http://localhost"
API_PORT=3000
```

## Dev Environment

### Set up the local API

[dafaultinator-api](https://github.com/cbarnard-r7/defaultinator-api)

### Install dependencies and run

```
npm install
npm run dev
```

### Testing

```
npm test
```

For coverage, run:

```npm test -- --coverage --watchAll```

## Prod Environment

`npm run build` probably, but this isn't set up yet.
