var GitRevisionPlugin = require('git-revision-webpack-plugin')
const gitRevisionPlugin = new GitRevisionPlugin();

console.log('Git Version', gitRevisionPlugin.version());

module.exports = {
    plugins: [
      new GitRevisionPlugin()
    ]
  }