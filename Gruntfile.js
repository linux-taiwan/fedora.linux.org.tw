module.exports = function(grunt) {
    grunt.initConfig({
        sass: {
            dist: {
                files: {
                    'style.css': 'style.scss'
                }
            }
        },
        csslint: {
            strict: {
                options: {
                    'known-properties': false,
                    'box-model': false
                },
                src: ['style.css']
            }
        },
        watch: {
            concurrent: {
                files: ['*.scss'],
                tasks: ['concurrent'],
                options: {
                    livereload: true
                }
            },
            livereload: {
                files: ['**/*.shtml'],
				tasks: ['copy', 'ssi'],
                options: {
                    livereload: true
                }
            }
        },
        connect: {
            server: {
                options: {
                    hostname: '*'
                }
            }
        },
        imagemin: {
            dist: {
                options: {
                    optimizationLevel: 3
                },
                files: [{
                    expand: true,
                    cwd: './',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: './'
                }]
            }
        },
        cssmin: {
            minify: {
                files: {
                    'style.css': 'style.css'
                }
            }
        },
        concurrent: {
            build: ['sass']
        },
        copy: {
            main: {
				files: [{
					expand: true,
					cwd: './',
					src: '*.shtml',
					dest: './',
					rename: function(dest, matchedSrcPath) {
						return dest + matchedSrcPath.slice(0, -5) + 'html';
					}
				}]
            }
        },
        ssi: {
            options: {
                input: './',
                output: './',
                matcher: '*.html'
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-concurrent');
	grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.registerTask('ssi', 'Flatten SSI includes in your HTML files.', function() {
        var ssi = require( 'ssi' )
                , opts = this.options()
                , files = new ssi( opts.input, opts.output, opts.matcher )
                ;
        files.compile();
        });
    grunt.registerTask('default', ['copy', 'ssi', 'connect', 'watch']);
    grunt.registerTask('build', ['imagemin', 'cssmin', 'csslint']);
};
