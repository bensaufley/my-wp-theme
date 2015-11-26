'use strict';

(function (window, document, undefined) {
  var jQueryScript = document.createElement('script');

  var initialize = function initialize() {
    console.log('Loaded!', jQuery, $.fn.jquery);
  };

  var getjQuery = function getjQuery() {
    jQueryScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js';
    jQueryScript.type = 'text/javascript';
    jQueryScript.onload = initialize;
    document.body.appendChild(jQueryScript);
  };

  getjQuery();
})(window, document, undefined);
//# sourceMappingURL=core.js.map