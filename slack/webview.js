'use strict';

var _electron = require('electron');
const fs = require('fs');
const path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  const getMessages = () => {
    const directMessages = document.querySelectorAll(`${SELECTOR_CHANNELS_UNREAD} .p-channel_sidebar__badge`).length;
    const allMessages = document.querySelectorAll(SELECTOR_CHANNELS_UNREAD).length - directMessages;

    // set Franz badge
    Franz.setBadge(directMessages, allMessages);
  };
  Franz.loop(getMessages);

  setTimeout(() => {
    getTeamIcon();
  }, 4000);

  // inject franz.css stylesheet
  Franz.injectCSS(_path2.default.join(__dirname, 'general.css'));
  const cssFiles = fs.readdirSync(__dirname).filter((fileName) => (fileName.startsWith('theme-') && fileName.endsWith('.css')));
  cssFiles.forEach((fileName) => {
    Franz.injectCSS(path.join(__dirname, fileName));
  });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNsYWNrL3dlYnZpZXcuanMiXSwibmFtZXMiOlsiZ2V0VGVhbUljb24iLCJjb3VudCIsImNvdW50VGVhbUljb25DaGVjayIsImJnVXJsIiwidGVhbU1lbnUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGljayIsImljb24iLCJ3aW5kb3ciLCJnZXRDb21wdXRlZFN0eWxlIiwiZ2V0UHJvcGVydHlWYWx1ZSIsImV4ZWMiLCJzZXRUaW1lb3V0IiwicmVtb3ZlIiwiZm9jdXMiLCJzZW5kVG9Ib3N0IiwiU0VMRUNUT1JfQ0hBTk5FTFNfVU5SRUFEIiwibW9kdWxlIiwiZXhwb3J0cyIsIkZyYW56IiwiZ2V0TWVzc2FnZXMiLCJkaXJlY3RNZXNzYWdlcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsZW5ndGgiLCJhbGxNZXNzYWdlcyIsInNldEJhZGdlIiwibG9vcCIsImluamVjdENTUyIsImpvaW4iLCJfX2Rpcm5hbWUiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0E7Ozs7OztBQUVBLE1BQU1BLGNBQWMsU0FBU0EsV0FBVCxDQUFxQkMsUUFBUSxDQUE3QixFQUFnQztBQUNsRCxNQUFJQyxxQkFBcUJELEtBQXpCO0FBQ0EsTUFBSUUsUUFBUSxJQUFaOztBQUVBLFFBQU1DLFdBQVdDLFNBQVNDLGFBQVQsQ0FBdUIsWUFBdkIsQ0FBakI7QUFDQSxNQUFJRixRQUFKLEVBQWM7QUFDWkEsYUFBU0csS0FBVDs7QUFFQSxVQUFNQyxPQUFPSCxTQUFTQyxhQUFULENBQXVCLFlBQXZCLENBQWI7QUFDQSxRQUFJRSxJQUFKLEVBQVU7QUFDUkwsY0FBUU0sT0FBT0MsZ0JBQVAsQ0FBd0JGLElBQXhCLEVBQThCLElBQTlCLEVBQW9DRyxnQkFBcEMsQ0FBcUQsa0JBQXJELENBQVI7QUFDQVIsY0FBUSx5QkFBeUJTLElBQXpCLENBQThCVCxLQUE5QixDQUFSO0FBQ0FBLGNBQVFBLFFBQVFBLE1BQU0sQ0FBTixDQUFSLEdBQW1CLEVBQTNCO0FBQ0Q7O0FBRURVLGVBQVcsTUFBTTtBQUNmUixlQUFTQyxhQUFULENBQXVCLFlBQXZCLEVBQXFDUSxNQUFyQztBQUNBVCxlQUFTQyxhQUFULENBQXVCLHVCQUF2QixFQUFnRFMsS0FBaEQ7QUFDRCxLQUhELEVBR0csRUFISDtBQUlEOztBQUVEYix3QkFBc0IsQ0FBdEI7O0FBRUEsTUFBSUMsS0FBSixFQUFXO0FBQ1QsMEJBQVlhLFVBQVosQ0FBdUIsUUFBdkIsRUFBaUNiLEtBQWpDO0FBQ0QsR0FGRCxNQUVPLElBQUlELHNCQUFzQixDQUExQixFQUE2QjtBQUNsQ1csZUFBVyxNQUFNO0FBQ2ZiLGtCQUFZRSxxQkFBcUIsQ0FBakM7QUFDRCxLQUZELEVBRUcsSUFGSDtBQUdEO0FBQ0YsQ0E5QkQ7O0FBZ0NBLE1BQU1lLDJCQUEyQiw2RUFBakM7O0FBRUFDLE9BQU9DLE9BQVAsR0FBa0JDLEtBQUQsSUFBVztBQUMxQixRQUFNQyxjQUFjLE1BQU07QUFDeEIsVUFBTUMsaUJBQWlCakIsU0FBU2tCLGdCQUFULENBQTJCLEdBQUVOLHdCQUF5Qiw0QkFBdEQsRUFBbUZPLE1BQTFHO0FBQ0EsVUFBTUMsY0FBY3BCLFNBQVNrQixnQkFBVCxDQUEwQk4sd0JBQTFCLEVBQW9ETyxNQUFwRCxHQUE2REYsY0FBakY7O0FBRUE7QUFDQUYsVUFBTU0sUUFBTixDQUFlSixjQUFmLEVBQStCRyxXQUEvQjtBQUNELEdBTkQ7QUFPQUwsUUFBTU8sSUFBTixDQUFXTixXQUFYOztBQUVBUixhQUFXLE1BQU07QUFDZmI7QUFDRCxHQUZELEVBRUcsSUFGSDs7QUFJQTtBQUNBb0IsUUFBTVEsU0FBTixDQUFnQixlQUFLQyxJQUFMLENBQVVDLFNBQVYsRUFBcUIsYUFBckIsQ0FBaEI7QUFDRCxDQWhCRCIsImZpbGUiOiJzbGFjay93ZWJ2aWV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXBjUmVuZGVyZXIgfSBmcm9tICdlbGVjdHJvbic7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcblxuY29uc3QgZ2V0VGVhbUljb24gPSBmdW5jdGlvbiBnZXRUZWFtSWNvbihjb3VudCA9IDApIHtcbiAgbGV0IGNvdW50VGVhbUljb25DaGVjayA9IGNvdW50O1xuICBsZXQgYmdVcmwgPSBudWxsO1xuXG4gIGNvbnN0IHRlYW1NZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RlYW1fbWVudScpO1xuICBpZiAodGVhbU1lbnUpIHtcbiAgICB0ZWFtTWVudS5jbGljaygpO1xuXG4gICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZWFtX2ljb24nKTtcbiAgICBpZiAoaWNvbikge1xuICAgICAgYmdVcmwgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShpY29uLCBudWxsKS5nZXRQcm9wZXJ0eVZhbHVlKCdiYWNrZ3JvdW5kLWltYWdlJyk7XG4gICAgICBiZ1VybCA9IC9edXJsXFwoKFsnXCJdPykoLiopXFwxXFwpJC8uZXhlYyhiZ1VybCk7XG4gICAgICBiZ1VybCA9IGJnVXJsID8gYmdVcmxbMl0gOiAnJztcbiAgICB9XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZWFtX21lbnUnKS5yZW1vdmUoKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtc2dfaW5wdXQgLnFsLWVkaXRvcicpLmZvY3VzKCk7XG4gICAgfSwgMTApO1xuICB9XG5cbiAgY291bnRUZWFtSWNvbkNoZWNrICs9IDE7XG5cbiAgaWYgKGJnVXJsKSB7XG4gICAgaXBjUmVuZGVyZXIuc2VuZFRvSG9zdCgnYXZhdGFyJywgYmdVcmwpO1xuICB9IGVsc2UgaWYgKGNvdW50VGVhbUljb25DaGVjayA8PSA1KSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBnZXRUZWFtSWNvbihjb3VudFRlYW1JY29uQ2hlY2sgKyAxKTtcbiAgICB9LCAyMDAwKTtcbiAgfVxufTtcblxuY29uc3QgU0VMRUNUT1JfQ0hBTk5FTFNfVU5SRUFEID0gJy5wLWNoYW5uZWxfc2lkZWJhcl9fY2hhbm5lbC0tdW5yZWFkOm5vdCgucC1jaGFubmVsX3NpZGViYXJfX2NoYW5uZWwtLW11dGVkKSc7XG5cbm1vZHVsZS5leHBvcnRzID0gKEZyYW56KSA9PiB7XG4gIGNvbnN0IGdldE1lc3NhZ2VzID0gKCkgPT4ge1xuICAgIGNvbnN0IGRpcmVjdE1lc3NhZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgJHtTRUxFQ1RPUl9DSEFOTkVMU19VTlJFQUR9IC5wLWNoYW5uZWxfc2lkZWJhcl9fYmFkZ2VgKS5sZW5ndGg7XG4gICAgY29uc3QgYWxsTWVzc2FnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFNFTEVDVE9SX0NIQU5ORUxTX1VOUkVBRCkubGVuZ3RoIC0gZGlyZWN0TWVzc2FnZXM7XG5cbiAgICAvLyBzZXQgRnJhbnogYmFkZ2VcbiAgICBGcmFuei5zZXRCYWRnZShkaXJlY3RNZXNzYWdlcywgYWxsTWVzc2FnZXMpO1xuICB9O1xuICBGcmFuei5sb29wKGdldE1lc3NhZ2VzKTtcblxuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBnZXRUZWFtSWNvbigpO1xuICB9LCA0MDAwKTtcblxuICAvLyBpbmplY3QgZnJhbnouY3NzIHN0eWxlc2hlZXRcbiAgRnJhbnouaW5qZWN0Q1NTKHBhdGguam9pbihfX2Rpcm5hbWUsICdzZXJ2aWNlLmNzcycpKTtcbn07XG4iXX0=