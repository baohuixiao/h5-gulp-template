const gulp = require('gulp');
const connect = require('gulp-connect');

const autoprefixer = require('gulp-autoprefixer')

gulp.task('css', (done) => {
    gulp.src('src/css/*.css')
        .pipe(autoprefixer({
            cascade: false,
            remove: false
        }))
        .pipe(gulp.dest('dist/css'))
        .pipe(connect.reload())
    done()
})