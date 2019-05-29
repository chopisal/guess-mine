import gulp from "gulp";
import sass from "gulp-sass";
import autoprefixer from "gulp-autoprefixer";
import minifyCSS from "gulp-csso";

sass.compiler = require("node-sass");

const paths = {
  styles: {
    src: "assets/scss/styles.scss",
    dest: "src/static/styles",
    watch: "assets/scss/**/*.scss"
  }
};

const styles = () =>
  gulp
    .src(paths.styles.src)
    .pipe(sass())
    .pipe(autoprefixer({ browsers: ["last 2 versions"], cascade: false }))
    .pipe(minifyCSS())
    .pipe(gulp.dest(paths.styles.dest));

const watchFiles = () => {
  gulp.watch(paths.styles.watch, styles);
};
