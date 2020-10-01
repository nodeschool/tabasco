const cat = require('catlistener');

cat.stylus({
  options: ['compila','escucha','observa'],
  css: './assets/css/',
  stylus: './assets/stylus/estilo.styl'
});

cat.browserify({
  original: './assets/js/script.js',
  compilado: './assets/js/nodeschool.js',
  presets: true
});
