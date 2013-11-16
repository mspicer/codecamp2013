(function() {

/* global window, Ember */
window.Codecamp2013 = Ember.Application.create({
});

// Load mixins and components before anything else


})();

(function() {

Codecamp2013.ImageItemComponent = Ember.Component.extend({
  item: null,

  keyDown: function (event) {
    if (event.which === 13) {
      event.preventDefault();

      var item = get('item'),
        editable = $('.todo-editable');
      item.set('name', editable.text());
      
      item.save();
      

      editable.prop('contenteditable', false).blur();
    }
  },

  actions: 
  {
    openimg: function(path) {
        //var item = this.get('item');
        var img = new Image();
        $(img).load(function(){
          $(this).hide();
          //$(this).imgscale({scale: 'fit'});
          $('#loader')
            .empty()
            .removeClass('loading')
            .append(img);
            $(img).resizeToParent();
          $(this).fadeIn();
        })
        .error(function() {
          $('.loader').append('<div class="alert alert-danger"><button type="button" class="close" data-dismiss="alert">×</button><strong>Oh snap!</strong> We can not load the stored image. Sorry :(</div>');
        })
        .attr('src', path)
        //this.$('.img-responsive').attr("src",item.path);
      },
    

    edit: function () {
      this.$('.image-editable').prop('contenteditable', true).focus();
    },

    delete: function () {
      var item = this.get('item');
      
      item.deleteRecord();
      //item.save();
      
    }
  }
});


})();

(function() {

Codecamp2013.TodoItemComponent = Ember.Component.extend({
  item: null,

  keyDown: function (event) {
    if (event.which === 13) {
      event.preventDefault();

      var item = this.get('item'),
        editable = this.$('.todo-editable');
      item.set('name', editable.text());
      
      item.save();
      

      editable.prop('contenteditable', false).blur();
    }
  },

  actions: {
    edit: function () {
      this.$('.todo-editable').prop('contenteditable', true).focus();
    },

    delete: function () {
      var item = this.get('item');
      
      item.deleteRecord();
      //item.save();
      
    }
  }
});


})();

(function() {


Codecamp2013.ApplicationAdapter = DS.FixtureAdapter.extend();



})();

(function() {

Codecamp2013.Image = DS.Model.extend({
  path: DS.attr('string'),
  name: DS.attr('string')
});


Codecamp2013.Image.FIXTURES = [
{
  name: "Image-1",
  id: "image1",
  path: "/assets/img/bg1.jpg",
  frames:[
    {
      id:1,
      framepath: "img/fram1.png",
      x: 10,
      y: 30,
      zorder: 1
    },{
      id:2,
      framepath: "img/fram2.png",
      x: 10,
      y: 390,
      zorder: 1
    }
  ]

},{
  name: "Image-2",
  id: "image2",
  path: "/assets/img/bg2.jpg",
  frames:[
    {
      id:1,
      framepath: "img/fram3.png",
      x: 910,
      y: 430,
      zorder: 1
    },{
      id:2,
      framepath: "img/fram4.png",
      x: 410,
      y: 430,
      zorder: 1
    },{
      id:3,
      framepath: "img/fram5.png",
      x: 210,
      y: 320,
      zorder: 1
    }
  ]

}];

})();

(function() {


Codecamp2013.Site = DS.Model.extend({
  title: DS.attr('string'),
  link: DS.attr('string')
});

Codecamp2013.Site.FIXTURES = [
  {
    id: 1,
    title: 'About',
    link: 'about'
  },
  {
    id: 2,
    title: 'Contact',
    link: 'contact'
  },
  {
    id: 3,
    title: 'Todos',
    link: 'todos'
  },{
    id:4,
    title: 'Images',
    link: 'images'
  }
];



})();

(function() {


  Codecamp2013.Todo = DS.Model.extend({
    name: DS.attr('string'),
    isDone: DS.attr('boolean')
  });

  Codecamp2013.Todo.FIXTURES = [{
    id: 'a',
    name: 'Walk the dog',
    isDone: false
  }, {
    id: 'b',
    name: 'Buy groceries',
    isDone: false
  }]; 


})();

(function() {

Codecamp2013.ImagesRoute = Ember.Route.extend({
  model: function(params) { 
      return this.store.find('image');
  }
});


})();

(function() {

Codecamp2013.ApplicationRoute = Ember.Route.extend({

  model: function(params) { 
      return this.store.find('site'); 
  }
});


})();

(function() {

Codecamp2013.TodosRoute = Ember.Route.extend({
  model: function(params) { 
      return this.store.find('todo'); 
  }
});


})();

(function() {

Codecamp2013.ImagesController = Ember.ArrayController.extend({
});

})();

(function() {

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


})();

(function() {

Codecamp2013.AboutController = Ember.Controller.extend({
  someText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque libero massa, mollis.'
});

})();

(function() {

Codecamp2013.ApplicationController = Ember.ArrayController.extend({
});

})();

(function() {

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


})();

(function() {

Codecamp2013.TodosController = Ember.ArrayController.extend({
});

})();

(function() {

Codecamp2013.IndexView = Ember.View.extend({
});

})();

(function() {

Ember.Handlebars.registerBoundHelper('wordCount', function (value) {
  var ret;
  if (typeof value === 'string' && value.length) {
    return ((ret = value.trim().match(/\s+/g).length) > 0) ? (ret + 1) : 1;
  }
  return '0';
});

})();

(function() {

Codecamp2013.Router.map(function() {
  this.route('about', { path: '/about' });
  this.route('contact', { path: '/contact_me' });

  this.resource('todos', function () {
    this.route('index', { path: '/' });
  });
  this.resource('images',function() {
  	this.route('index', {path: '/'});
  })
});


})();