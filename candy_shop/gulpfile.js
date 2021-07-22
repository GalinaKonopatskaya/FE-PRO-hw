const project_folder = "public";
const source_folder = "dev";

let {src, dest} = require('gulp'),
       gulp = require('gulp'),
      browsersync = require('browser-sync').create();

// const sass = require('gulp-sass')(require('sass'));
// const autoprefixer = require('gulp-autoprefixer');
//const cssnano = require('gulp-cssnano');




const path = {
        build: {
                html : project_folder+"/",
                css : project_folder+"/css/",
                js : project_folder+"/js/",
                img : project_folder+"/img/",
                fonts : project_folder+"/fonts/",
        },
        dev: {
                html : source_folder+"/*.html",
                css : source_folder+"/scss/styles.scss",
                js : source_folder+"/scripts/scripts.js",
                img : source_folder+"/img/**/*.{jpg, png, svg, gif, ico, webp}",
                fonts : source_folder+"/fonts/*.ttf",
        },
        watch: {
                html : source_folder+"/**/*.html",
                css : source_folder+"/scss/**/*.scss",
                js : source_folder+"/scripts/**/*.js/",
                img : source_folder+"/img/**/*.{jpg, png, svg, gif, ico, webp}",
        },

        clean : "/" + project_folder + "/"
}



function browserSync(params) {
        browsersync.init({
                
                server : {
                        baseDir : "/" + project_folder + "/"
                },
                
                port : 3000,
                notify : false,
        })
        
}

function html() {
        return src(path.dev.html)
        .pipe(dest(path.build.html))
        .pipe(browsersync.stream())
}


const build = gulp.series(html);
const watch = gulp.parallel(build, browserSync);

exports.html =  html;
exports.build = build;
exports.watch = watch;
exports.default = watch;




// gulp.task("scss", function () {
//         return gulp.src('dev/scss/**.scss')
//                 .pipe(sass({ outputStyle: "compressed" }))
//                 //               .pipe(cssnano())
//                 .pipe(gulp.dest('public/stylesheets'));
// });



// gulp.task("watch", function (done) {
//         gulp.watch("dev/scss/**/*.scss");
//         done()

// });

// gulp.task('default', gulp.parallel('scss', 'watch'));

