const gulp = require('gulp'),
      uglify = require('gulp-uglify'),
      babel = require('gulp-babel'),
      sass = require('gulp-ruby-sass');


// scripts task
gulp.task('scripts', () =>
  gulp.src('src/app.js')
    .pipe(babel({
        presets: ['env']
    }))
    .pipe(gulp.dest('dist'))
);


// styles task
gulp.task('styles', function(){
  return sass('./sass/*.scss')
    .on('error', sass.logError)
    .pipe(gulp.dest('./css'));
});


// watch task
gulp.task('watch', function(){
  gulp.watch('src/*.js', ['scripts']);
  gulp.watch('sass/*.scss', ['styles']);
});


gulp.task('default', ['scripts', 'styles', 'watch']);
