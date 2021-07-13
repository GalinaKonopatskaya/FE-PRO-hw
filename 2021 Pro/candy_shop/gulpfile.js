const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');

const cssnano = require('gulp-cssnano')

        ;

gulp.task("scss", function () {
        return gulp.src('dev/scss/**.scss')
                .pipe(sass())
                .pipe(
                        autoprefixer(['last 15 versions', 'ie 8', 'ie 7'], {
                                cascade: true
                        })
                )
                .pipe(cssnano())
                .pipe(gulp.dest('public/stylesheets'));
});

gulp.task("watch", function (done) {


        gulp.watch("dev/scss/**/*.scss");
        // gulp.watch('app/*.html').on('change', browserSync.reload);
});

gulp.task('default', gulp.series('scss'));

