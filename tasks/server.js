const {
    task,
} = require('gulp');

const connect = require('gulp-connect');

task('serve', (done) => {
    connect.server({
        root: './dist',
        port: 7777,
        livereload: true,
    })
    done()
})