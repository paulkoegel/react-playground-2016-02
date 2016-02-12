// var WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
  // Let nwb know this is a React app when generic build commands are used
  type: 'react-app',

  babel: {
    stage: 0
  }//,
  // webpack: { // doesn't work yet :( see: https://github.com/insin/nwb/issues/43
  //   plugins: [
  //     new WebpackNotifierPlugin()
  //   ]
  // }
}
