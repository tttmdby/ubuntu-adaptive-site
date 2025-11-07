'use strict';

let buttonLinks = {'community-button': './community', 'freedom-button': './freedom', 'enterprise-button': './enterprise','download-button': 'https://ubuntu.com/download'};

Object.entries(buttonLinks).forEach(function(pair) {
  let id = pair[0];
  let url = pair[1];
  let btn = document.getElementById(id);

  if (btn) {
    if (id === 'download-button') {
      btn.addEventListener('click', function() {
        window.open(url, '_blank', 'noopener,noreferrer');
      });
    } else {
      btn.addEventListener('click', function() {
        location.href = url;
      });
    }
  }
});
