const {injectBabelPlugin} = require('react-app-rewired');

module.exports = function override(config, env) {
    config = injectBabelPlugin(['import', {libraryName: 'antd', style: true}], config);  // change importing css to less
  return config;
}