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