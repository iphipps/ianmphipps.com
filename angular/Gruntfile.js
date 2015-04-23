module.exports = function(grunt) {

	var globalConfig = {
		theme: 'ianmphipps2',
	};

	grunt.initConfig({
		// our global vars
		globalConfig: globalConfig,
		// package files we need
		pkg: grunt.file.readJSON('package.json'),
		// compass settings
		compass: {
			local: {
				options: {
					config: 'config.rb',
					sourcemap: true
				}
			}
		},
		watch: {
			compass: {
				files: [
					'app/assets/styles/**/*.{scss,sass}'
				],
				tasks: ['compass']
			}
		},
		// copy over theme-related files & plugins
		copy: {
			target: {
				files: [
					{src: 'app/favicon.ico', dest: 'runtime/favicon.ico'},
					{src: 'app/favicon.png', dest: 'runtime/favicon.png'},
					{src: 'app/tileicon.png', dest: 'runtime/tileicon.png'},
					{src: 'app/index.html', dest: 'runtime/index.html'},
					{src: 'app/bower_components/underscore/underscore-min.map', dest: 'runtime/assets/scripts/js/underscore-min.map'},
					{expand: true, cwd: 'app/', src: ['**','!**/*Thumbs.db','!**/*.sass-cache','!**/*DS_Store'], dest: 'runtime/'}
				]
			}
		},
		useminPrepare: {
			html: 'app/index.html'
		},
		concat: {
			js: {
				// order all your libraries and custom scripts here
				src: [
				  'app/bower_components/jquery/dist/jquery.min.js',
				  'app/bower_components/bootstrap/dist/js/bootstrap.min.js',
				  'app/bower_components/angular/angular.js',
				  'app/bower_components/angular-route/angular-route.js',
				  'app/bower_components/underscore/underscore.js',
				  'app/assets/scripts/work-items.js',
				  'app/app.js',
				  'app/components/daylight/daylight-functions.js',
				  'app/work/work.js',
				  'app/resume/resume.js',
				  'app/about/about.js',
				  'app/components/route-helpers/route-helpers.js'
				],
				dest: 'runtime/assets/scripts/js/app.js'
			}
		},
		uglify: {
			options: {
      			mangle: false
    		},
			target: {
				// script files w/o libraries
				files: {
					'runtime/assets/scripts/js/app.min.js': ['runtime/assets/scripts/js/app.js'],
				}
			}
		},
		cssmin: {
			combine: {
				files: {
					'runtime/assets/styles/css/style.min.css': ['runtime/assets/styles/css/style.css']
				}
			}
		},
		usemin: {
			html: ['runtime/index.html'],
			options: {
				dirs: ['runtime/<%= globalConfig.theme %>']
			}
		},
		clean: [
			'runtime/assets/styles/sass/',
			'runtime/bower_components/bootstrap/',
			'runtime/bower_components/angular/',
			'runtime/bower_components/angular-route/',
			'runtime/bower_components/angular-mocks/',
			'runtime/bower_components/angular-loader/',
			'runtime/assets/scripts/work-items.js',
			'runtime/app.js',
			'runtime/components/version',
			'runtime/components/daylight/daylight-functions.js',
			'runtime/work/work.js',
			'runtime/work/work_test.js',
			'runtime/resume/resume.js',
			'runtime/resume/resume_test.js',
			'runtime/about/about.js',
			'runtime/about/about_test.js',
			'runtime/components/route-helpers/'
		],
		imagemin: {
			main: {
				files: [{
					expand: true,
					cwd: 'app/assets/',
					src: ['**/*.{png,jpg,gif}'],
					dest: 'runtime/assets/'
				}]
			}
		}
	});

	// Load the needed plugins
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-usemin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-ftp-deploy');
	grunt.loadNpmTasks('grunt-gitinfo');
	grunt.loadNpmTasks('grunt-contrib-imagemin');

	// Default task(s).
	grunt.registerTask('build', ['gitinfo','compass:local','copy','useminPrepare','concat','cssmin','usemin','imagemin:main','clean']);
	
	

};