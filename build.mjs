// @ts-check
import * as path from 'path'
import { promises as fs } from 'fs'
import * as esbuild from 'esbuild'
import buildTests from '@socketsupply/ssc-test/build-tests'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

//
// build a main and render script
//
async function main () {
    // render process
    await esbuild.build({
        entryPoints: ['src/render/index.mjs'],
        bundle: true,
        keepNames: true,
        // minify: true,
        outfile: path.join('./public/', 'bundle.js'),
        platform: 'browser'
    })

    // main process
    await esbuild.build({
        entryPoints: ['src/main/index.js'],
        bundle: true,
        keepNames: true,
        // format: 'cjs',
        outfile: path.join('./public/', 'main.js'),
        platform: 'node'
    })

    // html
    await cp('src/index.html', './public')

    // tests
    if (!buildTests.isTest()) return
    const testDir = path.join(__dirname, '/test')
    const outputDir = path.join(__dirname, '/public')
    await buildTests(testDir, outputDir)
}

main()

function cp (a, b) {
    return fs.copyFile(
        path.resolve(a),
        path.join(b, path.basename(a))
    )
}
