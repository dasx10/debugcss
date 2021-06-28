const gulp  = require('gulp');
// const cssmin = require('cssmin');
const less = require('gulp-less');


function css () {
    return gulp.src(['./src/debug.less'])
        .pipe(less())
        // .pipe(cssmin())
        .pipe(gulp.dest('./build'));
}

module.exports.css = css;
module.exports.wcss = gulp.watch(['./src/**/**.less'], css);