
const gulp = require("gulp");
const rollup = require("rollup");
const fileService = require("fs");

gulp.task("create-js-from-html",(done)=>{
    const resolveTemplates = (dir) => {
        fileService.readdir(dir,(err,res)=>{
            res.forEach(x=>{
                if (x.includes(".template.html")) {
                    fileService.readFile(dir + "/" + x,"utf8",(err,res)=>{
                        const newContent = 'export default `' + res + '`';
                        fileService.writeFile(dir + "/" + x.replace(".template.html","") + ".template.js",newContent,()=>{});
                    });
                }
                else if (fileService.statSync(dir + "/" + x).isDirectory()) {
                    resolveTemplates(dir + "/" + x);
                }
            });
        });
    }
    resolveTemplates("./src");
    done();
});

gulp.task("build:js", () => {
    return rollup.rollup({
        input: "./src/main.js"
    }).then(bundle => {
        return bundle.write({
            file: "./dist/app.js",
            format: "iife",
            sourcemap: true
        });
    });
});

gulp.task("watch:js",()=>{
    return gulp.watch(["./src/**/*.js","./src/**/*.html","!./src/**/*.template.js"],gulp.series(
        "create-js-from-html",
        "build:js"));
});

gulp.task("default", gulp.series("create-js-from-html","build:js"));
        