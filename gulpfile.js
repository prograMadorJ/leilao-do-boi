var gulp = require('gulp');

var sass = require('gulp-sass');

var browserSync = require('browser-sync').create();

var useref = require('gulp-useref');

var uglify = require('gulp-uglify');

var gulpIf = require('gulp-if');

var cssnano = require('gulp-cssnano');

var del = require('del');

var runSequence = require('run-sequence');

gulp.task('hello',function(){
    console.log('Hello World');
});

gulp.task('browserSync',function(){
    browserSync.init({
        server: {
            baseDir: 'app/views'
        }
    })
});

/** Tarefa de processamento de sass */

gulp.task('sass',function(){
    return gulp.src('app/views/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/views/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('copy',function(){
    return gulp.src('app/views/**/*.html')
        .pipe(gulp.dest('app/views'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

/** Desenvolvimento just-in-time */

gulp.task('watch',['browserSync','sass'],function(){
    gulp.watch('app/views/scss/**/*.scss',['sass'])
    gulp.watch('app/views/*.html',browserSync.reload)
    // gulp.watch('app/views/css/**/*.css',browserSync.reload)
    // gulp.watch('app/views/js/**/*.js',browserSync.reload)
});


/** Tarefa de minificação de scripts */
gulp.task('useref',function(){
    return gulp.src('app/views/*.html')
    .pipe(useref())
    // .pipe(gulpIf('*.js',uglify()))
    .pipe(gulpIf('*.css',cssnano()))
    .pipe(gulp.dest('app/dist'))
});

/** Excluir pasta dist */
gulp.task('clean',function(){
    return del.sync('dist');
});

/** Execução de Tarefas independentes ou em paralelo */
gulp.task('tasks',['clean','sass'],function(){
    console.log('Executando Tarefas Independentes...');
});

/** Execução de Tarefas sequenciais */
gulp.task('build',function(){
    runSequence('clean','sass','useref')
});