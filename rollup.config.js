import resolve from 'rollup-plugin-node-resolve';

export default {
    entry: 'src/app.js',
    dest: 'src/bundle.js',
    format: 'umd',
    plugins: [
        resolve({
            jsnext: true,
            // browser: true,
            main: true,
            module: true
        })
    ],
    moduleName: 'app'
};