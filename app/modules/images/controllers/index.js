Codecamp2013.ImagesIndexController = Ember.Controller.extend({
  needs: ['images'],

  actions: {
    newImage: function() { 
        var newImage = this.store.createRecord('image', {
          name: 'newone'
        });
        newTodo.save(); 
    },

    clearDone: function() {
      var todos = this.get('controllers.images');
      var allDone = todos.filter(function(todo) {
        return todo.get('isDone');
      });

      while (allDone.length > 0) {
        var todo = allDone.pop(); 
          todo.deleteRecord();
          todo.save(); 
      }
    }
  }
});
