var gulp = require('gulp');
var less = require('gulp-less');
var cleanCSS = require('gulp-clean-css');
var gcmq = require('gulp-group-css-media-queries');
var autoprefixer = require('gulp-autoprefixer');
var smartgrid = require('smart-grid');
var notify = require('gulp-notify');
var combiner = require('stream-combiner2').obj;

var browserSync = require('browser-sync').create();

gulp.task('styles', function() {
	
return combiner(
        gulp.src('less/style.less'),	
	less(),
	gcmq(),
	autoprefixer( {
			browsers: ['last 2 versions'],
			cascade: false

		}),
	gulp.dest('css')).on('error', notify.onError());
});

gulp.task('minify-css', () => {
  return gulp.src('css/*.css')
    .pipe(cleanCSS({level: 2}))
    .pipe(gulp.dest('min-css'));
});


var settings = {
    outputStyle: 'less', /* less || scss || sass || styl */
    columns: 12, /* number of grid columns */
    offset: '30px', /* gutter width px || % */
    mobileFirst: false, /* mobileFirst ? 'min-width' : 'max-width' */
    container: {
        maxWidth: '1200px', /* max-width оn very large screen */
        fields: '30px' /* side fields */
    },
    breakPoints: {

        400: {

            width: '400px'

        },

        lg: {
            width: '1100px', /* -> @media (max-width: 1100px) */
        },
        md: {
            width: '960px'
        },
        sm: {
            width: '780px',
            fields: '15px' /* set fields only if you want to change container.fields */
        },
        xs: {
            width: '560px'
        }
       
    }
};

smartgrid('less/', settings);


gulp.task('watch', ['styles']);
gulp.watch('./**/*.*', ['styles']);

gulp.task('serv', function() {
	browserSync.init({

		server: {
			baseDir: './',
			index: 'index.html'
		}
	});

	browserSync.watch('./**/*.*').on('change', browserSync.reload);
}); 


gulp.task('default', ['watch', 'serv']);