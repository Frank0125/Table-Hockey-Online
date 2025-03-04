

# Air Hockey with your friends.

This project does something (that I think is unique). It includes a server powered by **Socket.IO**.

## Setup Instructions

Follow these steps to replicate the project:

### Install Dependencies
```sh
npm install ts-node @types/node --save-dev
npm install --save-dev typescript
```

### TypeScript Configuration (`tsconfig.json`)
```json
{
  "compilerOptions": {
    "outDir": "./dist",
    "rootDir": "./",
    "module": "CommonJS",
    "esModuleInterop": true
  }
}
```

### Compile the Project
```sh
npx tsc
```

### `package.json` Scripts
```json
{
  "scripts": {
    "build": "tsc",
    "dev": "ts-node server.ts",
    "start": "NODE_ENV=production node server.js",
    "lint": "next lint"
  }
}
```

### Running the Project
- **Build the project:**
  ```sh
  npm run build
  ```
- **Run in development mode:**
  ```sh
  npm run dev
  ```
- **Run in production mode:**
  ```sh
  npm start
  ```

Documentation:
https://docs.google.com/document/d/1b_Mdoujy31AYb3FwL30IZ8z-_SrY5QfSMpDxvzuYgiM/edit?usp=sharing 

Design:
https://www.figma.com/design/iJVKxPAWHygsLtLExpnJEZ/Untitled?node-id=1-2&t=tTCzmv3Z4sMML5NN-1  