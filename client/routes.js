FlowRouter.route('/', {
  name: 'home',
  action: function() {
    BlazeLayout.render('layout', {main: 'home', header: 'header', footer: 'footer', navbar: 'navbar'});
  }
});

FlowRouter.route('/dev-algorithm', {
  name: 'devalg',
  action: function() {
    BlazeLayout.render('devalg');
  }
});