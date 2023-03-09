## 依赖安装

1. 安装eslint:
   ``yarn add eslint -D``
2. 安装eslint ts的解析器
   ``yarn add @typescript-eslint/parser -D``
3. 这个解析器是eslint解析语法的基础，也就是eslint配置文件parser属性填写的字段，除了这个ts解析器，eslint常见的解析器还有：  
   espree // eslint默认自带的解析器，识别不了比较新的js语法  
   @babel/eslint-parser // 需要安装，能够解析比较新的js语法
4. 安装js代码规范  
   引入业内大家普通使用的、遵循的编码规范，添加到eslint配置文件中的extends属性，该属性表示集成外部安装的一些规范，不用自己一条条手写rules配置.
5. ``yarn add eslint-config-standard -D``
6. 使用这个规范还需要再安装三个补丁包：
7. ``yarn add eslint-plugin-import eslint-plugin-node eslint-plugin-promise -D``
8. 安装ts语法规范  
   上面所安装的都是基础的js语法规范，一些ts独有的语法，比如interface、type等语法无法进行校验，所以需要再安装ts语法的检测规范，这里安装eslint官方的ts规则
9. ``yarn add @typescript-eslint/eslint-plugin -D``

## 编写配置文件

1. 上面已经将eslint检测ts文件的插件都安装完毕，下面编写.eslintrc.json 文件：
   .eslintrc.json：
   ``{
   "parser": "@typescript-eslint/parser", // 解析器

"env": {
"node": true,
"es6": true
},

"parserOptions": {
"ecmaVersion": 2020, // 指定js版本
"sourceType": "module" // 默认为script，使用es6 module设置为module
},

"extends": [ // 集成的代码规范
"eslint-config-standard",
"plugin:@typescript-eslint/recommended"
],

"plugins": [], // 插件

"rules": {
// 单独配置规则，会覆盖extends的规则
}
}``


