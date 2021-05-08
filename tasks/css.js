const gulp = require('gulp');
const connect = require('gulp-connect');
const minifyCss = require('gulp-minify-css')

const autoprefixer = require('gulp-autoprefixer')

gulp.task('css', (done) => {
    gulp.src('src/css/*.css')
        .pipe(autoprefixer({
            cascade: false,
            remove: false
        }))
        .pipe(minifyCss())
        .pipe(gulp.dest('dist/css'))
        .pipe(connect.reload())
    done()
})