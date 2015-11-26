'use strict';

var getScript = function getScript(URL, callback) {
  var newScript = document.createElement('script');
  newScript.src = URL;
  newScript.type = 'text/javascript';
  if (typeof callback == 'function') newScript.onload = callback;
  document.body.appendChild(newScript);
};

(function (window, document, undefined, getScript) {

  var initialize = function initialize() {
    console.log('Loaded!', jQuery, $.fn.jquery);
  };

  getScript('https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js', initialize);
})(window, document, undefined, getScript);
//# sourceMappingURL=core.js.map