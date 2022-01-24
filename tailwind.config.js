const plugin = require("tailwindcss/plugin");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        section: "10px 10px black",
        "nav-item": "0px 20px 0 -15px black, 0px 20px 0 -11px black",
        "nav-link": "0px 0 0 4px black",
      },
      keyframes: {
        "horizontal-debounce": {
          " 0%, 100%": {
            transform: "translateX(25%)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(0)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
        scrolling: {
          from: {
            backgroundPosition: 0,
          },
          to: {
            backgroundPosition: 40,
          },
        },
      },
      animation: {
        "horizontal-debounce": "horizontal-debounce 0.5s ease-in-out infinite",
        letter: "scrolling 2s linear infinite",
      },
      backgroundImage: {
        body: `radial-gradient(
          black,
          black 1px,
           white 1px,
           white 10px
       )`,
        letter: `linear-gradient(
            -45deg,
            white,
            white 25%,
            black 25%,
            black 50%,
            white 50%,
            white 75%,
            black 75%,
            black 100%
        )`,
        "letter-submit": `linear-gradient(
          -45deg,
          white,
          white 25%,
          rgb(234,179,8) 25%,
          rgb(234,179,8) 50%,
          white 50%,
          white 75%,
          rgb(234,179,8) 75%,
          rgb(234,179,8) 100%
      )`,
        "letter-success": `linear-gradient(
            -45deg,
            white,
            white 25%,
            rgb(34,197,94) 25%,
            rgb(34,197,94) 50%,
            white 50%,
            white 75%,
            rgb(34,197,94) 75%,
            rgb(34,197,94) 100%
        )`,
        "letter-error": `linear-gradient(
            -45deg,
            white,
            white 25%,
            rgb(239,68,68) 25%,
            rgb(239,68,68) 50%,
            white 50%,
            white 75%,
            rgb(239,68,68) 75%,
            rgb(239,68,68) 100%
        )`,
      },
      backgroundSize: {
        bodySize: "10px 10px",
      },
      fontFamily: {
        title: ["Bungee Shade", "cursive"],
        body: ["Montserrat", "sans-serif"],
      },
      maxWidth: {
        content: 800,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        ".btn": {
          background: "black",
          display: "inline-flex",
          cursor: "pointer",
          userSelect: "none",
          "& > *": {
            background: "white",
            border: "2px solid black",
            transition: "0.3s",
          },
          "&:hover": {
            "& > *": {
              transform: "translate(5px, -5px)",
            },
          },
        },
        ".link": {
          textDecoration: "underline",
        },
      });
    }),
  ],
};
