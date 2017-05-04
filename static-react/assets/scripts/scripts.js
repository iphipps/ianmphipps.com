var ian = function() {
	console.log('ian initiates')
	var body = document.querySelector('body');
	var codeLink = document.querySelector('.js-code-link');
	var brandLink = document.querySelector('.js-brand-fake-link');
	var brands = document.querySelector('.js-brands');
	var nonBrands = document.querySelector('.js-non-brands');
	console.log(codeLink);
	var _this = this;
	var codeTpl = `<div class="terminal-foreground">
						<p>
							<span class="term"><span class="blue">iphipps</span>@<span class="green">devbox:</span><span class="orange">portfoliosite</span>$</span> 
							User is attempting to leave your site. <br/> <span class="delay-1">Shall we allow it? </span><span class="response"><span class="holder2"></span><span class="holder1"></span></span>
						</p>
					</div>
					<div class="terminal-background">
					</div>`;
	this.init = function () {
		this.addEvents();
	}
	this.addEvents = function () {
		
		codeLink.addEventListener('click', this.codeClick);
		brandLink.addEventListener('click', this.brandClick);
	}
	this.createTemplate = function() {
		var div = document.createElement("div");
		div.id = 'terminal';
		div.innerHTML = codeTpl;
		document.body.appendChild(div);
		body.className += " blurred";
		var move = function() {
			// return window.location = 'https://github.com/iphipps';
		}
		div.addEventListener('click', move);
		var holder1 = document.querySelector('.holder1');
		var held1 = '<span class="blink">|</span>';
		var holder2 = document.querySelector('.holder2');
		var held2 = '<span class="resp-1">YES</span>';
		window.setTimeout(function(){
			holder1.innerHTML = held1;
		}, 1300);
		window.setTimeout(function(){
			holder2.innerHTML = held2;
		}, 2500);
		window.setTimeout(move, 3000);
	}
	
	this.codeClick = function(e) {
		e.preventDefault();
		console.log(e);
		_this.createTemplate();

	}
	//_this.createTemplate();
	var backtoBasics = -1;
	this.brandClick = function(e) {
		body.className += " branded";
		backtoBasics = -1;
		body.addEventListener('click', _this.backToBasics);
	}

	this.backToBasics = function(e) {
		++ backtoBasics;
		if (backtoBasics === 0) {
			// do nothing
		} else {
			// make back to basics more and add the event listener
			
			body.classList.remove("branded");
			body.removeEventListener('click', _this.backToBasics);
		}
		console.log('back to basics should work', backtoBasics)
		
		// body.removeEventListener('click', this.backToBasics);
	}

}

document.addEventListener("DOMContentLoaded", function() {
  	console.log('doc loaded');
  	var hello = new ian();
  	hello.init();
});