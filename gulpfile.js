'use strict';

var gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

sass.compiler = require('node-sass');

gulp.task('sass', function () {
   return gulp.src('./assets/scss/styles.scss')
   .pipe(sass().on('error', sass.logError))
   .pipe(gulp.dest('./dist/'));
});