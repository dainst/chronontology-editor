var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var typescript = require('gulp-typescript');
var browserSync = require('browser-sync');
var archiver = require('archiver');
var fs = require('fs');
var url = require('url');
var path = require('path');
var pkg = require('./package.json');
var webserver = require('gulp-webserver');
var modRewrite = require('connect-modrewrite');
var proxy = require('proxy-middleware');

// compile sass and concatenate to single css file in build dir
gulp.task('convert-sass', function() {

	return gulp.src('scss/app.scss')
	  	.pipe(sass({includePaths: [
			'node_modules/bootstrap-sass/assets/stylesheets/',
			'node_modules/mdi/scss/'
		], precision: 8}))
	  	.pipe(concat(pkg.name + '.css'))
	    .pipe(gulp.dest('css'));
});

function watch() {
    gulp.watch('scss/**/*.scss',      ['convert-sass']);
}

gulp.task('webserver-watch', function() {
	var proxyOptions = url.parse("http://localhost:4567");
	proxyOptions.route = '/data';

	browserSync({
		server: {
			baseDir: './',
			middleware: [
				proxy(proxyOptions),
				// rewrite for AngularJS HTML5 mode, redirect all non-file urls to index.html
				modRewrite(['!\\.html|\\.js|\\.svg|\\.css|\\.png|\\.jpg|\\.gif|\\.json|\\.woff2|\\.woff|\\.ttf$ /index.html [L]']),
			]
		},
		port: 8084
	});
	watch();
});


const tscConfig = require('./tsconfig.json');
gulp.task('compile',['convert-sass'], function () {
    // fonts
    gulp.src([
            'node_modules/mdi/fonts/**/*',
            'node_modules/bootstrap-sass/assets/fonts/**/*'
        ])
        .pipe(gulp.dest('fonts'));

    // templates
    gulp.src('node_modules/idai-components-2/src/templates/**/*').pipe(gulp.dest('src/templates/'));

    // sources
    gulp
		.src('app/**/*.ts')
		.pipe(typescript(tscConfig.compilerOptions))
		.pipe(gulp.dest('app/'));
	// test sources
    return gulp
		.src('test/**/*.ts')
		.pipe(typescript(tscConfig.compilerOptions))
		.pipe(gulp.dest('test/'));
});


