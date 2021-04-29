const {
    src,
    dest,
    task
} = require('gulp');
const connect = require('gulp-connect');
const babel = require('gulp-babel');

task('js', (done) => {
    src('src/js/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(dest('dist/js'))
        .pipe(connect.reload())
    done()
})