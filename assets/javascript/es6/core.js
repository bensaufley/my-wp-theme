(function(window, document, undefined) {
  const jQueryScript = document.createElement('script');

  let initialize = function(test='thing') {
    console.log(test);
  }

  jQueryScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js';
  jQueryScript.type = 'text/javascript';
  jQueryScript.onload = initialize;
  document.body.appendChild(jQueryScript);
})(window, document, undefined);
