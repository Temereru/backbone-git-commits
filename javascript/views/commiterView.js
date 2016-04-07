var CommiterView = Backbone.View.extend({

  template: Handlebars.compile($('#commiter-template').html()),

  render: function(){
    var obj = {
      name: this.model.toJSON().committer.login,
      img: this.model.toJSON().committer.avatar_url
    }
    this.$el.html(this.template(obj));

    return this;
  }
});