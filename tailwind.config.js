const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '960px',
  xl: '1190px',
  xxl: '1344px',
}

module.exports = {
  // corePlugins: { container: false },
  breakpoints,
  theme: {
    extend: {
      fontSize: {
        'xl+': '1.375rem',
        '4xl+': '2.5rem',
      },
    },
    colors: {
      primary: 'var(--color-primary)',
      secondary: 'var(--color-secondary)',
      black: '#000',
      white: '#fff',
      transparent: 'transparent',
      bg: '#18182b',
      card: '#222946',
      kabukicho: '#ff51ab',
      akihabara: '#f4de33',
      blackship: '#af75dd',
      wre: '#00c967',
    },
    screens: {
      mdUp: { min: breakpoints.sm },
      lgUp: { min: breakpoints.md },
      xlUp: { min: breakpoints.lg },
      xxlUp: { min: breakpoints.xl },
      xxxlUp: { min: breakpoints.xxl },

      xxlDown: { max: breakpoints.xxl },
      xlDown: { max: breakpoints.xl },
      lgDown: { max: breakpoints.lg },
      mdDown: { max: breakpoints.md },

      xxl: { max: breakpoints.xxl, min: breakpoints.xl },
      xl: { max: breakpoints.xl, min: breakpoints.lg },
      lg: { max: breakpoints.lg, min: breakpoints.md },
      md: { max: breakpoints.md, min: breakpoints.sm },
      sm: { max: breakpoints.sm }, // sm ONLY
    },
    fontFamily: {
      sans: [
        'Open Sans',
        'Roboto',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      body: [
        '"Bender"',
        'Open Sans',
        'Roboto',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      handwriting: [
        'Caveat',
        'Georgia',
        'Cambria',
        '"Times New Roman"',
        'Times',
        'serif',
      ],
      mono: [
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace',
      ],
    },
  },
  variants: {
    // Some useful comment
  },
  plugins: [
    // Some useful comment
  ],
  purge: {
    content: [
      'src/index.html',
      'src/**/*.js',
      'src/**/*.vue',
      'content/**/*.md',
    ],
    options: {
      whitelist: ['html', 'body'],
      // Whiltelist FontAwesome
      whitelistPatterns: [/^fa-/, /-fa$/, /akihabara/, /kabukicho/],
    },
  },
}
