export default Ember.Route.extend({
  actions: {
    create: function (controller, modelName, routeName) {
      var newRecord = this.store.createRecord(modelName, controller.get("attributes"));
      controller.resetFields();
      this.transitionTo(routeName, newRecord.save());
    },

    delete: function (record, routeName) {
      record.deleteRecord();
      this.transitionTo(routeName, record.save());
    }
  }
});