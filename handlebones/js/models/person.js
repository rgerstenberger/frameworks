define(['model'], function (Model) {
  return Model.extend({
    name: 'person',
    defaults: {
      firstName: "John",
      lastName: "Doe",
      email: "jd@gmail.com",
      phone: "4255555555",
      photo: "http://www.placekitten.com/300/300",
      photoThumbnail: "http://www.placekitten.com/50/50"
    }
  });
});
