Meteor.startup(function() {
  $(window).resize(function(evt) {
    Session.set("window", {w: $( window ).width(), h: $( window ).height(), sw: screen.width, sh: screen.height})
  });
});

Session.set("window", {w: $( window ).width(), h: $( window ).height(), sw: screen.width, sh: screen.height})