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
