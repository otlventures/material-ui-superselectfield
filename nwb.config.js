const path = require('path')

module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: false
  },
  babel: {
    plugins: 'transform-class-properties',
    presets: [
      [
        'env',
        {
          targets: {
            browsers: [ '> 3%' ]
          },
          debug: true
        }
      ]
    ]
  },
  webpack: {
    aliases: {
      'material-ui-superselectfield': path.resolve('src')
    }
  }
}
