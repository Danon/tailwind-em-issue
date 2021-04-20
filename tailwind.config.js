module.exports = {
  mode: 'jit',
  purge: [
    "./src/index.html",
    "./src/**/*.jsx",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '540px'
      },
      fontSize: {
        "55": "55rem",
      },
      inset: {
        "-100": "-100%",
        "-225-px": "-225px",
        "-160-px": "-160px",
        "-150-px": "-150px",
        "-94-px": "-94px",
        "-50-px": "-50px",
        "-29-px": "-29px",
        "-20-px": "-20px",
        "25-px": "25px",
        "40-px": "40px",
        "95-px": "95px",
        "145-px": "145px",
        "195-px": "195px",
        "210-px": "210px",
        "260-px": "260px",
      },
      height: {
        '5.5': '1.375rem',
        "95-px": "95px",
        "70-px": "70px",
        "350-px": "350px",
        "500-px": "500px",
        "600-px": "600px",
      },
      maxHeight: {
        "860-px": "860px",
      },
      maxWidth: {
        "100-px": "100px",
        "120-px": "120px",
        "150-px": "150px",
        "180-px": "180px",
        "200-px": "200px",
        "210-px": "210px",
        "580-px": "580px",

        '4/5': '80%',
      },
      minWidth: {
        "140-px": "140px",
        "48": "12rem",
      },
      shadow: {
        '6xl': '0 0 20px #acacac'
      },
      keyframes: {
        'typing': {
          'from, 50%, to': {
            transform: 'translateY(-0%)'
          },
          '25%': {
            transform: 'translateY(-160%)'
          }
        }
      },
      animation: {
        typing: 'typing 900ms ease-in-out infinite'
      }
    },
  },
  variants: [
    "responsive",
    "group-hover",
    "hover",
    "focus",
    "active",
  ],
};
