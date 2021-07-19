const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
//const cssnano = require('gulp-cssnano');


gulp.task("scss", function () {
        return gulp.src('dev/scss/styles.scss')
                .pipe(sass({ outputStyle: "compressed" }))
                //               .pipe(cssnano())
                .pipe(gulp.dest('public/stylesheets'));
});



gulp.task("watch", function () {
        gulp.watch("dev/scss/**/*.scss");
});

gulp.task('default', gulp.parallel('scss', 'watch'));


