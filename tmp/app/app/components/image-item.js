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
