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
        
        grayAkira: {
          100: '#F2F2F2',
          200: '#D9D9D9',
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
