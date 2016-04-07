var AppView = Backbone.View.extend({
  el: 'body',

  events: {
    'click #submit': 'submit'
  },
  initialize: function(){
    this.listenTo(commitCollection, 'add', this.render);
    $user = $('#user');
    $repo = $('#repo');
    $commiters = $('#commiters');

    
    
  },

  submit: function(){
    var user = $user.val();
    var repo = $repo.val();
    var url = 'https://api.github.com/repos/' + user + '/' + repo + '/commits';
    commitCollection.url = url;
    $commiters.empty();
    commitCollection.fetch();
  },

  render: function(model){
    if(model.toJSON().committer !== null){
      var view = new CommiterView({model: model});
      $commiters.append(view.render().el);
    }else{
      console.log(model);
    }   
  }
});