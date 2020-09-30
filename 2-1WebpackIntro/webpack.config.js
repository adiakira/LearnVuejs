const path=require('path')
// In order to get relative path below, we have to use
// a node syntax, const path=require('path') ,the inside path
// is inside node dependency libs, now we need node configuration file

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname,'./dist'),
    filename: 'bundle.js'
  }
}