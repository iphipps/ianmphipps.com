var ian = function() {
	console.log('ian initiates')
	var body = document.querySelector('body');
	var codeLink = document.querySelector('.code-link');
	console.log(codeLink);
	var codeTpl = `<div class="terminal-foreground">
						<p>
							<span class="term"><span class="blue">iphipps</span>@<span class="green">devbox:</span><span class="orange">portfoliosite</span>$</span> 
							User is attempting to leave your site. <br/> <span class="delay-1">Shall we allow it? </span><span class="response"><span class="resp-1">YES</span><span class="blink"></span></span>
						</p>
					</div>
					<div class="terminal-background">
					</div>`;
	this.init = function () {
		this.addEvents();
	}
	this.addEvents = function () {
		
		codeLink.addEventListener('click', this.codeClick);
	}
	this.createTemplate = function() {
		var div = document.createElement("div");
		div.id = 'terminal';
		div.innerHTML = codeTpl;
		document.body.appendChild(div);

		var move = function() {
			return window.location = 'https://github.com/iphipps';
		}
		div.addEventListener('click', move);
		// window.setTimeout(move, 3000);
	}
	var _this = this;
	this.codeClick = function(e) {
		e.preventDefault();
		console.log(e);
		_this.createTemplate();

	}
	_this.createTemplate();

}

document.addEventListener("DOMContentLoaded", function() {
  	console.log('doc loaded');
  	var hello = new ian();
  	hello.init();
});