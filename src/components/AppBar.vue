<template>
	<div class="bar-wrap">
		<div class="container">
			<div class="bar">
				<a class="bar__logo" href="#"
					><img src="../assets/images/logo.svg" alt=""
				/></a>
				<Search />
				<button class="bar__btn">
					<img src="../assets/images/filter.svg" alt="" />
				</button>
				<button class="bar__btn">
					<img src="../assets/images/bell.svg" alt="" />
				</button>
			</div>
		</div>
	</div>
</template>
<script>
import Search from './Search.vue'
export default {
	name: 'AppBar',
	components: {
		Search,
	},
}
</script>
<style lang="scss" scoped>
@import '../assets/styles/main';
.bar-wrap {
	height: 64px;
	background: $green;
}
.bar {
	@include flex(row, space-between, center);
	gap: 16px;
	padding: 12px 0;
	&__logo {
		@include flex(row, center, center);
		width: 40px;
		height: 40px;
		border-radius: 8px;
		overflow: hidden;
	}
	&__btn {
		@include flex(row, center, center);
	}
}
</style>
