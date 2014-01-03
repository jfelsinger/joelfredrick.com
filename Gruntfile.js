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
            css: {
                files: 'assets/css/_sass/**',
                tasks: ['sass'],
                options: {
                    spawn: false
                }
            }
        },

        jekyll: {
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-jekyll');

    grunt.registerTask('default', ['sass', 'watch']);
}
