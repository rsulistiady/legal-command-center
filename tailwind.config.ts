import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        base: '#0A0F1C',
        panel: '#121A2B',
        panelSoft: '#1A2438',
        brand: '#4F7CFF',
        legal: {
          critical: '#EF4444',
          warning: '#F59E0B',
          pass: '#10B981',
        },
      },
      boxShadow: {
        panel: '0 10px 30px rgba(11, 26, 58, 0.32)',
      },
    },
  },
  plugins: [],
} satisfies Config;
