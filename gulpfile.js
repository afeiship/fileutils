(function () {

  'use strict';

  var gulp = require('gulp');
  var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del']
  });



  gulp.task('default', function () {
    return gulp.src('src/**')
      .pipe(gulp.dest('dist'));
  });


}());
