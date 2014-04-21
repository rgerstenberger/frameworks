var Router = Ember.Router.extend(); // ensure we don't share routes between all Router instances

Router.map(function() {
  this.resource("contacts", {path: "/"}, function () {
    this.route("new");
    this.resource("contact", {path: ":person_id"});
  });
});

Router.reopen({
  location: 'auto'
});

export default Router;
