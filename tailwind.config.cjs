module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        page: '#111111',
        panel: '#1a1a1a',
        panelDark: '#0d0d18',
        siteBlack: '#000000',
        accent: '#E00000'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif']
      },
      borderRadius: {
        sm: '4px',
        md: '6px',
        lg: '8px'
      }
    }
  },
  plugins: []
}
