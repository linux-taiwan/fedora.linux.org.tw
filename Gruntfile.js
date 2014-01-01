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
                files: ['*.html'],
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
    grunt.registerTask('default', ['connect', 'watch']);
    grunt.registerTask('build', ['imagemin', 'cssmin', 'csslint']);
};
