

portfolioSite.HomeView = Backbone.View.extend({
    render:function () {
        this.$el.html(this.template);
        return this;
    },
    template: Handlebars.templates['tpl-home']
  

});

portfolioSite.ResumeView = Backbone.View.extend({

    render:function () {
        this.$el.html(this.template);

        return this;
    },
    template: Handlebars.templates['tpl-resume']

});

portfolioSite.WorkView = Backbone.View.extend({

    render:function () {
        this.$el.html(this.template);
        return this;
    },
    template: Handlebars.templates['tpl-work']

});



portfolioSite.AboutView = Backbone.View.extend({
   
    render:function () {
          this.$el.html(this.template);

        return this;
    },
    template: Handlebars.templates['tpl-about']
    

});

portfolioSite.TestingView = Backbone.View.extend({
   
    render:function () {
          this.$el.html(this.template);
          console.log(this.template({workItems:this.collection.toJSON()}));
        return this;
    },
    template: Handlebars.templates['tpl-testing']
    

});

$(document).on("ready", function () {
        portfolioSite.router = new portfolioSite.Router();
            Backbone.history.start({pushState: true});
});