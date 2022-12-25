# template
A template for ssc projects, using a preferred dev environment -- [standardx](https://www.npmjs.com/package/standardx), [git-hooks-plus](https://www.npmjs.com/package/git-hooks-plus), and typescript via a [jsconfig.json](jsconfig.json) file

This project is an example of using `ssc` without a `build` script in `ssc.config`. This will simply copy all files from an input directory to an output directory. So the build process is two discrete steps -- first build a static website as normal to the `public/` directory, then use `ssc` to build a binary app from the static website, which goes in the `dist/` folder.

## use
Use github's 'template' button, or clone this then `rm -rf .git && git init`. Then `npm i && npm init` and edit the source code in `src/main` and `src/render`.

The `src/main` script is optional. It is an example of a script using node's API, so it is appropriate for desktop apps. It can be removed with no bad effects.

## featuring

* lint via [standardx](https://www.npmjs.com/package/standardx) -- `npm run lint`
* git hooks via [git-hooks-plus](https://www.npmjs.com/package/git-hooks-plus) -- lint the code prior to `push`
* tests via [ssc-test](https://github.com/socketsupply/ssc-test), [tapzero](https://www.npmjs.com/package/tapzero) & [test-dom](https://www.npmjs.com/package/@socketsupply/test-dom)
* `import` syntax / ES6 modules 
* check the number of dependencies before you increase the version number -- `npm run preversion` -- see  [@socketsupply/check-max-deps](https://github.com/socketsupply/check-max-deps)
* view library [Tonic](https://tonicframework.dev/)

## npm scripts

### run
```
npm start
```

### test
```
npm test
```

### build
```
npm run build
```
