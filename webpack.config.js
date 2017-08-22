module.exports = {
 entry: './client/main.ts',
 module: {
   rules: [
     {
       test: /\.tsx?$/,
       use: 'ts-loader',
       exclude: /node_modules/
     }
   ]
 },
 resolve: {
   extensions: [".tsx", ".ts", ".js"]
 },
 output: {
   filename: 'content/dist/bundle.js',
   path: __dirname
 }
};