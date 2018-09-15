const {injectBabelPlugin} = require('react-app-rewired');
const rewireVendorSplitting = require("react-app-rewire-vendor-splitting");

module.exports = function override(config, env) {
  // change importing css to less
  config = injectBabelPlugin(['import', {libraryName: 'antd', style: true}], config);  

  // splitting vendors into a separate chunk
  config = rewireVendorSplitting(config, env);
  return config;
}