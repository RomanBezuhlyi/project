<template>
	<div v-if="type === 'error'" class="not-error">
		<p>{{ text }}</p>
	</div>
	<div v-else-if="type === 'success'" class="not-success">
		<p>{{ text }}</p>
	</div>
</template>

<script>
export default {
	name: 'Button',
	props: {
		type: {
			type: String,
		},
		text: {
			type: String,
			default: 'Помилка',
		},
	},
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/main';
.not-error {
	position: fixed;
	left: 50%;
	bottom: 16px;
	transform: translateX(-50%);
	@include flex(row, space-between, center);
	width: 350px;
	height: 48px;
	padding: 16px;
	color: $red;
	border-radius: 4px;
	background: $black;
	box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.25);
	font-weight: 400;
	line-height: normal;
}
.not-success {
	position: fixed;
	bottom: 16px;
	@include flex(row, space-between, center);
	width: 350px;
	height: 48px;
	padding: 16px;
	color: $white;
	border-radius: 4px;
	background: $black;
	box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.25);
	font-weight: 400;
	line-height: normal;
}
</style>
