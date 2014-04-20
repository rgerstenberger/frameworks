define([
  'jquery',
  'backbone',
  'view',
  'views/person-form-view',
  'hbs!templates/contacts-list'
], function ($, Backbone, View, PersonFormView, template) {
  return View.extend({
    name: 'contacts-list',
    template: template,
    events: {
      "click .js-delete-person": "deletePerson",
      "click .js-add-person": "addPersonForm"
    },

    context: function () {
      return this;
    },

    deletePerson: function (ev) {
      ev.preventDefault();

      var id = $(ev.target).data("model-id"),
        model = this.collection.get(id);

      this.collection.remove(model);
      this.render();
    },

    addPersonForm: function (ev) {
      ev.preventDefault();

      this.personFormView = this.addChild(new PersonFormView());

      this.render();

      this.listenToOnce(this.personFormView, "createPerson", function (personAttributes) {
        this.collection.add(personAttributes);

        // this.personFormView.remove();

        delete this.personFormView;

        this.render();
      });
    }
  });
});
