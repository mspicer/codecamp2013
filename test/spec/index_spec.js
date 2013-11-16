module("Index", {
  setup: function () {
    Codecamp2013.reset();
  }
});

test("First H1 contains Codecamp2013", function () {
  visit('/').then(function () {
    equal($('#ember h1').html(), 'Codecamp2013', 'Title is Codecamp2013');
  });
});

