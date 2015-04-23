
var portfolioSite = {

    views: {},

    models: {},

    selectMenuItem: function(menuItem) {
        $('.navbar .nav li').removeClass('active');
        $('.top').removeClass('about-menu resume-menu contact-menu home-menu');
        if (menuItem) {
            $('.' + menuItem).addClass('active');
            $('.top').addClass(menuItem);
        }
        
        
    }

};

portfolioSite.Router = Backbone.Router.extend({

    routes: {
        "":           "home",
        "contact":    "contact",
        "resume":     "resume",
        "work":       "work",
        "about":      "about",
        "testing": "testing"
    },

    initialize: function () {
     
        this.$content = $("#content");
        
    },

    home: function () {
        // Since the home view never changes, we instantiate it and render it only once
        if (!portfolioSite.homeView) {
            portfolioSite.homeView = new portfolioSite.HomeView();
            portfolioSite.homeView.render();
        }
        this.$content.html(portfolioSite.homeView.el);
        portfolioSite.selectMenuItem('home-menu');
        
         
    },

    resume: function () {
        if (!portfolioSite.resumeView) {
            portfolioSite.resumeView = new portfolioSite.ResumeView();
            portfolioSite.resumeView.render();
        }
        this.$content.html(portfolioSite.resumeView.el);
        portfolioSite.selectMenuItem('resume-menu');

        
    },

     work: function () {
        if (!portfolioSite.workView) {
            portfolioSite.workView = new portfolioSite.WorkView();
            portfolioSite.workView.render();
        }
        this.$content.html(portfolioSite.workView.el);
        portfolioSite.selectMenuItem('work-menu');
    },
    about: function () {
        if (!portfolioSite.aboutView) {
            portfolioSite.aboutView = new portfolioSite.AboutView();
            portfolioSite.aboutView.render();
        }
        this.$content.html(portfolioSite.aboutView.el);
        portfolioSite.selectMenuItem('about-menu');
    },
    testing: function(){
        if (!portfolioSite.testingView) {
            portfolioSite.testingView = new portfolioSite.TestingView({
                collection: portfolioSite.workItems
            });
            portfolioSite.testingView.render();
        }
        this.$content.html(portfolioSite.testingView.el);
    }

});


