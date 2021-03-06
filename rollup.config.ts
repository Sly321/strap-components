import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import sourceMaps from 'rollup-plugin-sourcemaps'
import camelCase from 'lodash.camelcase'
import typescript from 'rollup-plugin-typescript2'

const pkg = require('./package.json')

const libraryName = pkg.name

export default {
    input: `src/index.ts`,
    output: [
        { file: pkg.main, name: camelCase(libraryName), format: 'umd', sourcemap: true },
        { file: pkg.module, format: 'es', sourcemap: true }
    ],
    watch: {
        include: 'src/**'
    },
    plugins: [typescript({ useTsconfigDeclarationDir: true }), commonjs(), resolve(), sourceMaps()]
}
