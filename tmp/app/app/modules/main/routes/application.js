Codecamp2013.ApplicationRoute = Ember.Route.extend({

  model: function(params) { 
      return this.store.find('site'); 
  }
});
