 module.exports = {
     entry: process.env.PWD + '/src/app.js',
     output: {
         path: process.env.PWD + '/bin',
         filename: 'app.bundle.js'
     },
     module: {
         loaders: [{
             test: /\.js$/,
             exclude: /node_modules/,
             loader: 'babel-loader'
         }]
     }
 };
