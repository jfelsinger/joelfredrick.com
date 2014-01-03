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

        jekyll: {
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-jekyll');

    grunt.registerTask('default', ['sass:dist']);
}
