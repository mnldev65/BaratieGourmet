const fs = require('fs');
const path = require('path');

// ============================================
// 🎨 CORES PARA O CONSOLE
// ============================================
const colors = {
    reset: '\x1b[0m',
    green: '\x1b[32m',
    blue: '\x1b[36m',
    yellow: '\x1b[33m',
    red: '\x1b[31m',
    magenta: '\x1b[35m'
};

const log = {
    success: (msg) => console.log(`${colors.green}✅ ${msg}${colors.reset}`),
    info: (msg) => console.log(`${colors.blue}ℹ️  ${msg}${colors.reset}`),
    warning: (msg) => console.log(`${colors.yellow}⚠️  ${msg}${colors.reset}`),
    error: (msg) => console.log(`${colors.red}❌ ${msg}${colors.reset}`),
    step: (msg) => console.log(`${colors.magenta}🚀 ${msg}${colors.reset}`)
};

// ============================================
// 📁 FUNÇÃO: CRIAR PASTAS
// ============================================
function createFolders(structure) {
    log.step('Criando estrutura de pastas...\n');

    let foldersCreated = 0;

    structure.folders.forEach(folder => {
        const folderPath = path.join(process.cwd(), folder);

        if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath, { recursive: true });
            log.success(`Pasta criada: ${folder}`);
            foldersCreated++;
        } else {
            log.warning(`Pasta já existe: ${folder}`);
        }
    });

    console.log(`\n${colors.green}📦 Total de pastas criadas: ${foldersCreated}${colors.reset}\n`);
}

// ============================================
// 📄 FUNÇÃO: CRIAR ARQUIVO
// ============================================
function createFile(filePath, content) {
    const fullPath = path.join(process.cwd(), filePath);
    const dir = path.dirname(fullPath);

    // Garante que o diretório existe
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }

    // Cria o arquivo se não existir
    if (!fs.existsSync(fullPath)) {
        fs.writeFileSync(fullPath, content, 'utf8');
        log.success(`Arquivo criado: ${filePath}`);
        return true;
    } else {
        log.warning(`Arquivo já existe: ${filePath}`);
        return false;
    }
}

// ============================================
// 📄 FUNÇÃO: CRIAR ARQUIVOS BASE
// ============================================
function createBaseFiles() {
    log.step('Criando arquivos de configuração...\n');

    let filesCreated = 0;

    // .gitignore
    if (createFile('.gitignore', `# Dependencies
node_modules/
package-lock.json
yarn.lock

# Build
dist/
build/
.cache/

# Environment
.env
.env.local
.env.production

# IDE
.vscode/
.idea/
*.swp
*.swo
*~

# OS
.DS_Store
Thumbs.db

# Logs
logs/
*.log
npm-debug.log*

# Testing
coverage/
.nyc_output/`)) filesCreated++;

    // README.md
    if (createFile('README.md', `# 🍽️ Restaurante Sanji

Site institucional inspirado no personagem Sanji de One Piece.

## 🚀 Tecnologias

- HTML5 Semântico
- CSS3 (Custom Properties, Grid, Flexbox)
- JavaScript Vanilla (ES6+)
- Atomic Design Pattern

## 📁 Estrutura do Projeto

\`\`\`
restaurante-sanji/
├── src/
│   ├── components/    # Componentes reutilizáveis (Atomic Design)
│   ├── pages/         # Páginas do site
│   ├── styles/        # Estilos globais
│   └── assets/        # Imagens, fontes, vídeos
\`\`\`

## 🎨 Paleta de Cores (Tema Sanji)

- Azul Marinho: #1a2332
- Dourado: #d4af37
- Preto Elegante: #0a0a0a
- Branco: #ffffff

## 📦 Como Rodar

\`\`\`bash
npm install
npm run dev
\`\`\`

## 👨‍💻 Desenvolvedor

Projeto desenvolvido como estudo de Front-End moderno.`)) filesCreated++;

    // .editorconfig
    if (createFile('.editorconfig', `root = true

[*]
charset = utf-8
indent_style = space
indent_size = 2
end_of_line = lf
insert_final_newline = true
trim_trailing_whitespace = true

[*.md]
trim_trailing_whitespace = false`)) filesCreated++;

    // .prettierrc
    if (createFile('.prettierrc', `{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 80,
  "arrowParens": "avoid"
}`)) filesCreated++;

    // index.html
    if (createFile('index.html', `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Restaurante Sanji - Experiência gastronômica inspirada no mestre culinário de One Piece">
  <title>Restaurante Sanji | Culinária de Alto Nível</title>
  <link rel="stylesheet" href="./src/styles/main.css">
</head>
<body>
  <div id="app">
    <h1>🍽️ Restaurante Sanji</h1>
    <p>Em construção...</p>
  </div>
  <script type="module" src="./src/main.js"></script>
</body>
</html>`)) filesCreated++;

    console.log(`\n${colors.green}📄 Total de arquivos criados: ${filesCreated}${colors.reset}\n`);
}

// ============================================
// 🎨 FUNÇÃO: CRIAR ARQUIVOS CSS
// ============================================
function createStyleFiles() {
    log.step('Criando arquivos de estilos...\n');

    let filesCreated = 0;

    // main.css
    if (createFile('src/styles/main.css', `/**
 * 🎨 Restaurante Sanji - Estilos Principais
 */

/* ===== BASE ===== */
@import './base/_reset.css';
@import './base/_variables.css';
@import './base/_typography.css';

/* ===== THEMES ===== */
@import './themes/_sanji-theme.css';

/* ===== UTILITIES ===== */
@import './utilities/_helpers.css';`)) filesCreated++;

    // _reset.css
    if (createFile('src/styles/base/_reset.css', `/**
 * 🔄 CSS Reset Moderno
 */

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 16px;
  scroll-behavior: smooth;
}

body {
  min-height: 100vh;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}

input,
button,
textarea,
select {
  font: inherit;
}

button {
  cursor: pointer;
  border: none;
  background: none;
}

a {
  text-decoration: none;
  color: inherit;
}

ul,
ol {
  list-style: none;
}`)) filesCreated++;

    // _variables.css
    if (createFile('src/styles/base/_variables.css', `/**
 * 🎨 Variáveis CSS - Design System
 */

:root {
  /* ===== CORES TEMA SANJI ===== */
  --color-primary: #1a2332;
  --color-secondary: #d4af37;
  --color-accent: #c41e3a;
  --color-dark: #0a0a0a;
  --color-light: #ffffff;
  --color-gray: #6b7280;
  --color-gray-light: #f3f4f6;
  
  /* ===== TIPOGRAFIA ===== */
  --font-primary: 'Inter', -apple-system, sans-serif;
  --font-heading: 'Playfair Display', Georgia, serif;
  
  /* ===== TAMANHOS ===== */
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.25rem;
  --font-size-2xl: 1.5rem;
  --font-size-3xl: 1.875rem;
  --font-size-4xl: 2.25rem;
  
  /* ===== ESPAÇAMENTOS ===== */
  --space-sm: 0.5rem;
  --space-md: 1rem;
  --space-lg: 1.5rem;
  --space-xl: 2rem;
  --space-2xl: 3rem;
  
  /* ===== OUTROS ===== */
  --radius-md: 0.5rem;
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  --transition-base: 250ms ease-in-out;
}`)) filesCreated++;

    // _typography.css
    if (createFile('src/styles/base/_typography.css', `/**
 * ✍️ Tipografia
 */

body {
  font-family: var(--font-primary);
  font-size: var(--font-size-base);
  color: var(--color-dark);
  background-color: var(--color-light);
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
  font-weight: 700;
  line-height: 1.2;
  color: var(--color-primary);
}

h1 { font-size: var(--font-size-4xl); }
h2 { font-size: var(--font-size-3xl); }
h3 { font-size: var(--font-size-2xl); }`)) filesCreated++;

    // _sanji-theme.css
    if (createFile('src/styles/themes/_sanji-theme.css', `/**
 * 🎭 Tema Sanji
 */

.theme-sanji {
  --primary: var(--color-primary);
  --secondary: var(--color-secondary);
}`)) filesCreated++;

    // _helpers.css
    if (createFile('src/styles/utilities/_helpers.css', `/**
 * 🛠️ Classes Utilitárias
 */

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 var(--space-md);
}

.text-center { text-align: center; }
.mt-1 { margin-top: var(--space-sm); }
.mt-2 { margin-top: var(--space-md); }
.mt-3 { margin-top: var(--space-lg); }`)) filesCreated++;

    console.log(`\n${colors.green}🎨 Total de arquivos CSS criados: ${filesCreated}${colors.reset}\n`);
}

// ============================================
// 📄 FUNÇÃO: CRIAR ARQUIVO MAIN.JS
// ============================================
function createMainJS() {
    log.step('Criando arquivo JavaScript principal...\n');

    createFile('src/main.js', `/**
 * 🍽️ Restaurante Sanji - Main Entry Point
 */

console.log('🍽️ Bem-vindo ao Restaurante Sanji!');

document.addEventListener('DOMContentLoaded', () => {
  console.log('✅ DOM carregado com sucesso!');
});`);
}

// ============================================
// 📄 FUNÇÃO: CRIAR COMPONENTES EXEMPLO
// ============================================
function createExampleComponents() {
    log.step('Criando componentes exemplo...\n');

    let filesCreated = 0;

    // Button Component
    if (createFile('src/components/atoms/Button/Button.js', `// Button Component
export default class Button {
  constructor(text, onClick) {
    this.text = text;
    this.onClick = onClick;
  }
  
  render() {
    const button = document.createElement('button');
    button.className = 'btn';
    button.textContent = this.text;
    button.addEventListener('click', this.onClick);
    return button;
  }
}`)) filesCreated++;

    if (createFile('src/components/atoms/Button/Button.css', `.btn {
  padding: var(--space-sm) var(--space-lg);
  background: var(--color-secondary);
  color: var(--color-dark);
  border-radius: var(--radius-md);
  font-weight: 600;
  transition: var(--transition-base);
  cursor: pointer;
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}`)) filesCreated++;

    console.log(`\n${colors.green}🧩 Total de componentes exemplo criados: ${filesCreated / 2}${colors.reset}\n`);
}

// ============================================
// 🚀 FUNÇÃO PRINCIPAL
// ============================================
async function main() {
    console.log(`
${colors.blue}
╔═══════════════════════════════════════════════╗
║                                               ║
║   🍽️  RESTAURANTE SANJI - SETUP AUTOMÁTICO   ║
║                                               ║
╚═══════════════════════════════════════════════╝
${colors.reset}
  `);

    try {
        // Ler estrutura do projeto
        const structurePath = path.join(process.cwd(), 'project-structure.json');

        if (!fs.existsSync(structurePath)) {
            log.error('Arquivo project-structure.json não encontrado!');
            log.info('Certifique-se de que o arquivo está na raiz do projeto.');
            process.exit(1);
        }

        const structure = JSON.parse(fs.readFileSync(structurePath, 'utf8'));

        // Executar criação
        createFolders(structure);
            createBaseFiles();
    createStyleFiles();
    createMainJS();
    createExampleComponents();
    
    // Mensagem de sucesso
    console.log(`
${colors.green}
╔═══════════════════════════════════════════════╗
║                                               ║
║        ✅ SETUP CONCLUÍDO COM SUCESSO!        ║
║                                               ║
╚═══════════════════════════════════════════════╝
${colors.reset}

${colors.blue}📁 Estrutura do projeto criada com sucesso!${colors.reset}

${colors.yellow}📋 Próximos passos:${colors.reset}

1. ${colors.green}Instalar dependências:${colors.reset}
   npm install

2. ${colors.green}Inicializar Git:${colors.reset}
   git init
   git add .
   git commit -m "🎉 Inicial commit - Estrutura do projeto"

3. ${colors.green}Abrir no navegador:${colors.reset}
   Abra o arquivo index.html no navegador
   Ou use: npx serve .

${colors.magenta}🚀 Projeto pronto para desenvolvimento!${colors.reset}
    `);
    
  } catch (error) {
    log.error(`Erro durante o setup: ${error.message}`);
    console.error(error);
    process.exit(1);
  }
}

// ============================================
// 🎬 EXECUTAR
// ============================================
main();