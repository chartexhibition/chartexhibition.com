const path = require('path');


// hot loading for postcss config
// until this is officially supported
// https://github.com/postcss/postcss-loader/issues/66
const postcssPluginFile = require.resolve("./postcss.config.js")
const config = {};
const postcssPlugins = (webpackInstance) => {
  webpackInstance.addDependency(postcssPluginFile)
  delete require.cache[postcssPluginFile]
  return require(postcssPluginFile)(config)
}

module.exports = {
  title: 'chartexhibition.com React Component Library Style Guide',
  components: './src/components/**/*.js',
  skipComponentsWithoutExample: true,
  updateWebpackConfig(webpackConfig) {
    // Your source files folder or array of folders, should not include node_modules
    const dir = path.join(__dirname, 'src');
    webpackConfig.module.loaders.push(
      // Babel loader will use your project’s .babelrc
      {
        test: /\.js?$/,
        include: dir,
        loader: 'babel'
      },
      // Other loaders that are needed for your components
      // css
      {
        test: /\.css$/,
        include: dir,
        loader: 'style!css?modules&importLoaders=1!postcss-loader'
      },
      // svg as raw string to be inlined
      {
        test: /\.svg$/,
        include: dir,
        loader: "raw-loader",
      }
    );
    webpackConfig.postcss = postcssPlugins;
    return webpackConfig;
  },

};
