const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
//const cssnano = require('gulp-cssnano');





;

gulp.task("scss", function () {
        return gulp.src('dev/scss/**.scss')
                .pipe(sass({ outputStyle: "compressed" }))
                //               .pipe(cssnano())
                .pipe(gulp.dest('public/stylesheets'));
});



gulp.task("watch", function (done) {
        gulp.watch("dev/scss/**/*.scss");
        done()

});

gulp.task('default', gulp.parallel('scss', 'watch'));

