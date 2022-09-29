const ignoreTransitionProps = require('postcss-ignore-transition-properties');
const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    ignoreTransitionProps(),
    autoprefixer()
  ]
}