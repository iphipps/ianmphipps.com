
$(function() {
	$('.calculate').click( function(){
		var income = $('.salary input').val();
		var rateOne = 0.1;
		var ceilOne = 9225;
		var rateTwo = 0.15;
		var ceilTwo = 37451;
		var rateThree = 0.28;
		var ceilThree = 90751;
		var rateFour = 0.33;
		var ceilFour = 189301;
		var rateFive = 0.35;
		var ceilFive = 411501;
		var rateSix = 0.396;
		var ceilSix = 413201;
		var minusMedicarePercent = 0.009;
		var takeHome;
		var perWeek;
		var liability;
		//main tax rates
		if(income <= ceilOne){
			liability = income * rateOne;
		}else if(income <= ceilTwo){
			liability = (rateOne*ceilOne);
			liability = liability + ((income - ceilOne)*rateTwo);
		}else if(income <= ceilThree){
			liability = (rateOne*ceilOne);
			liability = liability + ((ceilTwo - ceilOne)*rateTwo);
			liability = liability + ((income - ceilTwo)*rateThree);
		}else if(income <= ceilFour){
			liability = (rateOne*ceilOne);
			liability = liability + ((ceilTwo - ceilOne)*rateTwo);
			liability = liability + ((ceilThree - ceilTwo)*rateThree);
			liability = liability +((income - ceilThree)*rateFour);
		}else if(income <= ceilFive){
			liability = (rateOne*ceilOne);
			liability = liability + ((ceilTwo - ceilOne)*rateTwo);
			liability = liability + ((ceilThree - ceilTwo)*rateThree);
			liability = liability + ((ceilFour - ceilThree)*rateFour);
			liability = liability +((income - ceilFour)*rateFive);
		}else if(income <= ceilSix){
			liability = (rateOne*ceilOne);
			liability = liability + ((ceilTwo - ceilOne)*rateTwo);
			liability = liability + ((ceilThree - ceilTwo)*rateThree);
			liability = liability + ((ceilFour - ceilThree)*rateFour);
			liability = liability + ((ceilFive - ceilFour)*rateFive);
			liability = liability +((income - ceilFive)*rateSix);
		}else if(income >= ceilSix){
			liability = (rateOne*ceilOne);
			liability = liability + ((ceilTwo - ceilOne)*rateTwo);
			liability = liability + ((ceilThree - ceilTwo)*rateThree);
			liability = liability + ((ceilFour - ceilThree)*rateFour);
			liability = liability + ((ceilFive - ceilFour)*rateFive);
			liability = liability +((income - ceilSix)*rateSix);
		}
		//+social security
		if (income <= 113700){
			liability = liability + (income*0.062);
		}else{
			liability = liability + (113700*0.062);
		}
		//+ medicare
		if (income >= 200000){
			liability = liability + (income*minusMedicarePercent);
		}
		//done
		takeHome = income - liability;
		perWeek = takeHome / 52;
		resultingPercent = takeHome/income*100;
		//for dressing up the outpu
		takeHome = takeHome.toFixed(2);
		perWeek = perWeek.toFixed(2);
		liability = liability.toFixed(2);
		resultingPercent = resultingPercent.toFixed(2);
		function numberWithCommas(x) {
			return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		}
		takeHome = numberWithCommas(takeHome);
		perWeek = numberWithCommas(perWeek);
		liability = numberWithCommas(liability);
		//for putting output onto the doc
		$('.take-home').html(takeHome);
		$('.per-week').html(perWeek);
		$('.liability').html(liability);
		$('.percent').html(resultingPercent);
	});

 });







