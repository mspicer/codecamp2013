
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
  }
];

