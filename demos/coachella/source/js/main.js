var coachellaApp = coachellaApp || {};
coachellaApp.main = {
	init: function(){
		this.preloadTime();
		this.bindtimeEvents();
		this.bindArtistEvents();
		this.todayTemplate(coachella2);
	},
	now: new Date(),
	nownow: function(){
		return this.now.getTime();
	},
	oneDay: 24*60*60*1000,
	preloadTime: function(){
		var _this = this;
		var month = _this.now.getMonth()+1;
		if (month < 10){
			month = '0' + month;
		}
		var minute = _this.now.getMinutes();
		if(minute < 10){
			minute = '0' + minute;
		}
		var hour = _this.now.getHours();
		if(hour < 10){
			hour = '0' + hour;
		}
		var dateString = _this.now.getFullYear() + '-' + month +'-'+ _this.now.getDate();
		console.log(dateString);


		$('.js-time').val(hour + ':' + minute );
		$('.js-date').val(dateString);
		_this.compileQueriedTime();
	},
	bindtimeEvents: function(){
		var _this = this;
		$('.js-time').on('change', function(){
			//20:25
			_this.compileQueriedTime();
		});
		$('.js-date').on('change', function(){
			//2015-04-16
			_this.compileQueriedTime();
		
		});

	},
	compileQueriedTime: function(){
			var y = $('.js-time').val();
			var x = $('.js-date').val();
			x = x.split("-");
			y = y.split(":");
			var t = new Date(parseFloat(x[0]), (parseFloat(x[1]) - 1), parseFloat(x[2]), parseFloat(y[0]), parseFloat(y[1]));
			//console.log(t.getTime());
			this.compareTime(t.getTime());
	},
	compareTime: function(currentTime){
		var playing = _.filter(coachella2, function(key){
			//console.log(key.start.getTime());
			return currentTime >= key.start.getTime() && currentTime < key.endTime.getTime();
		});
		this.timeTemplate(playing);
	},
	resetAll: function(){
		$('by-artist-info').hide();
		$('.by-time-info').hide();
		$('.by-venue-info').hide();
	},
	timeTemplate: function(array){
		console.log('array', array);
		//trying the template
		_.templateSettings.variable = "rc";
        // Grab the HTML out of our template tag and pre-compile it.
        var timetemplate = _.template(
            $( "script.date-template" ).html()
        );
        // Define our render data (to be put into the "rc" variable).
        var templateData = {
            listTitle: "Upcoming Lineup",
            listItems: array
        };
        // Render the underscore template and inject it after the H1
        // in our current DOM.
        $( ".by-time-info" ).html(
            timetemplate( templateData )
        ).show();
	},
	todayTemplate: function(array){
		var _this = this;
		var y = _.chain(coachella2)
		 .filter(function(key){
			return key.start.getTime() >= _this.nownow() && key.start.getTime() <= ( _this.nownow() + _this.oneDay);
		 })
		 .sortBy(function(key){
		 	return key.start.getTime();
		 })
		 .value();
		 console.log('here is the sort', y);
		//trying the template
		_.templateSettings.variable = "rc";
        // Grab the HTML out of our template tag and pre-compile it.
        var timetemplate = _.template(
            $( "script.today-template" ).html()
        );
        // Define our render data (to be put into the "rc" variable).
        var templateData = {
            listTitle: "Olympic Volleyball Players",
            listItems: y
        };
        // Render the underscore template and inject it after the H1
        // in our current DOM.
        $( ".today-info" ).html(
            timetemplate( templateData )
        ).show();
	},
	bindArtistEvents: function(){
		var $input = $('.typeahead');
		$input.typeahead({source: coachella2, 
			autoSelect: true}); 
		$input.keyup(function() {
			var current = $input.typeahead("getActive");
			if (current) {
					// Some item from your model is active!
					//if (current.name == $input.val()) {
						console.log(current);
						$('.by-artist-info').show();
						$('.artist-name').html(current.name);
						$('.venue').html(current.venue);
						$('.start-time').html(current.start);
					// This means the exact match is found. Use toLowerCase() if you want case insensitive match.
				//} else {
					
					// This means it is only a partial match, you can either add a new item 
					// or take the active if you don't want new items
				//}
			} else {
					// Nothing is active so it is a new value (or maybe empty value)
			}
		});
	}
}


$(function () {
	coachellaApp.main.init();
	
	
});
