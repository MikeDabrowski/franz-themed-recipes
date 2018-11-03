'use strict';
const fs = require('fs');
const path = require('path');

module.exports = Franz => {
  const getMessages = function getMessages() {
    const muteSelector = '.DQy0Rb';

    // get unread messages
    let directCount = 0;
    document.querySelectorAll('.eM5l9e.FVKzAb').forEach(node => {
      // Hangouts Chat overrides the muted indicator when there is a direct mention
      if (!node.closest('content[role="listitem"]').querySelector(muteSelector)) {
        directCount += 1;
      }
    });
    let indirectCount = 0;
    document.querySelectorAll('.PL5Wwe.H7du2 .t5F5nf').forEach(node => {
      if (!node.closest('content[role="listitem"]').querySelector(muteSelector)) {
        indirectCount = +1;
      }
    });
    indirectCount -= directCount;

    // set Franz badge
    Franz.setBadge(directCount, indirectCount);
  };

  // check for new messages every second and update Franz badge
  Franz.loop(getMessages);
  const cssFiles = fs.readdirSync(__dirname).filter((fileName) => (fileName.startsWith('theme-') && fileName.endsWith('.css')));
  cssFiles.forEach((fileName) => {
    Franz.injectCSS(path.join(__dirname, fileName));
  });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhhbmdvdXRzY2hhdC93ZWJ2aWV3LmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJGcmFueiIsImdldE1lc3NhZ2VzIiwibXV0ZVNlbGVjdG9yIiwiZGlyZWN0Q291bnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwibm9kZSIsImNsb3Nlc3QiLCJxdWVyeVNlbGVjdG9yIiwiaW5kaXJlY3RDb3VudCIsInNldEJhZGdlIiwibG9vcCJdLCJtYXBwaW5ncyI6Ijs7QUFBQUEsT0FBT0MsT0FBUCxHQUFrQkMsS0FBRCxJQUFXO0FBQzFCLFFBQU1DLGNBQWMsU0FBU0EsV0FBVCxHQUF1QjtBQUN6QyxVQUFNQyxlQUFlLFNBQXJCOztBQUVBO0FBQ0EsUUFBSUMsY0FBYyxDQUFsQjtBQUNBQyxhQUFTQyxnQkFBVCxDQUEwQixnQkFBMUIsRUFBNENDLE9BQTVDLENBQXFEQyxJQUFELElBQVU7QUFDNUQ7QUFDQSxVQUFJLENBQUNBLEtBQUtDLE9BQUwsQ0FBYSwwQkFBYixFQUF5Q0MsYUFBekMsQ0FBdURQLFlBQXZELENBQUwsRUFBMkU7QUFDekVDLHVCQUFlLENBQWY7QUFDRDtBQUNGLEtBTEQ7QUFNQSxRQUFJTyxnQkFBZ0IsQ0FBcEI7QUFDQU4sYUFBU0MsZ0JBQVQsQ0FBMEIsdUJBQTFCLEVBQW1EQyxPQUFuRCxDQUE0REMsSUFBRCxJQUFVO0FBQ25FLFVBQUksQ0FBQ0EsS0FBS0MsT0FBTCxDQUFhLDBCQUFiLEVBQXlDQyxhQUF6QyxDQUF1RFAsWUFBdkQsQ0FBTCxFQUEyRTtBQUN6RVEsd0JBQWdCLENBQUMsQ0FBakI7QUFDRDtBQUNGLEtBSkQ7QUFLQUEscUJBQWlCUCxXQUFqQjs7QUFFQTtBQUNBSCxVQUFNVyxRQUFOLENBQWVSLFdBQWYsRUFBNEJPLGFBQTVCO0FBQ0QsR0FyQkQ7O0FBdUJBO0FBQ0FWLFFBQU1ZLElBQU4sQ0FBV1gsV0FBWDtBQUNELENBMUJEIiwiZmlsZSI6ImhhbmdvdXRzY2hhdC93ZWJ2aWV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSAoRnJhbnopID0+IHtcbiAgY29uc3QgZ2V0TWVzc2FnZXMgPSBmdW5jdGlvbiBnZXRNZXNzYWdlcygpIHtcbiAgICBjb25zdCBtdXRlU2VsZWN0b3IgPSAnLkRReTBSYic7XG5cbiAgICAvLyBnZXQgdW5yZWFkIG1lc3NhZ2VzXG4gICAgbGV0IGRpcmVjdENvdW50ID0gMDtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZU01bDllLkZWS3pBYicpLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgIC8vIEhhbmdvdXRzIENoYXQgb3ZlcnJpZGVzIHRoZSBtdXRlZCBpbmRpY2F0b3Igd2hlbiB0aGVyZSBpcyBhIGRpcmVjdCBtZW50aW9uXG4gICAgICBpZiAoIW5vZGUuY2xvc2VzdCgnY29udGVudFtyb2xlPVwibGlzdGl0ZW1cIl0nKS5xdWVyeVNlbGVjdG9yKG11dGVTZWxlY3RvcikpIHtcbiAgICAgICAgZGlyZWN0Q291bnQgKz0gMTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBsZXQgaW5kaXJlY3RDb3VudCA9IDA7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLlBMNVd3ZS5IN2R1MiAudDVGNW5mJykuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgaWYgKCFub2RlLmNsb3Nlc3QoJ2NvbnRlbnRbcm9sZT1cImxpc3RpdGVtXCJdJykucXVlcnlTZWxlY3RvcihtdXRlU2VsZWN0b3IpKSB7XG4gICAgICAgIGluZGlyZWN0Q291bnQgPSArMTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpbmRpcmVjdENvdW50IC09IGRpcmVjdENvdW50O1xuXG4gICAgLy8gc2V0IEZyYW56IGJhZGdlXG4gICAgRnJhbnouc2V0QmFkZ2UoZGlyZWN0Q291bnQsIGluZGlyZWN0Q291bnQpO1xuICB9O1xuXG4gIC8vIGNoZWNrIGZvciBuZXcgbWVzc2FnZXMgZXZlcnkgc2Vjb25kIGFuZCB1cGRhdGUgRnJhbnogYmFkZ2VcbiAgRnJhbnoubG9vcChnZXRNZXNzYWdlcyk7XG59O1xuIl19