
function HtmlWebpackChunkPrefix(options) {
  this.prefix = options.prefix;
}
    
HtmlWebpackChunkPrefix.prototype.apply = function (compiler) {
  const SELF = this;
  compiler.plugin('compilation', function(compilation) {
    compilation.plugin('html-webpack-plugin-before-html-processing', function(htmlPluginData, callback) {
      const { assets } = htmlPluginData;
      const js = assets.js.map(item => SELF.prefix + item);
      const css = assets.css.map(item => SELF.prefix + item);
      assets.js = js;
      assets.css = css;
      callback();
    });
  })
}

module.exports = HtmlWebpackChunkPrefix;
