// Include gulp
var gulp = require("gulp");

// Include Our Plugins
//var jshint = require("gulp-jshint");
var sass = require("gulp-sass");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");
var cssnano = require("gulp-cssnano");
var autoprefixer = require('gulp-autoprefixer');
var pug = require('gulp-pug');
var sourcemaps = require('gulp-sourcemaps');

gulp.task("sass", function() {
  return gulp.src("src/scss/**/*.scss")
  .pipe(sourcemaps.init())
  .pipe(autoprefixer({
      browsers: ['last 2 versions']
  }))
  .pipe(sass())
  /*.pipe(cssnano())
  .pipe(rename({ suffix: '.min' }))*/
  .pipe(sourcemaps.write())
  .pipe(gulp.dest("dist/assets/css/"));
});

gulp.task("scripts", function() {
  return gulp.src("src/js/*.js")
  .pipe(sourcemaps.init())
  /*.pipe(uglify())*/
  .pipe(sourcemaps.write())
  .pipe(gulp.dest("dist/assets/js/"));
});

gulp.task('pug', function() { // buildHTML
  return gulp.src('src/templates/*.pug')
  .pipe(pug({
      locals: '-P',
      pretty: true
    })
  )
  .pipe(gulp.dest("dist/"));
});

// Watch Files For Changes
gulp.task("watch", function() {
  gulp.watch("src/js/**/*.js", ["scripts"]);
  gulp.watch("src/scss/**/*.scss", ["sass"]);
  gulp.watch("src/templates/**/*.pug", ["pug"]);
});

// Default Task
gulp.task("default", ["sass", "scripts", "pug", "watch"]);