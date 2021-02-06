const path = require('path');

module.exports = {
  lintOnSave: true,
  configureWebpack: config => {
    Object.assign(config.resolve.alias, {
      // General folders
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
      '@router': path.resolve(__dirname, './src/router'),
      '@views': path.resolve(__dirname, './src/views'),
      // Components folders
      // Main folders
      '@': path.resolve(__dirname, './src'),
      '@@': path.resolve(__dirname, '.'),
    });
  },
};
