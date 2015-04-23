var circlesTest = {
	init: function(){
		this.bindEvents();
	},
	bindEvents: function(){
		var _this = this;
		$('.circle').unbind('mouseenter'); //unbind in case it was previously bound
		$('.circle').on('mouseenter', function(){
			_this.makeCircles($(this));
		});
		
	},
	makeCircles: function(specificCircle){

		var fourCircles = '<div class="row-fluid"><div class="col-ian-6"><div class="circle '+ this.colors[ Math.floor( Math.random()*4) ] +'"></div></div><div class="col-ian-6"><div class="circle '+ this.colors[ Math.floor( Math.random()*4) ] +'"></div></div><div class="col-ian-6"><div class="circle '+ this.colors[ Math.floor( Math.random()*4) ] +'"></div></div><div class="col-ian-6"><div class="circle '+ this.colors[ Math.floor( Math.random()*4) ] +'"></div></div></div>';
		$(specificCircle).replaceWith(fourCircles);
		this.bindEvents(); //to set handler on new circles as well.
	},
	colors: ['orange','purple','green','blue']//we set these randomly on line 15

};
$(function() {
    
	circlesTest.init();
		
	

 });