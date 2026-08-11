export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0A0A0C',
        surface: '#161619',
        bone: '#F3F1EA',
        dim: '#8C8B87',
        signal: '#FF4520',
        acid: '#D4FF3F',
        line: 'rgba(243,241,234,0.12)',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      screens: {
        xs: '420px',
      },
    },
  },
  plugins: [],
}
