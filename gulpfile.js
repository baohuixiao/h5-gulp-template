const {
    task,
    series
} = require('gulp');


var requireDir = require('require-dir');
requireDir('./tasks', { recurse: true });

task('default', series('html', 'js', 'css', 'serve', 'watch'))