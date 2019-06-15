<template>
	<div class="loader">
		<svg class="circular">
			<circle cx="25" cy="25" r="20" fill="none" stroke="#4A90E2" stroke-width="3" stroke-linecap="round"/>
		</svg>
	</div>
</template>

<script>
	export default {
		name: 'loading'
	}
</script>

<style lang="scss" scoped>
.loader {
	width: 50px;
	height: 50px;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	.circular {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		animation: rotate 2s linear infinite;
	}

	circle {
		animation: circle-dash 1.5s ease-in-out infinite;
	}
}

@keyframes circle-dash {
	0% {
		stroke-dasharray: 1, 125;
		stroke-dashoffset: 0;
	}
	50% {
		stroke-dasharray: 100, 125;
		stroke-dashoffset: -25px;
	}
	100% {
		stroke-dasharray: 100, 125;
		stroke-dashoffset: -125px;
	}
}

@keyframes rotate {
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
}
</style>