
var gulp = require('gulp');
var runSequence = require('run-sequence');

require('aws-lambda-gulp-tasks')(gulp);

gulp.task('deploy', function(callback) {
  return runSequence(
    ['clean'],
    ['js', 'node-mods'],
    ['zip'],
    ['upload'],
    callback
  );
});
