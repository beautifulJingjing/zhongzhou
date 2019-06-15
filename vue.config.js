const path = require('path')

module.exports = {
	productionSourceMap: false,
	assetsDir: 'static',
	devServer: {
		proxy: {
			'/api/': {
				target: '192.168.9.10:7080',
				changeOrigin: true
			},
		}
	},
	chainWebpack: (config) => {
		const svgRule = config.module.rule('svg').include.add(path.join(__dirname, 'src/assets/svg')).end()

		const imagesRule = config.module.rule('images').test(/\.(png|jpe?g|gif|webp|svg)(\?.*)?$/)

		imagesRule.exclude.add(path.join(__dirname, 'src/assets/svg'))
		imagesRule.use('url-loader').loader('url-loader').options({
			limit: 4096,
			fallback: {
				loader: 'file-loader',
				options: {
				name: 'static/images/[name].[hash:8].[ext]'
				}
			}
        })

		svgRule.uses.clear()

		svgRule.use('svg-sprite-loader').loader('svg-sprite-loader').options({
			name: '[name]',
			prefixze: true

		})

		svgRule.use('svgo-loader').loader('svgo-loader').options({
			plugins: [
				{ removeTitle: true },
				{ convertColors: { shorthex: true } },
				{ convertPathData: true },
				{ cleanupAttrs: true },
				{ removeComments: true },
				{ removeDesc: true },
				{ removeUselessDefs: true },
				{ removeEmptyAttrs: true },
				{ removeHiddenElems: true },
				{ removeEmptyText: true }
			]
		})

		// ws 请求地址，全局变量注入
		config.plugin('define').tap((args) => {
			args[0]['process.env.WS_URL'] = JSON.stringify(process.env.WS_URL)

			return args
		})
        // console.warn(config.module.rule('js').exclude)
		config.module.rule('js').exclude.add(path.join(__dirname, 'src/utils/popper.js'))

	}
}