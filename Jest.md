什么是 Jest ？
Jest 是 Facebook 的一套开源的 JavaScript 测试框架， 它自动集成了断言、JSDom、覆盖率报告等开发者所需要的所有测试工具，是一款几乎零配置的测试框架。
TypeScript 的工具体系基本分为：Babel系 和 非Babel系。测试工具也不例外，分为 ts-jest 和 babel-jest。

1. 安装 jest  
``yarn add --dev jest``  
2. 生成配置文件  
``npx jest --init``
3. 按照引导进行选择后，会创建配置文件 jest.config.json，并在 package.json 中添加命令脚本 test: jest
4. 支持 babel 要想支持 ts 和 react，都需要先支持 babel，从而在测试环境中转换代码  
5. ``yarn add --dev babel-jest @babel/core @babel/preset-env``
6. 在项目的根目录下创建 babel.config.js ，通过配置 Babel 使其能够兼容当前的 Node 版本。
7. ``module.exports = {
   presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
   };``
8. 通过 Babel，Jest 能够支持 Typescript。首先要确保你遵循了上述 使用 Babel 指引。接下来安装 @babel/preset-typescript 插件：
9. ``yarn add --dev @babel/preset-typescript``
10. 然后将 @babel/preset-typescript 添加到 babel.config.js 中的 presets 列表中。
11. ``module.exports = {
    presets: [
    ['@babel/preset-env', {targets: {node: 'current'}}],
    '@babel/preset-typescript',
    ],
    };``
12. 不过，将 TypeScript 和 Babel 一起使用时有一些 注意事项 。 
由于 Babel 对 Typescript 的支持是通过代码转换（Transpilation） 
实现的，而 Jest 在运行时并不会对你的测试用例做类型检查。 如果你需要此功能，
可以使用 ts-jest ，或者单独（或作为构建流程的一部分）直接运行 TypeScript 编译器 tsc 。

## ts-jest
1. ts-jest是一个 TypeScript 预处理器，具有对 Jest 的源映射支持，可让您使用 Jest 测试用 TypeScript 编写的项目。
2. ``yarn add --dev ts-jest``
3. 为了让 Jest 转译 TypeScript ts-jest，您可能还需要创建一个配置文件。
类型定义  
有两种方法可以为用 TypeScript 编写的测试文件键入Jest 全局 API。  
1. 使用 Jest 附带的类型定义，并且会在您每次更新 Jest 时更新。只需从包中导入 API @jest/globals：
- 使用 Jest 附带的类型定义，并且会在您每次更新 Jest 时更新。只需从包中导入 API @jest/globals：
- ``import {describe, expect, test} from '@jest/globals';``
2. 或者您可以选择安装@types/jest软件包。它为 Jest 全局变量提供类型而无需导入它们。
- ``yarn add --dev @types/jest``

## 错误
- 将jest.config.ts改成了jest.config.js  
``// jest.config.js
module.exports = {
preset: "ts-jest",
testEnvironment: "node",
};``  
遇到了ReferenceError: module is not defined in ES module scope错误   

- 修改  
将它改成json文件。

## 错误  
testEnvironment  

1. The moduleNameMapper can be used to map a module path to a different module.  
By default the preset maps all images to an image stub module but if a module cannot be found this configuration option can help:
```
{
	"preset": "ts-jest",
	"testEnvironment": "jsdom",
	"transform": {
		"^.+\\.js$": "babel-jest",
		"^.+\\.(ts|tsx)$": "ts-jest"
	},
	"moduleNameMapper": {
		"\\.(css|scss)$": "identity-obj-proxy",
		"^antd/es/(.*)$": "<rootDir>/node_modules/antd/lib/$1",
		"^rc-util/es/(.*)$": "<rootDir>/node_modules/@ant-design/pro-layout/node_modules/rc-util/lib/$1"
	}
}
```  
```
yarn add jest-environment-jsdom

```  
```  
yarn add jsdom
```

``` 
yarn add identity-obj-proxy 
```




