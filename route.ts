@tailwind base;
@tailwind components;
@tailwind utilities;

/* ─── Design Tokens ──────────────────────────────────────────────────────── */
:root {
  /* Brand colors */
  --color-brand:        #4a72ef;
  --color-brand-light:  #6b93f5;
  --color-brand-dark:   #3355d4;

  /* Backgrounds */
  --bg-primary:   #ffffff;
  --bg-secondary: #f7f8fc;
  --bg-tertiary:  #eef0f8;

  /* Text */
  --text-primary:   #0f172a;
  --text-secondary: #475569;
  --text-muted:     #94a3b8;

  /* Borders */
  --border-color:   #e2e8f0;
  --border-radius:  12px;

  /* Shadows */
  --shadow-sm:  0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04);
  --shadow-md:  0 4px 16px rgba(74,114,239,0.12), 0 2px 8px rgba(0,0,0,0.06);
  --shadow-lg:  0 12px 40px rgba(74,114,239,0.18), 0 4px 16px rgba(0,0,0,0.08);

  /* Chat bubbles */
  --bubble-user:      #4a72ef;
  --bubble-user-text: #ffffff;
  --bubble-bot:       #f1f5f9;
  --bubble-bot-text:  #0f172a;
}

/* ─── Base Resets ─────────────────────────────────────────────────────────── */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  background-color: var(--bg-secondary);
  color: var(--text-primary);
  font-family: var(--font-geist-sans, system-ui, sans-serif);
  line-height: 1.6;
}

/* ─── Scrollbar ─────────────────────────────────────────────────────────── */
::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-track {
  background: transparent;
}
::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 999px;
}
::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}

/* ─── Focus Styles ────────────────────────────────────────────────────────── */
:focus-visible {
  outline: 2px solid var(--color-brand);
  outline-offset: 2px;
  border-radius: 4px;
}

/* ─── Utility Classes ─────────────────────────────────────────────────────── */
@layer utilities {
  .animate-delay-100 { animation-delay: 100ms; }
  .animate-delay-200 { animation-delay: 200ms; }
  .animate-delay-300 { animation-delay: 300ms; }
  .animate-delay-400 { animation-delay: 400ms; }
  .animate-delay-500 { animation-delay: 500ms; }

  .text-balance { text-wrap: balance; }
}
