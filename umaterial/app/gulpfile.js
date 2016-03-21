var gulp = require('gulp');
var less = require('gulp-less');
var concat = require('gulp-concat');
var csso = require('gulp-csso');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');


gulp.task('less', function () {
    return gulp.src(["demo.less"])
        .pipe(less())
        .pipe(gulp.dest('./css'))
        .pipe(rename({suffix: '.min'}))
        .pipe(csso())
        .pipe(gulp.dest('css'));
});



gulp.task('utilsUglify', function () {
    gulp.src([
            'utils.js'
        ])
        .pipe(concat('utils.js'))
        .pipe(uglify())
        .pipe(gulp.dest('js'));
});

gulp.task('materialJSConcat', function () {
    gulp.src([
            'js/utils.js',
            'app.js',
            'directive.js',
            'service.js'
        ])
        .pipe(concat('app.js'))
        .pipe(uglify({mangle: false}))
        .pipe(gulp.dest('js'));
});


gulp.task('less:watch', function () {
    gulp.watch(['*.less', '*.js'], ['less','utilsUglify','materialJSConcat']);
});


gulp.task('default', ['less','utilsUglify','materialJSConcat']);
