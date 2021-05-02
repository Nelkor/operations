import { HotModuleReplacementPlugin } from 'webpack'

export const devRoot = {
  mode: 'development',
  output: {
    publicPath: '/',
  },
  devServer: {
    hot: true,
    port: 5445,
    historyApiFallback: true,
  },
  devtool: 'inline-source-map',
}

export const devPlugins = [new HotModuleReplacementPlugin()]
