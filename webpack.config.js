var GitRevisionPlugin = require('git-revision-webpack-plugin')
const gitRevisionPlugin = new GitRevisionPlugin();

console.log('p                                                                               p');
console.log('================== Git Version ==================', gitRevisionPlugin.version());
console.log('p                                                                               p');


console.log('p        hjkhhkhkjhk                                                                         p');

module.exports = {
    plugins: [
      new GitRevisionPlugin()
    ]
  }