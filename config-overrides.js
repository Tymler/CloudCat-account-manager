const { override, adjustStyleLoaders, addWebpackAlias } = require('customize-cra')
const { resolve } = require('path')
module.exports = override(
  adjustStyleLoaders((rule) => {
    if (rule.test.toString().includes("less")) {
      rule.use.push({
        loader: require.resolve("less-loader"),
	      options: {
          modifyVars: {
            '@primary-color': 'red'
		      }
	      }
      })
	  }
	  if (rule.test.toString().includes("scss")) {
		  rule.use.push({
			  loader: require.resolve("sass-resources-loader"),
			  options: {
          resources: "./src/assets/styles/variables.scss" // 这里是你自己放公共scss变量的路径
			  }
		  });
	  }
  }),
  addWebpackAlias({
    ['@']: resolve(__dirname, './src')
  })
)
