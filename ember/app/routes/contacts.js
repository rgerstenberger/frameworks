// similar to rjs: `require([""appkit/utils/fixtures/person""], function(personFixture) {...})`
import personFixtures from "appkit/utils/fixtures/person";

// exports an object, similar to rjs: `return Ember.Route.extend({...})`
export default Ember.Route.extend({
  beforeModel: function () {
    // Populate local storage with fixture data.
    personFixtures.forEach(function (record) {
      this.store.push("person", record);
    }, this);
  },

  // Populate the contacts controller with data. Runs when transitioning into the
  // path defined for the contacts route, unless transitionTo('/', model) is passed model param
  model: function () {
    // return a promise that eventually fulfills with fixture data (an array)
    return this.store.find("person");
  }
});