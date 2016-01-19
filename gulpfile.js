var gulp = require('gulp'),
    webserver = require('gulp-webserver');

// Serves static pagis with auto reload
gulp.task('webserver', function () {
    gulp.src('public')
        .pipe(webserver({
            livereload: true,
            open: true
        }));
});

// Serves static pages without auto reloading
gulp.task('run', function () { 
    gulp.src('public')
        .pipe(webserver({
            open: true
        }));
});

// stops web server
gulp.task('kill', function () {
    gulp.src('public')
        .pipe(webserver())
        .emit('kill');
});

// default gulp task that will be executed from command prompt if no tasks are specified
gulp.task('default', ['webserver']);