const gulp = require("gulp");
const concat = require("gulp-concat");
const sass = require("gulp-sass");

const vendorStyles = [
    "node_modules/bootstrap/dist/css/bootstrap.min.css"
];
const vendorScripts = [
    "node_modules/jquery/dist/jquery.min.js",
    "node_modules/popper.js/dist/umd/popper.min.js",
    "node_modules/bootstrap/dist/js/bootstrap.min.js",
];

gulp.task("build", ["build-vendor", "sass"]);

gulp.task("build-vendor", ["build-vendor-css", "build-vendor-js"]);

gulp.task("build-vendor-css", () => {
    return gulp.src(vendorStyles)
        .pipe(concat("vendor.min.css"))
        .pipe(gulp.dest("wwwroot/css"));
});

gulp.task("build-vendor-js", () => {
    return gulp.src(vendorScripts)
        .pipe(concat("vendor.min.js"))
        .pipe(gulp.dest("wwwroot/scripts"));
});

gulp.task("sass", function () {
    return gulp.src("wwwroot/css/**/*.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(gulp.dest("wwwroot/css"));
});

gulp.task("sass:watch", function () {
    gulp.watch("wwwroot/styles/**/*.scss", ["sass"]);
});