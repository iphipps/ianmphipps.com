ianSite.routeHelpers = {
    addClasses: function(){
        var _this = this;
        $(".home-menu, .about-menu, .resume-menu").removeClass("active");
        $('.top').removeClass("home-menu about-menu resume-menu active");
        $('.top').addClass(_this.currentClass);
        $('.' + _this.currentClass).addClass("active");
    },
    mapClasses: function(a){
        switch (a){
            case "/about":
                this.currentClass = 'about-menu';
                break;
            case "/work":
                this.currentClass = 'home-menu';
                break;
            case "/resume":
                this.currentClass = 'resume-menu';
                break;
            default:
                this.currentClass = 'home-menu';
                break;
        }
        ianSite.routeHelpers.addClasses();
    },
    currentClass: ""

};




angular.module('myApp.routeHelpers', [])
.run( function($rootScope, $location) {
   $rootScope.$watch(function() { 
      return $location.path(); 
    },
    function(a){  
      //console.log('url has changed: ' + a);
      ianSite.routeHelpers.mapClasses(a);
    });
});

