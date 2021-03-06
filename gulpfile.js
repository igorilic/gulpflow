var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var args = require('yargs').argv;

gulp.task('vet', function () {

  log({
    task: 'VET',
    step: 'analizying ...'
  });
  return gulp.src([
    './src/**/*.js',
    './*.js'
  ])
    .pipe($.if(args.verbose, $.print()))
    .pipe($.jscs())
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish', {verbose: true}))
    .pipe($.jshint.reporter('fail'));
});

/////

function log(msg) {
  if (typeof(msg) === 'object') {
    for (var item in msg) {
      if (msg.hasOwnProperty(item)) {
        $.util.log($.util.colors.cyan(item) + ': ' + $.util.colors.blue(msg[item]));
        // util.log(util.colors.blue(msg[item]));
      }
    }
  } else {
    $.util.log($.util.colors.blue(msg));
  }
}

