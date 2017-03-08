import resolve from 'rollup-plugin-node-resolve';

export default {
    entry: 'src/app.js',
    dest: 'src/bundle.js',
    format: 'umd',
    // globals: { d3: 'd3' },
    // external: ['d3'],
    plugins: [
        // scss(),
        resolve({
            jsnext: true,
            browser: true,
            main: true,
            module: true
        })
    ],
    moduleName: 'app'
};