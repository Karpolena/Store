var gulp = require('gulp');
var sass = require('gulp-sass'); 
const autoprefixer = require('gulp-autoprefixer');

gulp.task('scss', function () {
    return gulp.src('src/scss/pages/*.scss')
        
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('public/css'));
});

gulp.task('watch', function () {
    gulp.watch('src/scss/pages/*.scss', ['scss']);
});