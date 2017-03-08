export default {
    entry: 'src/app.js',
    dest: 'src/bundle.js',
    format: 'umd',
    plugins: [
        // scss(),
        // resolve({
        //     jsnext: true,
        //     browser: true,
        //     main: true,
        //     module: true,
        //     skip: d3Array
        // })
    ],
    moduleName: 'app'
};