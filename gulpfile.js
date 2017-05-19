//JS
// Requis
var gulp = require('gulp');

// Include plugins
var plugins = require('gulp-load-plugins')(); // tous les plugins de package.json

// Variables de chemins

gulp.task('sass', function(){
  return gulp.src('app/scss/style.scss')
    .pipe(plugins.sass()) // Converts Sass to CSS with gulp-sass
    .pipe(plugins.autoprefixer())
    .pipe(gulp.dest('app/css'))
});

gulp.task('watch', function(){
  gulp.watch('app/scss/**/*.scss', ['sass']);
  // autres observations
});