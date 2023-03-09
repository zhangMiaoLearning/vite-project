## Husky + lint-staged
https://www.cnblogs.com/jiaoshou/p/12222665.html
### husky
如同其他许多的版本控制系统一样，Git 也具有在特定事件发生之前或之后执行特定脚本代码功能（从概念上类比，就与监听事件、触发器之类的东西类似）。Git Hooks 就是那些在Git执行特定事件（如commit、push、receive等）后触发运行的脚本。  

简单的说就是husky这个工具能在一些git的命令上埋下钩子，当我们使用这些命令的时候就会触发之前埋下的脚本，比如常用的pre-commit和commit-msg钩子，能在我们git commit之前调用一下，和提交commit message时再调用一下  

场景： 可用于commit提交代码时，检查代码规范和格式化，也可用于检查commit message是否符合message规范  
#### 自动（推荐）  
husky-init是用husky快速初始化项目的一次性命令。  
``npx husky-init && npm install       # npm ``  
``npx husky-init && yarn              # Yarn 1 ``  
``yarn dlx husky-init --yarn2 && yarn # Yarn 2+``  
``pnpm dlx husky-init && pnpm install # pnpm ``  
它将设置 husky，修改package.json并创建一个pre-commit您可以编辑的示例挂钩。npm test默认情况下，它会在您提交时运行。



### lint-staged
解决的痛点： 每次修改一个文件就给所有文件执行一次lint检查  

在代码提交之前，进行代码规则检查能够确保进入git库的代码都是符合代码规则的。但是整个项目上运行lint速度会很慢，lint-staged能够让lint只检测暂存区的文件，所以速度很快。  
``yarn add i husky lint-staged -D
``  
``"scripts": {
"precommit": "lint-staged"
"lint":"eslint src/"
},
"lint-staged": {
"*.{tsx,js,ts,jsx}": "eslint --cache --fix",
"*.{tsx,js,ts,jsx,html,json}": "prettier --write"
]
``  
原理： git commit时触发pre-commit钩子，运行lint-staged命令，对*.js执行eslint命令。eslint要提前配置好。
