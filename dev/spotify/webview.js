'use strict';

const fs = require('fs');
const path = require('path');

module.exports = Franz => {

  const cssFiles = fs.readdirSync(__dirname)
    .filter((fileName) => (fileName.startsWith('theme-') && fileName.endsWith('.css')));
  cssFiles.forEach((fileName) => {
    Franz.injectCSS(path.join(__dirname, fileName));
  });
  Franz.loop(getMessages);
};
