'use strict';
//declaring variables
const gulp = require('gulp'),
   nodemon = require('gulp-nodemon'),
     watch = require('gulp-watch'),
    jshint = require('gulp-jshint'),
livereload = require('gulp-livereload');


//register nodemon task
gulp.task('nodemon',() => {
  nodemon({ script: './bin/www', env: { 'NODE_ENV': 'development' }}).on('restart');
});

// Rerun the task when a file changes
gulp.task('watch', () => {
    let server = livereload();
    gulp.src(['*.js','routes/*.js', 'public/*.js'], { read: true })
        .pipe(watch({ emit: 'all' }))
        .pipe(jshint())
        .pipe(jshint.reporter('default'));

    gulp.watch(['*.js','routes/*.js', 'views/**/*.*', 'public/**/*.*'])
        .on('change', (file) => { server.changed(file.path); });
});

//lint js files
gulp.task('lint', () => {
    gulp.src(['*.js','routes/*.js', 'public/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['lint','nodemon', 'watch']);
