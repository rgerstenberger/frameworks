define([
  'backbone',
  'views/root',
  'views/contacts-list',
  'collections/people'
], function (Backbone, RootView, ContactsList, People) {
  return Backbone.Router.extend({
    routes: {
      "": "index"
    },

    index: function () {
      //Initialize app here
      var people = new People([{
        firstName: "Jack",
        lastName: "Daniels",
        email: "jd@gmail.com",
        id: 1,
        phone: "5555555555",
        photo: "http://www.placekitten.com/300/300",
        photoThumbnail: "http://www.placekitten.com/50/50"
      }, {
        firstName: "Bart",
        lastName: "Simpson",
        email: "elbarto@gmail.com",
        id: 2,
        phone: "6666666666",
        photo: "http://www.placekitten.com/300/300",
        photoThumbnail: "http://www.placekitten.com/50/50"
      }, {
        firstName: "Lisa",
        lastName: "Simpson",
        email: "lisa@gmail.com",
        id: 3,
        phone: "6666666666",
        photo: "http://www.placekitten.com/300/300",
        photoThumbnail: "http://www.placekitten.com/50/50"
      }, {
        firstName: "Homer",
        lastName: "Simpson",
        email: "donutz@gmail.com",
        id: 4,
        phone: "6666666666",
        photo: "http://www.placekitten.com/300/300",
        photoThumbnail: "http://www.placekitten.com/50/50"
      }]);

      // Instantiate our list view
      var contactsList = new ContactsList({
        collection: people
      });

      RootView.getInstance().setView(contactsList);
    }
  });
});
