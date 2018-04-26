import gulp              from 'gulp';
import webserver         from 'gulp-webserver';
import zip               from 'gulp-zip';
import rename            from 'gulp-rename';
import template          from 'gulp-template';
import yargs             from 'yargs';
import path              from 'path';
import fs                from 'fs';
import vfs               from 'vinyl-fs';
import jsforce           from 'jsforce'
import { inject, cap }   from './gulp/component';
import log               from './gulp/log';
import DeploymentService from './gulp/deploy';
import UtilService       from './gulp/util';
import deployConfigSb    from './config/deploy.sb';
import deployConfigProd  from './config/deploy.prod';


gulp.task('serve', function() {
  gulp.src('dest')
    .pipe(webserver({
      livereload: true,
      directoryListing: {
      	enable: true,
        path:   'dest'
      },
      open: true,
      https: true
    }));
});


gulp.task('component', () => {
  const name = yargs.argv.name;
  inject(name)
  .then(
    () => {
      return gulp.src(path.join(__dirname, '', 'generator/component/**/*.**'))
        .pipe(
          template({ name: name, upName: cap(name) })
        )
        .pipe(rename((path) => {
          path.basename = path.basename.replace('seed', name);
        }))
        .pipe(gulp.dest( path.join('public/components', (yargs.argv.parent || ''), name) ));
    }
  )
});


/* Run server on default */
gulp.task('default', [ 'serve']);