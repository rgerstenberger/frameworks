export default Ember.ObjectController.extend({
  attributesNames: ["firstName", "lastName", "phone"],

  attributes: function () {
    return this.getProperties(this.get("attributesNames"));
  }.property(),

  resetFields: function () {
    var emptyFields =
      _.chain(this.get("attributes")).reduce(function (memo, val, key) {
        memo[key] = null;
        return memo;
      }, {}).value();

    this.setProperties(emptyFields);
  }
});