var App;

module('Acceptances - Contacts', {
  setup: function (){
    App = startApp();
  },
  teardown: function () {
    Ember.run(App, 'destroy');
  }
});

test('it renders', function () {
  visit('/');
  andThen(function () {
    var title = find('h2#title');
    var list = find('ul li');
    equal(title.text(), 'Contacts', "Page tile should equal 'Contacts'");
    equal(list.length > 0, true);
  });
});

// test( "Creating a Contact", function() {
//   visit("/")
//   click("a:contains:Create New Contact")
//   andThen(function () {
//     fillIn()
//   });
// });

test("View a Contact", function () {
  visit("/");
  click('a:contains("Jack Daniels")');
  andThen(function () {
    ok(find('*:contains("My dear friend from college")').length,
      'expected to find contact description');
  });
});