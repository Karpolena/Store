var gulp = require('gulp');
var sass = require('gulp-sass'); 
// const autoprefixer = require('gulp-autoprefixer');

gulp.task('scss', function () {
    return gulp.src('./src/scss/pages/**/*.scss')
        
        .pipe(sass().on('error', sass.logError))
        // .pipe(autoprefixer({
        //     browsers: ['last 2 versions'],
        //     cascade: false
        // }))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/css'));
});

gulp.task('scss:watch', function () {
    gulp.watch('./src/scss/**/*.scss', ['scss']);
});