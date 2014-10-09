'use strict';
var LIVERELOAD_PORT = 4500;

var gulp = require('gulp'),
    bower = require('gulp-bower'),
    browserify = require('gulp-browserify'),
    compass = require('gulp-compass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    rimraf = require('gulp-rimraf'),
    notify = require('gulp-notify'),
    jekyll = require('gulp-jekyll'),
    mocha = require('gulp-mocha');


// Configuration Directories
var dir = {
    client: '.',
    dist: 'dist'
};

gulp.task('rimraf', function() {
    return;
});

gulp.task('bower', function() {
    return;
    return bower()
        .pipe(gulp.dest(dir.client + 'assets/js/vendor'));
});

gulp.task('bower-styles', function() {
    return bower({
        cwd: dir.client + '/assets/styles'
    })
});

gulp.task('styles', ['bower-styles'], function() {
    return gulp.src(dir.client + '/assets/styles/*.{scss,sass}')
        .pipe(compass({
            style: 'expanded',
            css: dir.client + '/assets/styles',
            sass: dir.client + '/assets/styles',
            require: ['breakpoint']
        }))
        .pipe(autoprefixer())
        // .pipe(gulp.dest(dir.client + '/assets/styles'))

        // .pipe(minifycss())
        .pipe(gulp.dest(dir.dist + '/css'))

        .pipe(notify({message: 'Styles task complete' }));
});

gulp.task('clientScripts', function() {
    return gulp.src([
            dir.client + '/assets/js/**/*.js',
            '!' + dir.client + '/assets/js/models/**',
            '!' + dir.client + '/assets/js/view-models/**',
            '!' + dir.client + '/assets/js/lib/**',
            '!' + dir.client + '/assets/js/vendor/**',
        ])
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('default'))
        .pipe(browserify())
        .pipe(uglify())
        .pipe(gulp.dest(dir.dist + '/js'))

        .pipe(notify({ message: 'Client scripts task complete' }));
});

gulp.task('watch', ['client'], function() {

    // Watch styles
    gulp.watch(dir.client + '/assets/styles/**/*.{sass,scss}', ['styles']);

    // Watch client scripts
    gulp.watch(dir.client + '/assets/js/**/*.js', ['clientScripts']);

    // Watch markup
    gulp.watch([
        './*.{html,markdown,md}',
        './_layouts/**/*.html',
        './_posts/**/*.{markdown,md}'
    ], ['jekyll']);

});

gulp.task('jekyll', function() {
    return;
    return gulp.src([
            dir.client + '/*.{html,markdown,md}',
            dir.client + '/_layouts/**/*.html',
            dir.client + '/_posts/**/*.{markdown,md}'
        ])
        .pipe(jekyll({
            source: './',
            destination: './_site',
            bundleExec: true
        }))
        .pipe(gulp.dest(dir.client + '/_site'));
});

gulp.task('mocha', function() {
    return gulp.src('./test/**/*.js')
        .pipe(mocha({ reporter: 'list' }));
});

gulp.task('lint', function() {
    return gulp.src([
            'gulpfile.js',
            'test/**/*.js'
        ])
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('default'))
        .pipe(notify({ message: 'Linting task complete' }));
});

gulp.task('client', ['rimraf', 'bower'], function() {
    gulp.start('jekyll', 'styles', 'clientScripts');
});

gulp.task('test', ['lint', 'mocha']);

/** Build it all up and serve it */
gulp.task('default', ['watch']);
