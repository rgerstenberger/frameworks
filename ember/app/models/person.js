// Define the schema for the Person model. Properties you'd like to use in
// your views MUST be defined here before they will show up.

export default DS.Model.extend({
  firstName: DS.attr(),
  lastName: DS.attr(),
  phone: DS.attr(),
  photo: DS.attr(),
  photoThumbnail: DS.attr(),
  description: DS.attr()
});