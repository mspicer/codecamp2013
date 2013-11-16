Codecamp2013.ImagesRoute = Ember.Route.extend({
  model: function(params) { 
      return this.store.find('image');
  }
});
