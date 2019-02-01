"use strict";

const _electron = require('electron');
const path = require('path');
const fs = require('fs');

const getTeamIcon = function getTeamIcon(count = 0) {
  let countTeamIconCheck = count;
  let bgUrl = null;
  const teamMenu = document.querySelector('#team_menu');

  if (teamMenu) {
    teamMenu.click();
    const icon = document.querySelector('.team_icon');

    if (icon) {
      bgUrl = window.getComputedStyle(icon, null).getPropertyValue('background-image');
      bgUrl = /^url\((['"]?)(.*)\1\)$/.exec(bgUrl);
      bgUrl = bgUrl ? bgUrl[2] : '';
    }

    setTimeout(() => {
      document.querySelector('.team_menu').remove();
      document.querySelector('#msg_input .ql-editor').focus();
    }, 10);
  }

  countTeamIconCheck += 1;

  if (bgUrl) {
    _electron.ipcRenderer.sendToHost('avatar', bgUrl);
  } else if (countTeamIconCheck <= 5) {
    setTimeout(() => {
      getTeamIcon(countTeamIconCheck + 1);
    }, 2000);
  }
};

const SELECTOR_CHANNELS_UNREAD = '.p-channel_sidebar__channel--unread:not(.p-channel_sidebar__channel--muted)';

module.exports = Franz => {
  const cssFiles = fs.readdirSync(__dirname)
      .filter((fileName) => (fileName.endsWith('.css')))
      .map((fileName) => path.join(__dirname, fileName));
  Franz.injectCSS(...cssFiles);

  const getMessages = () => {
    const directMessages = document.querySelectorAll(`${SELECTOR_CHANNELS_UNREAD} .p-channel_sidebar__badge`).length;
    const allMessages = document.querySelectorAll(SELECTOR_CHANNELS_UNREAD).length - directMessages;
    Franz.setBadge(directMessages, allMessages);
  };

  Franz.loop(getMessages);
  setTimeout(() => {
    getTeamIcon();
  }, 4000);
};