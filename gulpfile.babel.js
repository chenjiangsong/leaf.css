'use strict'

import gulp from 'gulp'
import less from 'gulp-less'
import rename from 'gulp-rename'
import cleanCss from 'gulp-clean-css'

gulp.task('base', () => {
  return gulp.src('./src/main.less')
             .pipe(less())
             .pipe(cleanCss())
             .pipe(rename('leaf.css'))
             .pipe(gulp.dest('./'))
})

gulp.task('vscode', () => {
  return gulp.src('./src/vscode.less')
             .pipe(less())
             .pipe(cleanCss())
             .pipe(rename('leaf-vscode.css'))
             .pipe(gulp.dest('./'))
})

gulp.task('resume', () => {
  return gulp.src('./src/resume.less')
             .pipe(less())
             .pipe(cleanCss())
             .pipe(rename('leaf-resume.css'))
             .pipe(gulp.dest('./'))
})

gulp.task('default', ['base', 'resume', 'vscode'], () => {
  gulp.watch('./src/*.less', ['base', 'resume', 'vscode'])
})

gulp.task('build', ['base', 'resume'])
