module.exports = function(grunt) {
	var minimizedJsFileName = 'main_minimized.js';

	var vendorJS = [
		'dev/js_lib/jquery.js'
	];

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		// ----------------------------------
		// -- JAVASCRIPT
		// ----------------------------------

		// -- Combine all JavaScript files and minify them.
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
				mangle: false
			},

			buildLibs: {
				src: [
					vendorJS,
					'dev/js/**/*.js',
					'dev/js_app/DicectedArmyApp.js'
				],

				dest: 'build/js/' + minimizedJsFileName
			}
		},

		// ----------------------------------
		// -- TESTS
		// ----------------------------------

		// -- Run JSHint on relevant JavaScript files.
		jshint: {
			options: {
				force: true,
				reporterOutput: "",
				esnext: true
			},

			all: [
				'dev/js/**/*.js',
				'dev/js_app/**/*.js'
			]
		},


		// ----------------------------------
		// -- HTML
		// ----------------------------------

		// -- Call before 'usemin'.
		useminPrepare: {
			html: 'index.html',
			options: {
				root: 'dev',
				dest: 'build'
			}
		},

		// -- Replaces script tags with reference to the uglified version.
		usemin: {
			html: ['build/index.html']
		},

		// -- Copy assets from 'dev/' to 'build/'.
		copy: {
			main: {
				files: [
					{expand: true, cwd: 'dev/', src: ['assets/**'], dest: 'build/'},
					{expand: true, cwd: 'dev/', src: ['index.html'], dest: 'build/'}
				]
			}
		},

		scriptlinker: {
			options: {
				startTag: '<!-- build:js js/' + minimizedJsFileName +' -->',
				endTag: '<!-- endbuild -->',
				fileTmpl: '\n\t<script type="text/javascript" src="%s"></script>\n',
				appRoot: 'dev/'
			},
			debug: {
				files: {
					'dev/index.html': [
						vendorJS,
						'dev/js/**/*.js',
						'dev/js_app/DicectedArmyApp.js'
					]
				}
			}
		},

		// ----------------------------------
		// -- MISCELLANEOUS
		// ----------------------------------

		// -- Looks for changes in 'files: [...]'. When a change is detected, it runs 'tasks: [...]'.
		watch: {
			scripts: {
				files: [
					'dev/js/**/*.js',
					'dev/js_app/**/*.js'
				],

				tasks: [
					'jshint',
					'scriptlinker'
				],

				options: {
					nospawn: true,
					livereload: true
				}
			}
		},

		// -- Delete files
		clean: {
			build: [
				'build/**/*.html',
				'build/js/*.js',
				'build/assets/**/*',
			]
		}
	});

	// -- LOAD ALL NPM TASKS
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify-es');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-scriptlinker');
	grunt.loadNpmTasks('grunt-usemin');

	// -- DEFAULT IS TO DO A FULL RELEASE BUILD
	grunt.registerTask('default', [
		'clean',
		'jshint',
		'scriptlinker',
		'copy',
		'useminPrepare',
		'uglify',
		'usemin'
	]);

	// -- BUILD DEBUG
	grunt.registerTask('debug', [
		'jshint',
		'scriptlinker'
	]);
};
