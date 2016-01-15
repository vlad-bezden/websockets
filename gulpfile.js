var gulp = require('gulp'),
	webserver = require('gulp-webserver');

gulp.task('webserver', function () {
	gulp.src('public')
		.pipe(webserver({
			livereload: true,
			open: true
		}));
});

gulp.task('kill', function () {
	gulp.src('public')
		.pipe(webserver())
		.emit('kill');
});

// default gulp task that will be executed from command prompt if no tasks are specified
gulp.task('default', ['webserver']);