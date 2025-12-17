# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/80b1c876-49b1-45e4-ba03-733d12f79b96

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/80b1c876-49b1-45e4-ba03-733d12f79b96) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/80b1c876-49b1-45e4-ba03-733d12f79b96) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)


# Kaptue Innovation

🚀 **Software Automation Powered by AI**

## Descrizione

Kaptue Innovation è una startup specializzata in soluzioni software di automazione potenziate dall'intelligenza artificiale. Offriamo soluzioni innovative per qualsiasi tipo di business, con automazione e AI come differenziatori chiave.

## Tecnologie Utilizzate

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, shadcn/ui
- **Animazioni**: Framer Motion (CSS animations)
- **Routing**: React Router DOM
- **Backend Integration**: n8n webhooks

## Funzionalità

### 🏠 Landing Page
- Hero section con animazioni dinamiche
- Sezione servizi (AI Integration, Automation, Custom Solutions)
- Sezione About
- Design dark theme con accenti cyan

### 💬 Chat Widget
- Chatbot integrato con webhook n8n
- Persistenza sessione con chat_id univoco
- Gestione errori avanzata con logging
- Indicatore di digitazione animato
- Messaggio di benvenuto personalizzato

## Struttura Progetto

```
src/
├── assets/           # Immagini e risorse
├── components/       # Componenti React
│   ├── ui/          # Componenti shadcn/ui
│   ├── ChatWidget.tsx
│   ├── ChatMessage.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── Services.tsx
│   ├── About.tsx
│   └── Logo.tsx
├── hooks/           # Custom hooks
│   └── useChatId.ts # Hook per gestione chat_id
├── pages/           # Pagine dell'app
└── lib/             # Utility functions
```

## Configurazione

### Variabili d'Ambiente

Il chatbot utilizza un webhook n8n per le risposte automatiche. L'URL del webhook è configurato in `src/components/ChatWidget.tsx`.

### Installazione

```bash
# Clona il repository
git clone <YOUR_GIT_URL>

# Naviga nella directory
cd <YOUR_PROJECT_NAME>

# Installa le dipendenze
npm install

# Avvia il server di sviluppo
npm run dev
```

## Design System

- **Tema**: Dark mode con gradients dinamici
- **Colore primario**: Cyan (#00D4FF)
- **Font**: Sistema moderno con typography responsive
- **Animazioni**: Transizioni fluide e micro-interazioni

## Deploy

Il progetto può essere pubblicato direttamente da [Lovable](https://lovable.dev) tramite Share → Publish.

## Licenza

© 2024 Kaptue Innovation. Tutti i diritti riservati.

---

**Contatti**: [kaptue.innovation](https://kaptue.innovation)
