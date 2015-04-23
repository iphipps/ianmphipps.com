var ianSite = ianSite || {};
ianSite.daylight = {
	today: new Date(),
	init: function(){
		//console.log(this);
		this.setUpVariables.dd = this.today.getDate(),
		this.setUpVariables.mm = this.today.getMonth(),
		this.setUpVariables.thisMonth = '';
		this.figurethisMonth();

		this.setUpVariables.currentHours = this.today.getHours();
		this.setUpVariables.currentMinutes = this.today.getMinutes();
		if (this.setUpVariables.currentMinutes < 10){
			this.setUpVariables.currentMinutes = '0' + this.setUpVariables.currentMinutes;
		}
		var todaystring = 'daylight[0]' + this.setUpVariables.thisMonth + '[0][' + this.setUpVariables.dd + '][0].sunrise';
	
		var daylight;
		var _this = this;
		this.populateJson(_this);
		
	},
	populateJson: function(_this){
		
		$.getJSON( "assets/scripts/js/utilities/daylight.js", function( json ) {
			var daylight	= json;
			_this.setUpVariables.riseHour		= daylight[0][_this.setUpVariables.thisMonth][0][_this.setUpVariables.dd][0].sunrise.split(":")[0];
			_this.setUpVariables.riseMinute		= daylight[0][_this.setUpVariables.thisMonth][0][_this.setUpVariables.dd][0].sunrise.split(":")[1];
			_this.setUpVariables.sunSetHour		= daylight[0][_this.setUpVariables.thisMonth][0][_this.setUpVariables.dd][0].sunset.split(":")[0];
			_this.setUpVariables.sunSetMinute	= daylight[0][_this.setUpVariables.thisMonth][0][_this.setUpVariables.dd][0].sunset.split(":")[1];
			_this.setUpVariables.dayLengthHour	= daylight[0][_this.setUpVariables.thisMonth][0][_this.setUpVariables.dd][0].daylength[0].hours;
			_this.setUpVariables.dayLengthMinute	= daylight[0][_this.setUpVariables.thisMonth][0][_this.setUpVariables.dd][0].daylength[0].minutes;

			$('.time').html(_this.setUpVariables.currentHours + ':' +_this.setUpVariables.currentMinutes +' EST ');
			var timeleft = (((_this.setUpVariables.sunSetMinute*1)+(_this.setUpVariables.sunSetHour*60)) - ((_this.setUpVariables.currentHours*60) + (_this.setUpVariables.currentMinutes*1)));
			if (timeleft > 0){
				timeleft = "  & " + timeleft + " minutes of daylight left (in Brooklyn today).  Enjoy!";
			}else if (timeleft <= 0){
				timeleft = "It's dark in Brooklyn :(";
			}
			
			$('.hours').html(timeleft);
			//first lets turn the minutes into percentages
			_this.setUpVariables.riseTime = ((_this.setUpVariables.riseMinute / 60) + (_this.setUpVariables.riseHour*1));
			_this.setUpVariables.currentTime = ((_this.setUpVariables.currentMinutes / 60) + (_this.setUpVariables.currentHours * 1));
			_this.setUpVariables.setTime = ((_this.setUpVariables.sunSetMinute / 60) + (_this.setUpVariables.sunSetHour*1));
			_this.setUpVariables.dayTime = ((_this.setUpVariables.dayLengthMinute / 60)+(_this.setUpVariables.dayLengthHour*1));
			var lightTest;
			switch(true)
			{
				case (_this.setUpVariables.currentTime > (_this.setUpVariables.riseTime+1) && _this.setUpVariables.currentTime < (_this.setUpVariables.setTime - 1)):
					_this.setBodyClass('daylight');
					//console.log('it is daylight');
					break;
				case (_this.setUpVariables.currentTime > (_this.setUpVariables.setTime - 1) && _this.setUpVariables.currentTime < (_this.setUpVariables.setTime + 1)):
					_this.setBodyClass('sunset');
					//console.log('it is sunset');
					break;
				case (_this.setUpVariables.currentTime > (_this.setUpVariables.riseTime - 1) && _this.setUpVariables.currentTime < (_this.setUpVariables.riseTime + 1)):
					_this.setBodyClass('sunrise');
					//console.log('it is sunrise');
					break;
				case (_this.setUpVariables.currentTime < (_this.setUpVariables.riseTime - 1) || _this.setUpVariables.currentTime > (_this.setUpVariables.setTime + 1)):
					_this.setBodyClass('night');
					//console.log('it is night');
					break;
				default:
					_this.setBodyClass('normal');

			}

			//sun location function
			
			var dayProgress = (((_this.setUpVariables.currentTime - _this.setUpVariables.riseTime) / _this.setUpVariables.dayTime)*100);
			
		/*	console.log(riseTime);
			console.log(setTime);
			console.log(currentTime);
			console.log(dayTime);
			console.log('the percentage of the day complete is ' + dayProgress + ' %'); */

			
		});
	},
	setBodyClass: function(classname){
		$('body').addClass(classname);
	},
	setUpVariables: {},
	figurethisMonth: function(){
			switch (this.setUpVariables.mm)
				{
					case 0:
						this.setUpVariables.thisMonth = 'january';
						break;
					case 1:
						this.setUpVariables.thisMonth = 'february';
						break;
					case 2:
						this.setUpVariables.thisMonth = 'march';
						break;
					case 3:
						this.setUpVariables.thisMonth = 'april';
						break;
					case 4:
						this.setUpVariables.thisMonth = 'may';
						break;
					case 5:
						this.setUpVariables.thisMonth = 'june';
						break;
					case 6:
						this.setUpVariables.thisMonth = 'july';
						break;
					case 7:
						this.setUpVariables.thisMonth = 'august';
						break;
					case 8:
						this.setUpVariables.thisMonth = 'september';
						break;
					case 9:
						this.setUpVariables.thisMonth = 'october';
						break;
					case 10:
						this.setUpVariables.thisMonth = 'november';
						break;
					case 11:
						this.setUpVariables.thisMonth = 'december';
						break;

				}
		}

};
ianSite.technologies = {
	init: function(){
		this.bindEvents();
	},
	bindEvents: function(){

		var technologies;
		var constructedString = '';
		var buildWork = function(){
			var div = document.getElementById('workingNow');
			$.each(workItems, function(key, value){
			
				var technologies = workItems[key].technologies;
				var technologyString = '';
				$.each( technologies, function(x, value2){
					if(technologies[x] == true){
						technologyString = technologyString + '<span class="ian-icon ian-icon-'+x+'">'+x+'</span>';
					}
				});
				var linkString = '';
				if (workItems[key].link != ''){
					linkString = '<a href="'+ workItems[key].link +'" class="portfoliolink" target="_blank">Visit Site</a>';
				}
				
				constructedString = constructedString + '<div class="work-wrap"><div class="preview '+key+' col-xs-12 col-sm-4 col-lg-4"><img class="img-responsive" src="pics/assets/';
				constructedString = constructedString + workItems[key].imgsrc+'" alt="'+workItems[key].title+'"/></div><div class="detail col-lg-12 col-xs-12" id="';
				constructedString = constructedString + key +'" style="display:none;"><div class="close-detail"><p><i class="fa fa-chevron-left"></i> Back to All</p></div><h3>';
				constructedString = constructedString + workItems[key].title + '</h3><p>'+ workItems[key].description + '</p>'+linkString+'<div class="technologies"><h5>Technologies Used</h5> '+ technologyString +' </div></div></div>';

			});
			div.innerHTML = constructedString;
		};
		
		
		
		$( document ).on( "click", ".preview", function() {
			$('.preview').hide();
			$(this).siblings('.detail').show();
		});
		$( document ).on( "click", ".close-detail", function() {
			$('.preview').show();
			$('.detail').hide();
		});


		var _elementToFind = "workingNow";
		var _elementFound = false;

		$(document).bind("DOMSubtreeModified", function(evt) {
			if (_elementFound)
				return;
			if ($("#" + _elementToFind).length > 0) {
				_elementFound = true;
				buildWork();
			}
		});
		
		if (window.location.hash == '#!/about'){
			//console.log('about-page');
		}



	},
	setUpVariables: {}
};
$(function(){
	ianSite.daylight.init();
	ianSite.technologies.init();



	



});



