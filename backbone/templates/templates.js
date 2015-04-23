(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['tpl-about'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<br/>\n<br/>\n<br/>\n<div class=\"container\">\n     <div class=\"row\">\n        <div class=\"col-xs-12 col-sm-8 \">\n        	<h3>About Ian</h3>\n        	<p>     I make websites.</p>\n        	<p>     While, there is more that captivates me than the internet, my interests go beyond the scope of this portfolio site. For more information on me, see my <a href=\"#!/resume\">cv</a> on this site.  See <a href=\"#\">work</a> that I've been a part of and/or spearheaded. Follow the links below to different facets of my active life, most of them have publicly accessible data.\n			</p>\n			<p>     The internet appears to be making us more accountable, better at collaborating, a most cohesive humanity. While most people have preocupations about the internet and its use, I remain hopeful.  As you read this, people are helping each other throughout this beautiful internet. Next steps are to automate the manufacturing of energy and to clean up the planet.</p>\n			<p>     I intend to remain involved.</p>\n			<cite>-Ian Phipps</cite>\n        </div>\n        <div class=\"col-xs-12 col-sm-4 \"><img class=\"img-responsive\" alt=\"Ian Phipps - web developer\" src=\"pics/assets/ianweb.png\"></div>\n        \n\n    </div>\n    <div class=\"row contact-row\">\n    	<div class=\"col-lg-12 col-xs-12\">\n	    	<h4>Find Me</h4>\n			<a class=\"facebook\" href=\"https://www.facebook.com/imphipps\" target=\"_blank\"><i class=\"fa fa-facebook fa-2x\"></i></a>\n			<a class=\"linked-in\" href=\"http://www.linkedin.com/pub/ian-phipps/6/882/958\" target=\"_blank\"><i class=\"fa fa-linkedin fa-2x\"></i></a>\n			<a class=\"twitter\" href=\"https://twitter.com/ianmphipps\" target=\"_blank\"><i class=\"fa fa-twitter fa-2x\"></i></a>\n			<a class=\"github\" href=\"https://github.com/iphipps\" target=\"_blank\"><i class=\"fa fa-github-alt fa-2x\"></i></a>\n		</div>\n    </div>\n</div>\n";
},"useData":true});
templates['tpl-home'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"container\">\n	\n        \n			<div id=\"workingNow\" class=\"row\"></div>\n\n\n\n\n\n\n    \n</div>\n\n\n";
},"useData":true});
templates['tpl-resume'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "\n<div class=\"container resume-page\">\n    <div class=\"row\">\n    	<div class=\"col-xs-12\">\n				<address>\n				        <span class=\"name\">Ian M Phipps</span>\n				        <span class=\"phone\">401.640.7096</span>\n				        <span class=\"email\"><a href=\"mailto:ian@ianmphipps.com\">ian@ianmphipps.com</a></span>\n				        <span class=\"neighborhood\">Brooklyn, NY, 11249</span>\n				</address>\n				<section class=\"work\">\n					<h2>Work</h2>\n					<div class=\"section\">\n						<h3>Endurance International, <span=\"location-time\">Burlington, MA June 2013 - Present</span></h3>\n\n						<p>UI / UX / Front End Development Team Member working with back end engineers, marketing, product and project managers to continue improving our Control Panel, web hosting tools, among the other services and products that Endurance and its affiliates offer.</p>\n\n						<p>Html, css/scss, javascript, dancing around perl and version controlling with git.<p>\n\n						<p>Passed projects include: </p>\n						<ul>\n							<li>- Front End and UX on Google Apps for Work offering in Control Panel </li>\n							<li>- Front End and UX on Constant Contact offering in Control Panel </li>\n							<li>- Front End and UX on LocalLift, Yext offering in Control Panel </li>\n							<li>- Front End work on nTLD offering on EIG brand product pages. E.g., See domain.com, search for a domain (Backbone.js app) </li>\n							<li>- Contributed to Rebrand of startlogic.com & hostgator.com </li>\n							<li>- Theming for Site Expresso site builder </li>\n							<li>- Front end development of VPS offering </li>\n							<li>- Removed XSLT in favor of mason based templating system in vDeck control panel across 35+ brands -- 4.5million monthly users </li>\n							<li>- Integrated sass, twitter bootstrap ui and grunt workflows into EIG's vDeck web hosting platform on a server cluster that barely has ruby gems installed</li>\n						</ul>\n							\n					</div>\n					<div class=\"section\">\n						<h3>Hunt and Gather, <span=\"location-time\">Boston, MA August 2012 - June 2013</span></h3>\n						<p>Web Developer: working on team of Project managers, producers and designers building currently existing and new websites.  Most work involved wordpress and drupal site building and theming, although there was the occasional static site or small web application type project. Sites include, </p>\n							<ul class=\"hg-sites li-float\">\n								<li><a href=\"http://musicexperiment.com\" target=\"_blank\">The Music Experiment</a>, </li>\n								<li><a href=\"http://biologyhowlifeworks.com\" target=\"_blank\">Biology: How Life Works</a>. </li>\n								<li><a href=\"http://greenlightfund.org\" target=\"_blank\">Greenlight Fund</a>, </li>\n								<li> <a href=\"http://yourselfseries.com\" target=\"_blank\">Your Self Series</a>, </li>\n								<li><a href=\"http://mitxnext.org\" target=\"_blank\">Mitx Next</a>, </li>\n								<li><a href=\"http://developer.espn.com/events/espnw2012hackday\" target=\"_blank\">Developer ESPN - banner page</a>, </li>\n								<li><a href=\"http://fm-associates.com\" target=\"_blank\">FM Associates</a>, </li>\n								<li><a href=\"http://agcpartners.com\" target=\"_blank\">AGC Partners</a>, </li>\n								\n								<li>Among others.</li>\n							</ul>\n					</div>\n					<div class=\"section\">\n						<h3>Freelance Web Development,  <span=\"location-time\">Boston, MA Jan 2012 - Present</span></h3>\n						<p>Creating websites with an emphasis on semantic code, cross browser compatibility, accessibility, and fulfilling client demands while producing on time and within budget. Recent emphasis has been on responsive sites.  Sites include: </p>\n							<ul class=\"freelance-sites li-float\">\n								<li><a href=\"http://pamelasilva.com\" target=\"_blank\">Pamela Silva</a>, </li>\n								<li><a href=\"http://mprove.com\" target=\"_blank\">mProve</a>, </li>\n								<li><a href=\"http://brimfulshop.com\" target=\"_blank\">Brimful Shop</a>, </li>\n								<li><a href=\"http://carlosgomez-actor.com\" target=\"_blank\">Carlos Gomez - Actor</a>, </li>\n								<li><a href=\"http://gravitystudies.com\" target=\"_blank\">Gravity Studies</a>, </li>\n								<li><a href=\"http://lambdaprime.com\" target=\"_blank\">Lambda Prime</a> </li>\n							</ul>\n							<p>Sites utilize WordPress or Drupal.  Some of the above are hard coded. Most work has been with an art director, converting her mockups from .psd to work beautifully in the browser.</p>\n					</div>\n					\n					<div class=\"section\">\n						<h3>Phipps Realty, <span=\"location-time\">Warwick, RI August 2005 - October 2012</span></h3>\n						<p>Realtor - Marketing Coordinator: Brokered real estate transactions from first introduction passed closing and move-in.  Produced marketing materials for print and digital media exposure: Providence Journal, East Greenwich Magazine, phippsrealty.com. Created and manage Phipps Facebook page, YouTube channel, and twitter account. Production or development of the Phipps Realty websites throughout the years 2008, 2012.  Named Five Star Professional by Rhode Island magazine in both 2011 and 2012.  Member of top 5 producing teams in Kent County 2005-2012.</p>\n					</div>\n				</section><!-- /.work -->\n				<section class=\"education\">\n					<h2>Education</h2>\n					<p>Boston College, Chestnut Hill, MA 2007 B.A. Philosophy</p>\n				</section><!-- /.education -->\n				<section class=\"other-skills\">\n					<h2>Skills</h2>\n					<div class=\"section\">\n						<h3>Languages: </h3>\n						<ul class=\"languages li-float\"> \n							<li>Spanish</li>\n							<li>Portuguese</li>\n							<li>Efficient and clear communicator.</li>\n						</ul>\n					</div>\n					<div class=\"section\">\n						<h3>Technologies:</h3>\n						<ul class=\"computation li-float\">\n							<li>javascript, </li>\n							<li>html5, </li>\n							<li>css3, </li>\n							<li>git, </li>\n							<li>php, </li>\n							<li>sass, </li>\n							<li>backbone.js, </li>\n							<li>handlebars, </li>\n							<li>angular, </li>\n							<li>underscore, </li>\n							<li>jquery, </li>\n							<li>grunt, </li>\n							<li>gumby, </li>\n							<li>bootstrap, </li>\n							<li>linux, </li>\n							<li>cli, </li>\n							<li>sublime, </li>\n							<li>Drupal 6, 7, &#38; 8, </li>\n							<li>WordPress, </li>\n							<li>Adobe Photoshop, </li>\n							<li>Illustrator, </li>\n							<li>Chrome Dev Tools, </li>\n							\n					</div>\n				</section><!-- /.other-skills -->\n		</div>\n    </div>\n</div>\n";
},"useData":true});
templates['tpl-testing'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "<div class=\"container\">\n	\n        \n			<div class=\"row\" style=\"background-color: white; min-height: 200px;\">\n				\n				<h1>hello</h1>\n				"
    + alias2(alias1(depth0, depth0))
    + "\n\n				<h2>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.portfolioSite : depth0)) != null ? stack1.WorkItems : stack1), depth0))
    + "</h2>\n			</div>\n\n\n\n\n\n\n    \n</div>";
},"useData":true});
templates['tpl-work'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "\n<div class=\"row-fluid\">\n    <div class=\"portfolio-wrap\">\n        \n			<div id=\"workbeyotch\"></div>\n\n    		<div class=\"portfolio\" id=\"espnhackathon\">\n    			<h3>\n    				<a href=\"http://espn.huntandgather.com/devcenter/hackathon/espn.html\" target=\"_blank\">EspnW Dev Center:  Hack Day 2012</a></h3>\n    				<img alt=\"\" class=\"image-large\" src=\"pics/espnhackathon.jpg\" title=\"\" typeof=\"foaf:Image\"/>\n    				\n    		</div>\n			<div class=\"portfolio\" id=\"mitxnext\">\n				<h3>\n					<a href=\"http://mitxnext.org\" target=\"_blank\">Mitxnext.org</a></h3>\n					<p><img alt=\"\" class=\"image-large\" src=\"pics/mitxnext.jpg\" title=\"\" typeof=\"foaf:Image\">\n					</p>\n			</div>\n			<div class=\"portfolio\" id=\"greenlightfund\">\n				<h3>\n					<a href=\"http://greenlightfund.org\" target=\"_blank\">GreenlightFund.org</a></h3>\n					<p><a http://localhost/sites/greenlight/ href=\"pics/greenlightfund.jpg\" rel=\"gallery-all\" title=\"\"><img alt=\"\" class=\"image-large\" src=\"pics/greenlightfund.jpg\" title=\"\" typeof=\"foaf:Image\"></a>\n					</p>\n			</div>\n			<div class=\"portfolio\" id=\"miamiholidaygifs\">\n				<h3>\n					<a href=\"http://miamiholidaygifs.com\" target=\"_blank\">MiamiHolidayGifs.com</a></h3>\n					<p><a http://localhost/sites/greenlight/ href=\"pics/miamiholidaygifs.jpg\" rel=\"gallery-all\" title=\"\"><img alt=\"\" class=\"image-large\" src=\"pics/miamiholidaygifs.jpg\" title=\"\" typeof=\"foaf:Image\"></a>\n					</p>\n			</div>\n			<div class=\"portfolio\" id=\"yourselfseries\">\n				<h3>\n					<a href=\"http://yourselfseries.com\" target=\"_blank\">YourSelfSeries.com</a></h3>\n					<p><a http://localhost/sites/greenlight/ href=\"pics/yourselfseries.jpg\" rel=\"gallery-all\" title=\"\"><img alt=\"\" class=\"image-large\" src=\"pics/yourselfseries.jpg\" title=\"\" typeof=\"foaf:Image\"></a>\n					</p>\n			</div>\n			<div class=\"portfolio\" id=\"cgomez\">\n				<h3>\n					<a href=\"http://carlosgomez-actor.com\" target=\"_blank\">CarlosGomez-Actor.com</a></h3>\n					<p>		<a http://localhost/sites/greenlight/ href=\"pics/carlos1.png\" rel=\"gallery-all\" title=\"\"><img alt=\"\" class=\"image-large\" src=\"pics/carlos1.png\" title=\"\" typeof=\"foaf:Image\"></a></p>\n			</div>\n			<div class=\"portfolio\" id=\"phippsre\">\n				<h3>\n					<a href=\"http://phippsrealty.com\" target=\"_blank\">PhippsRealty.com</a></h3>\n					<p>		<a http://localhost/sites/greenlight/ href=\"pics/phipps_showcase.png\" rel=\"gallery-all\" title=\"\"><img alt=\"\" class=\"image-large\" src=\"pics/phipps_showcase.png\" title=\"\" typeof=\"foaf:Image\"></a></p>\n			</div>\n    															\n\n\n\n\n\n\n\n\n    </div>\n</div>\n";
},"useData":true});
})();