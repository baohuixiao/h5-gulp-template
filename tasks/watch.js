const {
    task,
    watch,
    series
} = require('gulp');

task('watch', (done) => {
    watch('src/js/*.js', series('js'));
    watch('src/html/*.html', series('html'));
    watch('src/css/*.css', series('css'));
    done()
})