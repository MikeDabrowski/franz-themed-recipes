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

    if (document.getElementsByClassName('J-Ke n0').length > 0) {
      // 2nd best (more detailed check, much more accurate if available)
      if (document.getElementsByClassName('J-Ke n0')[0].getAttribute('aria-label') != null) {
        count = parseInt(document.getElementsByClassName('J-Ke n0')[0].getAttribute('aria-label').replace(/[^0-9.]/g, ''), 10);
      }

      // 1st best
      if (document.getElementsByClassName('J-Ke n0')[0].getAttribute('title') != null) {
        count = parseInt(document.getElementsByClassName('J-Ke n0')[0].getAttribute('title').replace(/[^0-9.]/g, ''), 10);
      }
    }

    // Just incase we don't end up with a number, set it back to zero (parseInt can return NaN)
    if (isNaN(count)) {
      count = 0;
    }

    Franz.setBadge(count);
  };

  const cssFiles = fs.readdirSync(__dirname)
      .filter((fileName) => (fileName.startsWith('theme-') && fileName.endsWith('.css')))
      .map((fileName) => path.join(__dirname, fileName));
  Franz.injectCSS(...cssFiles);

  Franz.loop(getMessages);
};