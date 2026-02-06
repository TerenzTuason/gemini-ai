# Gemini AI

A simple React app that lets you chat with Google's Gemini AI. Enter a prompt and get AI-generated text responses.

---

## Setup

**Prerequisites:** Node.js (v16 or higher)

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open `http://localhost:5173` in your browser.

**Other commands:**
- `npm run build` — Build for production
- `npm run preview` — Preview production build locally
- `npm run lint` — Run ESLint

---

## Project Structure

```
gemini-ai/
├── public/              # Static assets (favicon, etc.)
├── src/
│   ├── assets/          # Images, icons
│   ├── pages/           # Page components
│   │   └── Home.jsx     # Main chat interface
│   ├── App.jsx          # App shell + routing
│   ├── main.jsx         # Entry point, mounts React
│   └── index.css        # Global styles (Tailwind)
├── index.html           # HTML template
├── vite.config.js       # Vite bundler config
├── tailwind.config.js   # Tailwind CSS config
└── package.json         # Dependencies & scripts
```

---

## Key Files

| File | Purpose |
|------|---------|
| `src/main.jsx` | Entry point. Renders the app into `#root` in `index.html`. |
| `src/App.jsx` | Defines routes. Currently has one route: `/` → Home page. |
| `src/pages/Home.jsx` | Main UI. Handles prompt input, calls Gemini API, displays response. |
| `index.html` | Single HTML page. Loads `main.jsx` as a module. |
| `vite.config.js` | Vite settings (dev server, build, React plugin). |

---

## How It Works

1. **User input** — Type a prompt in the input field on the Home page.
2. **API call** — Click "Enter" → app calls Google Gemini (`gemini-1.5-flash`) via `@google/generative-ai`.
3. **Response** — AI output is shown in the gray box below.

**Tech stack:** React, Vite, Tailwind CSS, React Router, SweetAlert2, Google Generative AI SDK.

---

## Adding New Pages

1. Create a component in `src/pages/` (e.g. `About.jsx`).
2. Import it in `App.jsx` and add a route:

```jsx
<Route path="/about" element={<About />} />
```

---

## API Key

The app uses a Google Gemini API key. For production, move it to a `.env` file:

```
VITE_GEMINI_API_KEY=your_key_here
```

Then in code: `import.meta.env.VITE_GEMINI_API_KEY`
