module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'assets/css/mini.css': 'assets/css/_sass/mini.scss'
                }
            }
        },

        watch: {
            options: {
                spawn: false
            },

            css: {
                files: 'assets/css/_sass/**',
                tasks: ['sass']
            },

            jekyll: {
                files: './**',
                tasks: ['jekyll:build']
            }
        },

        jekyll: {
            options: {
                config: '_config.yml'
            },

            serve: {
                options: {
                    serve: true
                }
            },

            build: {
            }
        },

        concurrent: {
            server: {
                tasks: ['watch', 'jekyll:serve'],
                options: {
                    logConcurrentOutput: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-jekyll');

    grunt.registerTask('default', ['sass', 'jekyll:build']);

    grunt.registerTask('server', ['sass', 'concurrent:server']);
}
