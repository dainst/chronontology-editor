# Chronontology Editor

## Getting started

```
npm install
npm run build
cp config/Configuration.json.template config/Configuration.json
npm run server
```

The dev server will listen on http://localhost:8084
It requires jeremy to run on http://localhost:4567. Inside jeremy,
objects for the period type have to be existent.

Objects can be accessed via

1. http://localhost:8084/#/edit/object-id
