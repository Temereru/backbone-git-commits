var CommiterModel = Backbone.Model.extend({
  defaults: {
    name: '',
    img: ''
  },

  parse: function(res){
    return {
      name: res.committer.login,
      img: res.committer.avatar_url
    };
  }
});