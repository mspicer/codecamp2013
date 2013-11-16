Codecamp2013.TodosIndexController = Ember.Controller.extend({
  needs: ['todos'],

  actions: {
    newTodo: function() { 
        var newTodo = this.store.createRecord('todo', {
          name: 'Get r done'
        });
        newTodo.save(); 
    },

    clearDone: function() {
      var todos = this.get('controllers.todos');
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
