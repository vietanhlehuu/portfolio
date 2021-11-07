module.exports = {
  mode: "jit",
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        section: "10px 10px black",
        "nav-item": "0px 20px 0 -15px #92c8e0, 0px 20px 0 -11px black",
        "nav-link": "0px 0 0 4px black"
      },
      keyframes: {
        'horizontal-debounce': {
          ' 0%, 100%': {
            transform: 'translateX(25%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)'
          },
          '50%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'
          }
        }
      },
      animation: {
        'horizontal-debounce': 'horizontal-debounce 0.5s ease-in-out infinite',
      },
      backgroundImage: {
        body: `radial-gradient(
          black,
          black 1px,
           white 1px,
           white 10px
       )`
      },
      backgroundSize: {
        bodySize: "10px 10px"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
