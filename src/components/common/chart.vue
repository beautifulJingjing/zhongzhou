<template>
	<div class="chart-wrapper" ref="chart"></div>
</template>

<script>
	export default {
		name: 'chart',

		props: {
			data: {
				type: Object,
				required: true
			},
			func: {
				type: Function
			}
		},

		watch: {
			data(value) {
				// this.$chart.setOption(this.data)
				this.$chart.setOption(value)
			}
		},

		mounted() {
			this.generateChart()
		},

		destroyed() {
			window.removeEventListener('resize', this.$resizeHandler)
		},

		methods: {
			generateChart() {
				this.$chart = this.$echarts.init(this.$refs['chart'], null, {
					renderer: 'svg'
				})

				this.$chart.setOption(this.data)

				this.func && this.$chart.on('click', this.func)

				// 监听 resize
				this.$resizeHandler = () => this.$chart.resize()
				window.addEventListener('resize', this.$resizeHandler)
			},
		}
	}
</script>