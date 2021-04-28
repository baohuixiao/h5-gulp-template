const {
    task,
    src,
    dest,
    watch,
    series
} = require('gulp');
const babel = require('gulp-babel');
const connect = require('gulp-connect');
const autoprefixer = require('gulp-autoprefixer');
const del = require('del');

task('serve', (done) => {
    connect.server({
        root: './dist',
        port: 7777,
        livereload: true,
    })
    done()
})

task('html', (done) => {
    src('src/html/*.html')
        .pipe(dest('dist'))
        .pipe(connect.reload())
    done()
})

task('js', (done) => {
    src('src/js/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(dest('dist/js'))
        .pipe(connect.reload())
    done()
})

task('css', (done) => {
    src('src/css/*.css')
        .pipe(autoprefixer({
            cascade: false,
            remove: false
        }))
        .pipe(dest('dist/css'))
        .pipe(connect.reload())
    done()
})

task('watch', (done) => {
    watch('src/js/*.js', series('js'));
    watch('src/html/*.html', series('html'));
    watch('src/css/*.css', series('css'));
    done()
})

// task('clean', done => {
//     del('./dist');
//     done();
// })

task('default', series('html', 'js', 'css', 'serve', 'watch'))