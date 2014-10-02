/**
 * Gulp
 *
 * @author Justin Hedani
 * @todo Concatenated css producing line breaks...
 */
var gulp        = require('gulp');
var livereload  = require('gulp-livereload');
var plumber     = require('gulp-plumber');
var concat      = require('gulp-concat');
var imagemin    = require('gulp-imagemin');
var stylus      = require('gulp-stylus');

// Images
gulp.task('images', function() {
  gulp.src('client/src/images/**')
    .pipe(imagemin())
    .pipe(gulp.dest('client/images/'));
});

// CSS/Stylus
gulp.task('styles', function() {
  gulp.src('client/src/styl/*.styl')
    .pipe(plumber()) // Handle errors, keep pipe clear for other routines.
    .pipe(stylus({
      compress: true
    }))
    .pipe(concat('slipper.css'))
    .pipe(gulp.dest('client/css/'))
});

// Watch (included with Gulp by default)
gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('client/src/**/*.styl', ['stylus']);
});

// Default Gulp tasks to run
gulp.task('default', ['images', 'styles', 'watch']);
