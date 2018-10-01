const fs = require('fs');
const path = require('path');

function applycss(css){
    var head = document.getElementsByTagName('head')[0];
    var s = document.createElement('style');
    s.setAttribute('type', 'text/css');
    s.appendChild(document.createTextNode(css));
    head.appendChild(s);
  }
  

module.exports = function theme(themeName){
    fs.readFile(path.join(__dirname, `${themeName}.css`), (err, data) => {
        if (err) throw err;
        applycss(data);
      });
}