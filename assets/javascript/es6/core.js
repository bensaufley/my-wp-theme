const getScript = function(URL, callback) {
  const newScript = document.createElement('script');
  newScript.src = URL;
  newScript.type = 'text/javascript';
  if (typeof callback == 'function') newScript.onload = callback;
  document.body.appendChild(newScript);
};

(function(window, document, undefined, getScript) {

  let initialize = function() {
    console.log('Loaded!', jQuery, $.fn.jquery);
  }

  getScript('https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js', initialize);
})(window, document, undefined, getScript);
