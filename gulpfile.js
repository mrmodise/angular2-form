  /* gulp server for running Angular code.
    gulp typescript to convert TS to JS.
    gulp sourcemaps for mapping errors to TS not JS.
    tsconfig for TS configuration: https://github.com/Microsoft/TypeScript/wiki/tsconfig.json for more info */
var gulp = require('gulp');
var webserver = require('gulp-webserver');
var typescript = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var tscConfig = require('./tsconfig.json');

/* define source and destination of files. 
The TS files processed to JS files in the development folder*/
var appSrc = 'builds/development/';
var tsSrc = 'process/typescript/';

/* process HTML */
gulp.task('html', function() {
  gulp.src(appSrc + '**/*.html');
});

/* process CSS */ 
gulp.task('css', function() {
  gulp.src(appSrc + '**/*.css');
});

/*  copy the development files from node modules to custom directory.
Have placed them in one location for convienence */ 
gulp.task('copylibs', function() {
  return gulp
    .src([
      'node_modules/es6-shim/es6-shim.min.js',
      'node_modules/systemjs/dist/system-polyfills.js',
      'node_modules/angular2/bundles/angular2-polyfills.js',
      'node_modules/systemjs/dist/system.src.js',
      'node_modules/rxjs/bundles/Rx.js',
      'node_modules/angular2/bundles/angular2.dev.js'
    ])
    .pipe(gulp.dest(appSrc + 'js/lib/angular2'));
});

/* Task to process the TS to JS*/ 
gulp.task('typescript', function () {
  return gulp
    .src(tsSrc + '**/*.ts')
    .pipe(sourcemaps.init())
    .pipe(typescript(tscConfig.compilerOptions))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(appSrc + 'js/'));
});

/* Monitor files and folders for changes and updates browser accordingly */ 
gulp.task('watch', function() {
  gulp.watch(tsSrc + '**/*.ts', ['typescript']);
  gulp.watch(appSrc + 'css/*.css', ['css']);
  gulp.watch(appSrc + '**/*.html', ['html']);
});

/* Preview the website in real-time*/ 
gulp.task('webserver', function() {
  gulp.src(appSrc)
    .pipe(webserver({
      livereload: true,
      open: true
    }));
});

/* run the tasks in sequence */ 
gulp.task('default', ['copylibs', 'typescript', 'watch', 'webserver']);
