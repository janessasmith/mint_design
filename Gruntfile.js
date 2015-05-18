module.exports = function (grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		watch: {
			scripts: {
				files: ['sass/project/**/*.scss', 'sass/third-party/**/*.scss'],
				tasks: ['sass_directory_import'],
				options: {
					spawn: false
				}
			}
		},

		// Sass import files
		sass_directory_import: {
			your_target: {
				quiet: true, // short output result in cmd
				files: {
					// The file pattern to add @imports to.
					// The name of the file is arbitrary - I like "all".
					src: ['sass/**/_all.scss']
				}
			}
		},

		// spritesmith
		sprite: {
			all: {
				src: 'img/sprite/*.png',
				dest: 'img/sprite.png',
				destCss: 'sass/base/_--sprite.scss',
				algorithm: 'top-down',
				padding: 10 // for padding right and bottom
			}
		}

	});

	// Load the plugin.
	grunt.loadNpmTasks('grunt-sass-directory-import');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-spritesmith');


	// Default task(s).
	grunt.registerTask('default', []);
	grunt.registerTask('watcher', ['watch']);

	grunt.registerTask('sassImport', ['sass_directory_import']);
	// grunt sprite, run sprite task
};
