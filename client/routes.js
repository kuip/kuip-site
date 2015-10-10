FlowRouter.route('/', {
  name: 'home',
  action: function() {
    BlazeLayout.render('layout', {main: 'home', header: 'header', footer: 'footer', navbar: 'navbar'});
  }
});