const { plugin } = require('twrnc');

module.exports = {
  content: [],
  theme: {
    fontFamily: {
      'FiraMono-Regular': ['FiraMono-Regular', 'sans-serif'],
      'FiraMono-Bold': ['FiraMono-Bold', 'sans-serif'],
      'FiraMono-Medium': ['FiraMono-Medium', 'sans-serif'],
    },
    extend: {
      colors: {
        bandit_yellow: '#FFE757',
        bandit_purple: '#8D7DFF',
        bandit_pink: '#FF94FF',
        bandit_orange: '#FF7545',
        bandit_bg_primary: '#F9F3DB',
      },
    },
  },
  plugins: [],
};
