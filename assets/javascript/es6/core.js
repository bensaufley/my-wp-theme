(function(window, document, undefined) {
  const jQueryScript = document.createElement('script');

  let initialize = function() {
    console.log('Loaded!', jQuery, $.fn.jquery);
  }

  let getjQuery = function() {
    jQueryScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js';
    jQueryScript.type = 'text/javascript';
    jQueryScript.onload = initialize;
    document.body.appendChild(jQueryScript);
  }

  getjQuery();
})(window, document, undefined);
