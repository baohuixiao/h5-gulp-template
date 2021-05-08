const {
    src,
    dest,
    task
} = require('gulp');
const connect = require('gulp-connect');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const ts = require('gulp-typescript');
const tsProject = ts.createProject("tsconfig.json");

task('js', (done) => {
    src('src/js/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(dest('dist/js'))
        .pipe(connect.reload())
    done()
})

task('ts', (done) => {
    src('src/ts/*.ts')
        .pipe(tsProject())
        .pipe(uglify())
        .pipe(dest('dist/ts'))
        .pipe(connect.reload())
    done()
})