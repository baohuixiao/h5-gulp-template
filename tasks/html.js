const {
    src,
    dest,
    task
} = require('gulp');
const connect = require('gulp-connect');

task('html', (done) => {
    src('src/html/*.html')
        .pipe(dest('dist'))
        .pipe(connect.reload())
    done()
})