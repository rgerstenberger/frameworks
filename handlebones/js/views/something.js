define([
  'view',
  'hbs!templates/something'
], function (View, template) {
  return View.extend({
    name: 'something',
    template: template
  });
});
