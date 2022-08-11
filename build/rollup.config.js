
import { nodeResolve } from '@rollup/plugin-node-resolve'
import path from 'path'
import { terser } from 'rollup-plugin-terser'
import typescript from 'rollup-plugin-typescript2'
import pkg from '../package.json'
import babel from '@rollup/plugin-babel'
import postcss from 'rollup-plugin-postcss'
const deps = Object.keys(pkg.dependencies)
// eslint-disable-next-line @typescript-eslint/no-var-requires
const vue = require('rollup-plugin-vue')
const extensions = [".ts", ".js", ".tsx", '.jsx', '.vue']
export default {
    input: path.resolve(__dirname, '../packages/index.ts'),
    output: [
        {
            name: 'freeIMUI',
            format: 'es',
            file: pkg.module,
        },
        {
            name: 'freeIMUI',
            format: 'esm',
            file: pkg.module,
        },
    ],
    plugins: [
        typescript({
            tsconfigOverride: {
                compilerOptions: {
                    declaration: true,
                },
                'include': [
                    'packages/**/*',
                    'typings/shims-vue.d.ts',
                ],
                'exclude': [
                    'node_modules',
                    'packages/**/__tests__/*',
                ],
            },
            abortOnError: false,
        }),
        terser(),
        nodeResolve(),
        postcss(),
        
        vue({
            target: 'browser',
            css: false,
            exposeFilename: false,
        }),
        babel({ babelHelpers: "bundled", extensions }),

    ],
    external(id) {
        return /^vue/.test(id)
            || deps.some(k => new RegExp('^' + k).test(id))
    },
}

