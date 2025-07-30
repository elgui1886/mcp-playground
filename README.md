# MCP Playground

Un progetto TypeScript per sperimentare con il Model Context Protocol.

## Struttura del Progetto

```
mcp-playground/
├── src/                 # File sorgente TypeScript
│   └── index.ts        # Entry point principale
├── dist/               # File JavaScript compilati
├── node_modules/       # Dipendenze npm
├── package.json        # Configurazione npm
├── tsconfig.json       # Configurazione TypeScript
└── README.md          # Questo file
```

## Scripts Disponibili

- `npm run build` - Compila il progetto TypeScript
- `npm start` - Esegue il progetto compilato
- `npm run dev` - Compila ed esegue il progetto
- `npm run watch` - Compila in modalità watch (ricompila automaticamente)

## Come Iniziare

1. Installa le dipendenze:
   ```bash
   npm install
   ```

2. Compila il progetto:
   ```bash
   npm run build
   ```

3. Esegui il progetto:
   ```bash
   npm start
   ```

## Sviluppo

Per sviluppare attivamente, puoi usare:

```bash
npm run watch
```

Questo comando terrà il compilatore in modalità watch e ricompilerà automaticamente quando modifichi i file sorgente.

## Note

Questo progetto è configurato con:
- TypeScript con strict mode abilitato
- Target ES2016
- CommonJS modules
- Source e output directories separate (src/ → dist/)
