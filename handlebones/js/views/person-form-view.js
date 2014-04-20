define([
  'jquery',
  'view',
  'models/person',
  'hbs!templates/person-form-view'
], function ($, View, Person, template) {
  return View.extend({
    name: 'person-form-view',
    template: template,
    events: {
      "submit form": "createPerson"
    },

    createPerson: function (ev) {
      ev.preventDefault();

      var modelAttributes = {};

      this.$("input").each(function () {
        modelAttributes[$(this).attr("name")] = $(this).val();
      });

      this.trigger("createPerson", modelAttributes);
    }
  });
});
