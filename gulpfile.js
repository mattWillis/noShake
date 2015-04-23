(function() {
  'use strict';

  var buildPaths,
    gulp = require('gulp'),
    $ = require('gulp-load-plugins')(),
    browserSync = require('browser-sync'),
    reload = browserSync.reload;

  buildPaths = {
    src: 'src',
    srcJs: 'src/js',
    srcSass: 'src/scss',
    distJs: 'dist/js',
    distCss: 'dist/styles',
  };

  gulp.task('scripts', function() {
   return gulp.src(buildPaths.srcJs + '/main.js')
     .pipe($.browserify({}))
     .pipe($.rename('app.js'))
     .pipe(gulp.dest(buildPaths.distJs))
  });

  gulp.task('sass', function() {
    return gulp.src(buildPaths.srcSass + '/**/*.scss')
      .pipe($.sass())
      .pipe(gulp.dest('.tmp/styles'))
      .pipe(gulp.dest(buildPaths.distCss))
      .pipe(browserSync.reload({stream: true}));
  });

//Start the server
gulp.task('serve', function() {
    browserSync({
        server: {
            baseDir: "./",
        },
        open: false
    });
});

  gulp.task('watch-src', function() {
    gulp.watch(buildPaths.srcSass + '/**/*.scss', ['sass']);
    gulp.watch(buildPaths.distJs, ['scripts', reload]);
    gulp.watch(buildPaths.srcJs + '/**/*{js,hbs}', ['scripts']);
    gulp.watch('*.html', reload);
  });


  gulp.task('build', ['scripts', 'sass']);
  gulp.task('watch', ['serve', 'watch-src']);
  gulp.task('default', ['build', 'watch']);

})();
