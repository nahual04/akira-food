module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      montse: ['Montserrat'],
    },

    extend: {
      colors: {
        transparent: 'transparent',
        
        blackAkira: {
          100: '#222',
          200: '#4D4D4D',
        },
        
        grayAkira: {
          100: '#F2F2F2',
          200: '#D9D9D9',
          300: "#F8F8F8",
        },

        redAkira: {
          100: '#E54658',
          200: '#C5221F',
        },
        
        yellowAkira: {
          100: '#F6B142',
          200: '#FFCB00',
        },

        blueAkira: {
          100: '#F0F0FA',
          200: '#1C6F9E',
          300: '#F0F3F8',
        },

        greenAkira: '#81B057',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
