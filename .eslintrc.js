module.exports = {
	env: {
		// 指定eslint启动环境, browser: true也可以在浏览器设置
		browser: true,
		es2021: true,
		node: true,
	},
	extends: [
		// 扩展配置
		'eslint:recommended',
		'plugin:react/recommended', // react里必须的规则
		'plugin:@typescript-eslint/recommended',
		'prettier',
	],
	overrides: [],
	parser: '@typescript-eslint/parser', //TypeScript 提供了此解析器用于将其与 ESTree 兼容，使 ESLint 对 TypeScript 进行支持；
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react', '@typescript-eslint'], //是插件类型扩展
	// 这里可以进行自定义规则配置
	// key：规则代号
	// value：具体的限定方式
	//   "off" or 0 - 关闭规则
	//   "warn" or 1 - 将规则视为一个警告（不会影响退出码）,只警告，不会退出程序
	//   "error" or 2 - 将规则视为一个错误 (退出码为1)，报错并退出程序
	rules: {
		// 自定义规则 - 其实上面集成后有很多内置的规则, 这里可以进行规则的一些修改
		semi: [2, 'always'],
		// 'no-console': 'error',
		'@typescript-eslint/no-namespace': 'off',
	},
};
