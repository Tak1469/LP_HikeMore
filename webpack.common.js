const { ProvidePlugin } = require('webpack');
const path = require('path');
// エントリーポイント複数指定するプラグイン 
const WebpackWatchedGlobEntries = require('webpack-watched-glob-entries-plugin');
// HTMLファイルを生成している
const HtmlWebpackPlugin = require('html-webpack-plugin');
// webpack5 推薦のESlint プラグイン
const ESLintPlugin = require('eslint-webpack-plugin');
// CSSファイルをjsにまとめずに外出しにするプラグイン
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// entryオプションを複数指定する
const entries = WebpackWatchedGlobEntries.getEntries([path.resolve(__dirname, './src/js/**/*.js')], {
  ignore: path.resolve(__dirname, './src/js/**/_*.js'),
})();

// htmlを複数コンパイルするための処理
const htmlGlobPlugins = (entries, srcPath) => {
  return Object.keys(entries).map((key) =>
    new HtmlWebpackPlugin({
      inject: 'body',
      filename: `${key}.html`,
      template: `${srcPath}/${key}.html`,
      chunks: [key],
    })
  );
};

module.exports = ({ outputFile, assetFile }) => ({
  // mode: 開発用 development、本番用productと分ける
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  // entry: 指定したファイルを元にdistに吐き出される。
  entry: entries,
  // 複数用意する場合
  // entry: {
  //   app: './src/app.js',
  //   sub: './src/sub.js'
  // },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: `./js/${outputFile}.js`,
    // 本番環境なので名前もハッシュ化できる。
    // filename: '[name].[contenthash].js'
    // 複数のバンドルする場合は
    // filename: '[name].bundle.js'
    // とする。[name]にentryで設定したkeyの名前がつく。
    // 今回の場合は index.bundle.js app.bundle.js
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_module/,
        loader: 'babel-loader',
      },
      {
        // 対象となる拡張子
        test: /\.(scss|sass|css)$/i,
        // 下から実行される
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              // postcss-loader と sass-loader の場合は2を指定
              importLoaders: 2,
              // 0 => no loaders (default);
              // 1 => postcss-loader;
              // 2 => postcss-loader, sass-loader
            },
          },
          'postcss-loader',// 設定はpostcss.config.jsにて
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        generator: {
          filename: `./img/${assetFile}[ext]`,
        },
        type: 'asset/resource',
      },
      {
        test: /\.(ttf|otf|eot|woff|woff2)$/i,
        generator: {
          filename: `./font/${assetFile}[ext]`,
        },
        type: 'asset/resource',
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
    ],
  },
  plugins: [
    // cssファイルプラグイン
    new MiniCssExtractPlugin({
      filename: `./css/style.css`,
    }),
    // エントリーポイント複数指定の実行
    ...htmlGlobPlugins(entries, './src'),
    // よく使うモジュールなどを変数として省略できる。
    new ProvidePlugin({
      // jqueryの場合
      $: 'jquery',
      jQuery: 'jquery'
    }),
    // ESlintプラグイン
    new ESLintPlugin({
      // 自動修正を true
      fix: true,
    }),
  ],
  // ES5(IE11等)向けの指定（webpack 5以上で必要）
  target: ["web", "es5"],
});