module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'textwhite':'#f2fedc',
        'lightgray': '#D2D7DF',
        'gray':'#a1acbd',
        'darkgray':'#3d4856',
        'minionyellow': '#F2DC5D',
        'yellow':'#ffd26e',
        'rubyred': '#A4031F',
        'redhover': '#cd393c',
        'richblack': '#07070A',
        'rhino':'#312C5B',
      },
      zIndex: {
        '-1': '-1',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
