'use strict';

var gulp = require('gulp'),
    gp = require('gulp-load-plugins')();


gulp.task('pug', function () {
    return gulp.src('src/pug/*.pug')
        .pipe(gp.pug({
            pretty: true
        }))
        .pipe(gulp.dest('build'));

});

gulp.task('sass', function () {
    return gulp.src('src/static/sass/main.sass')
        .pipe(gp.sass({}))
        .pipe(gp.csso())
        .pipe(gulp.dest('build/static/css'));

});