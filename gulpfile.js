const gulp = require('gulp');
const gulpAmpValidator = require('gulp-amphtml-validator');
const replace = require('gulp-replace');
const fs = require('fs');
const gulpSass = require('gulp-sass');

gulp.task('styles', function () {
    gulp.src('./scss/*.scss')    // 指定要處理的 Scss 檔案目錄
        .pipe(gulpSass())         // 編譯 Scss
        .pipe(gulp.dest('./css'));  // 指定編譯後的 css 檔案目錄
});


gulp.task('watch', function () {
    gulp.watch('scss/**/*.scss', ['styles']);
});


gulp.task('amp:test', () => {
  return gulp.src('*.html')
    // Valide the input and attach the validation result to the "amp" property
    // of the file object.

    .pipe(replace(/<link href="([^\.]+\.css)"[^>]*>/g, function(s, filename) {
      var style = fs.readFileSync('./css/'+filename, 'utf8');
      return '<style amp-custom>\n' + style + '\n</style>';
    }))
    .pipe(gulpAmpValidator.validate())
    // Print the validation results to the console.
    .pipe(gulpAmpValidator.format())
    // Exit the process with error code (1) if an AMP validation error
    // occurred.
    .pipe(gulpAmpValidator.failAfterError())
    .pipe(gulp.dest('./build'));
});
