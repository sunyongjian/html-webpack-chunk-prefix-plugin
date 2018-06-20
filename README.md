## introduction
给 html chunk 添加前缀


## Useage
```
npm install html-webpack-chunk-prefix-plugin --save-dev
```
```js
// webpack.config.js
const HtmlWebpackChunkPrefixPlugin = require('html-webpack-chunk-prefix-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const staticUrl = 'http://static.alicdn.com/';

module.exports = {
  
  plugins: {
    new HtmlWebpackPlugin({
      template: './index.html',
      chunks: 'all',
      inject: 'body'
    }),
    new HtmlWebpackChunkPrefixPlugin({
      prefix: staticUrl
    }),
  }
}
```

### output
```html

<!DOCTYPE html>
<html lang>
<head>
    <meta charset="UTF-8"/>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta name="viewport" content="width=device-width,initial-scale=0.7,user-scalable=no"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <link href="//static.alicdn.com/index.81c09bd12692705dc859.css" rel="stylesheet">

    <title>app</title>
</head>


<body>
<div id="root"></div>
<script type="text/javascript" src="//static.alicdn.com/common.25871385850e3baf2d03.js"></script>
<script type="text/javascript" src="//static.alicdn.com/index.81c09bd12692705dc859.js"></script></body>
</html>

```
