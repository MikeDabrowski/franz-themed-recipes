'use strict';

const fs = require('fs');
const path = require('path');

// hide adds
document.styleSheets[0].addRule('.aKB', 'display:none;', 1);

module.exports = Franz => {
  const getMessages = function getMessages() {
    let count = 0;

    const valueFromTabs = [...document.querySelectorAll('.aRz.J-KU')]
      .map((f) => f.querySelector('.aDG'))
      .filter((e) => e.style.display !== 'none')
      .map((n) => parseInt(n.textContent) || 0)
      .reduce((a, v) => a + v, 0);

    const inboxElementValue = [...document.querySelectorAll('.aim.ain>div.TO')]
      .filter((el) => el.getAttribute('data-tooltip') === 'Inbox')
      .map(e => e.querySelector('a[title="Inbox"]'))
      .map(e => e.getAttribute('aria-label'))
      .map(at => at.replace(/[^0-9.]/g, ''))
      .map(parseInt)
      .reduce((a, v) => a + v, 0);

    const unreadRows = [...document.querySelectorAll('.zA.zE')].length;

    if (!count && unreadRows) {
      count = unreadRows;
    }

    if (!count && inboxElementValue) {
      count = inboxElementValue;
    }

    if (!count && valueFromTabs) {
      count = valueFromTabs;
    }

    // Just in case we don't end up with a number, set it back to zero (parseInt can return NaN)
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
