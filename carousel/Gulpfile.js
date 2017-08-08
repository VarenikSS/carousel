'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
 
gulp.task('sass', function () {
  return gulp.src('./sass/**/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});
 
gulp.task('default', function(){

		// watch me getting Sassy
		gulp.watch("sass/**/*.sass", function(event){
			gulp.run('sass');
		});
		
});