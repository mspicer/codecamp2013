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
        $('#loader img').attr('src',path);
       
        $('#loader img').resizeToParent();
        
      
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
