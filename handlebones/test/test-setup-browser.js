/**
 * This file is only run in the browser and mocha_phantomjs
 *
 * It sets up mocha and manually requires files for tests. For tests run
 * outside of karma, files must be manually required below
 *
 */


define(function(require) {

  require('mocha');
  global.mocha.checkLeaks();
  global.mocha.setup('bdd');
  global.mocha.reporter('html');

  require("./test-setup-all");

  require([ // require test files
    './app.spec',
    './views/root.spec',
    './helpers/helpers.spec',
  ], function() { // run mocha
    if (global.mochaPhantomJS) { global.mochaPhantomJS.run(); }
    else { global.mocha.run(); }
  });

});