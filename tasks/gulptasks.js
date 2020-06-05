const del = require("del");
const gulp = require("gulp");
const OUT_DIR = "./build";

// always copy the html first to dist folder
const srcHTML = "./app/template/*";
const srcCSS = "./app/styles/*";
const srcJS = "./app/js/*";
const srcAssets = "./app/assets/*";
const srcManifest = "./app/manifest.json";

function clean(done) {
    del.sync([OUT_DIR]);
    return done();
}

function copyHtml(done) {
    gulp.src(srcHTML).pipe(gulp.dest(OUT_DIR));
    done();
}

function copyCss(done) {
    gulp.src(srcCSS).pipe(gulp.dest(OUT_DIR));
    done();
}

function copyJs(done) {
    gulp.src(srcJS).pipe(gulp.dest(OUT_DIR + "/scripts/"));
    done();
}

function copyAssets(done) {
    gulp.src(srcAssets).pipe(gulp.dest(OUT_DIR + "/assets/"));
    done();
}

function copyManifest(done) {
    gulp.src(srcManifest).pipe(gulp.dest(OUT_DIR));
    done();
}

exports.clean = clean;
exports.copyHtml = copyHtml;
exports.copyCss = copyCss;
exports.copyJs = copyJs;
exports.copyAssets = copyAssets;
exports.copyManifest = copyManifest;
