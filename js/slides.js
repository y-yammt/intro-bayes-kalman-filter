require.config({
  paths: {
    // Note the `delayStartupUntil=configured` parameter
    mathjax: 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.1/MathJax.js?config=TeX-MML-AM_CHTML',
    jquery: 'jquery-2.1.1.min'
  },
  shim: {
    mathjax: {
      exports: 'MathJax',
      init: function () {
        MathJax.Hub.Config({
          config: ['MMLorHTML.js'],
          extensions: ['tex2jax.js'],
          jax: ['input/TeX', 'output/HTML-CSS'],
          tex2jax: {
            inlineMath: [ ['$','$'] ],
            displayMath: [ ['$$','$$'] ],
            processEscapes: true
          },
          'HTML-CSS': { availableFonts: ['TeX'] }
        });
        MathJax.Hub.Startup.onload();
        return MathJax;
      }
    },
    jquery: {
       exports: '$'
    }
  }
});

require(
  ['order!../slide_config',
   'order!modernizr.custom.45394',
   'order!prettify/prettify',
   'order!mathjax',
   'order!hammer',
   'order!mt',
   'order!slide-controller',
   'order!slide-deck'],
   function(someModules){
   }
);
