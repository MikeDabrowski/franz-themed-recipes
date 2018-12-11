'use strict';

const fs = require('fs');
const path = require('path');

// hide adds
document.styleSheets[0].addRule('.aKB', 'display:none;',1);

module.exports = Franz => {
  const getMessages = function getMessages() {
    let count = 0;

    if (document.querySelector('[role="navigation"] .bsU')) {
      count = parseInt(document.querySelector('[role="navigation"] .bsU').innerHTML, 10);
    }

    Franz.setBadge(count);
  };

  const cssFiles = fs.readdirSync(__dirname)
      .filter((fileName) => (fileName.startsWith('theme-') && fileName.endsWith('.css')))
      .map((fileName) => path.join(__dirname, fileName));
  Franz.injectCSS(...cssFiles);

  Franz.loop(getMessages);
};