import HtmlWebpackPlugin from 'html-webpack-plugin'
import * as path from 'path'
import htmlTemplate from 'html-webpack-template'

export const mode = 'development'

export const entry = ['./site/index']

export const output = {
  filename: 'script.js',
  path: path.resolve(__dirname, 'dist'),
  publicPath: '/',
}

export const module = {
  rules: [

    {
      test: /\.(ts|js)x?$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      },
    },
    {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/'
          }
        }
      ],
    },
    {
      test: /\.(png|jpe?g|gif)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'images/'
          }
        },
      ],
    },
    {
      test: /\.js$/,
      enforce: 'pre',
      use: ['source-map-loader'],
    }
  ]
}

export const resolve = {
  extensions: ['.ts', '.tsx', '.js', '.json'],
}

export const plugins = [
  new HtmlWebpackPlugin({
    title: 'Messages',
    template: htmlTemplate,
    lang: 'ru',
    appMountId: 'root'
  }),
]
