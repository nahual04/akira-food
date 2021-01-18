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
        
        blackAkira: '#222',
        
        rojoAkira: {
          100: '#E54658',
          200: '#C5221F',
        },
        
        yellowAkira: {
          100: '#F6B142',
          200: '#FFCB00',
        },

        blueAkira: {
          100: '#F0F0FA',
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
