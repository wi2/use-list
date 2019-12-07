const webpack = require('webpack')
const path = require('path')
const externalReact = require('webpack-external-react')

const ROOT = __dirname
const DESTINATION = path.join(ROOT, '/dist')
const SRC = path.join(ROOT, '/src')
/** wepback resolve */
const RESOLVE = {
  extensions: ['.tsx', '.ts', '.js', '.jsx'],
}

/** webpack plugins */
const PLUGINS = []
const MODULE = {
  rules: [
    // Scripts
    {
      test: /\.tsx?$/,
      exclude: [/node_modules/],
      loader: 'ts-loader',
      include: [SRC],
    },
  ],
}
const OUTPUT = {
  filename: 'index.js',
  libraryTarget: 'umd',
  library: '@wi2/use-list',
  path: DESTINATION,
}

module.exports = {
  node: {
    fs: 'empty',
  },
  entry: {
    app: ROOT + '/src/index.tsx',
  },
  externals: [
    "@wi2/hooks-plus",
    externalReact.externals
  ],
  module: {
    noParse: [
      ...externalReact.noParse,
      require.resolve('@wi2/hooks-plus'),
    ],
  },
  context: ROOT,
  resolve: RESOLVE,
  mode: 'production',
  module: MODULE,
  plugins: PLUGINS,
  devtool: 'source-map',
  devServer: {},
  output: OUTPUT,
}
