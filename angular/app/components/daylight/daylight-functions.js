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
		
	},
	populateJson: function(json){
		

			var daylight	= json;
			ianSite.daylight.setUpVariables.riseHour		= daylight[0][ianSite.daylight.setUpVariables.thisMonth][0][ianSite.daylight.setUpVariables.dd][0].sunrise.split(":")[0];
			ianSite.daylight.setUpVariables.riseMinute		= daylight[0][ianSite.daylight.setUpVariables.thisMonth][0][ianSite.daylight.setUpVariables.dd][0].sunrise.split(":")[1];
			ianSite.daylight.setUpVariables.sunSetHour		= daylight[0][ianSite.daylight.setUpVariables.thisMonth][0][ianSite.daylight.setUpVariables.dd][0].sunset.split(":")[0];
			ianSite.daylight.setUpVariables.sunSetMinute	= daylight[0][ianSite.daylight.setUpVariables.thisMonth][0][ianSite.daylight.setUpVariables.dd][0].sunset.split(":")[1];
			ianSite.daylight.setUpVariables.dayLengthHour	= daylight[0][ianSite.daylight.setUpVariables.thisMonth][0][ianSite.daylight.setUpVariables.dd][0].daylength[0].hours;
			ianSite.daylight.setUpVariables.dayLengthMinute	= daylight[0][ianSite.daylight.setUpVariables.thisMonth][0][ianSite.daylight.setUpVariables.dd][0].daylength[0].minutes;

			angular.element(document.querySelector('.time')).html(ianSite.daylight.setUpVariables.currentHours + ':' +ianSite.daylight.setUpVariables.currentMinutes +' EST ');
			var timeleft = (((ianSite.daylight.setUpVariables.sunSetMinute*1)+(ianSite.daylight.setUpVariables.sunSetHour*60)) - ((ianSite.daylight.setUpVariables.currentHours*60) + (ianSite.daylight.setUpVariables.currentMinutes*1)));
			if (timeleft > 0){
				timeleft = "  & " + timeleft + " minutes of daylight left (in Brooklyn today).  Enjoy!";
			}else if (timeleft <= 0){
				timeleft = "It's dark in Brooklyn :(";
			}
			
			angular.element(document.querySelector('.hours')).html(timeleft);
			//first lets turn the minutes into percentages
			ianSite.daylight.setUpVariables.riseTime = ((ianSite.daylight.setUpVariables.riseMinute / 60) + (ianSite.daylight.setUpVariables.riseHour*1));
			ianSite.daylight.setUpVariables.currentTime = ((ianSite.daylight.setUpVariables.currentMinutes / 60) + (ianSite.daylight.setUpVariables.currentHours * 1));
			ianSite.daylight.setUpVariables.setTime = ((ianSite.daylight.setUpVariables.sunSetMinute / 60) + (ianSite.daylight.setUpVariables.sunSetHour*1));
			ianSite.daylight.setUpVariables.dayTime = ((ianSite.daylight.setUpVariables.dayLengthMinute / 60)+(ianSite.daylight.setUpVariables.dayLengthHour*1));
			var lightTest;
			switch(true)
			{
				case (ianSite.daylight.setUpVariables.currentTime > (ianSite.daylight.setUpVariables.riseTime+1) && ianSite.daylight.setUpVariables.currentTime < (ianSite.daylight.setUpVariables.setTime - 1)):
					ianSite.daylight.setBodyClass('daylight');
					//console.log('it is daylight');
					break;
				case (ianSite.daylight.setUpVariables.currentTime > (ianSite.daylight.setUpVariables.setTime - 1) && ianSite.daylight.setUpVariables.currentTime < (ianSite.daylight.setUpVariables.setTime + 1)):
					ianSite.daylight.setBodyClass('sunset');
					//console.log('it is sunset');
					break;
				case (ianSite.daylight.setUpVariables.currentTime > (ianSite.daylight.setUpVariables.riseTime - 1) && ianSite.daylight.setUpVariables.currentTime < (ianSite.daylight.setUpVariables.riseTime + 1)):
					ianSite.daylight.setBodyClass('sunrise');
					//console.log('it is sunrise');
					break;
				case (ianSite.daylight.setUpVariables.currentTime < (ianSite.daylight.setUpVariables.riseTime - 1) || ianSite.daylight.setUpVariables.currentTime > (ianSite.daylight.setUpVariables.setTime + 1)):
					ianSite.daylight.setBodyClass('night');
					//console.log('it is night');
					break;
				default:
					ianSite.daylight.setBodyClass('normal');

			}

			//sun location function
			
			var dayProgress = (((ianSite.daylight.setUpVariables.currentTime - ianSite.daylight.setUpVariables.riseTime) / ianSite.daylight.setUpVariables.dayTime)*100);
			
		/*	console.log(riseTime);
			console.log(setTime);
			console.log(currentTime);
			console.log(dayTime);
			console.log('the percentage of the day complete is ' + dayProgress + ' %'); */


	},
	setBodyClass: function(classname){
		angular.element(document.getElementsByTagName('body')).addClass(classname);
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




angular.module('myApp.daylight', []).controller("daylightCtrl", function($scope, $http) {
  $http.get('components/daylight/daylight.js').
    success(function(data, status, headers, config) {
    	
    	ianSite.daylight.init();
      	ianSite.daylight.populateJson(data);
      	angular.element(document.querySelector('.weather')).removeClass('hide');
      //console.log(data);
    }).
    error(function(data, status, headers, config) {
      	angular.element(document.querySelector('.weather')).addClass('hide');
    });
});

