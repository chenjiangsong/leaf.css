'use strict'

import gulp from 'gulp'
import less from 'gulp-less'
import rename from 'gulp-rename'
import cleanCss from 'gulp-clean-css'

gulp.task('less', () => {
  return gulp.src('./src/main.less')
             .pipe(less())
             .pipe(cleanCss())
             .pipe(rename('leaf.css'))
             .pipe(gulp.dest('./'))
})

gulp.task('default', ['less'], () => {
  gulp.watch('./src/*.less', ['less'])
})
