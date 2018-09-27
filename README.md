# wepy 图片转base64插件

## 由于很久以前就转回原生，不用wepy了，也没时间优化功能。加上WeCOS 小程序瘦身工具的出现，这个项目不维护了！！

## 安装

```
npm install wepy-plugin-img2base64 --save-dev
```

## 配置`wepy.config.js`

```
module.exports.plugins = {
    'img2base64': {
        css: true,
        html: true,
        path: './app/assets/images'
    }
};
```


## 参数说明
下一版本支持：
css: 是否读取css中的本地图片路径，并转换成base64
html: 读取<image>中的src属性，判断是本地图片路径，是否转换成base64
path: 图片存放路径
