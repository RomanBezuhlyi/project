<template>
	<div class="menu-wrap">
		<div class="container">
			<ul class="menu">
				<li class="menu__link">
					<a href="/"><img src="../assets/images/home.svg" alt="" />Головна</a>
				</li>
				<li class="menu__link">
					<a href="#"><img src="../assets/images/var.svg" alt="" />Важливе</a>
				</li>
				<li class="menu__link">
					<a href="#"><img src="../assets/images/add.svg" alt="" />Створити</a>
				</li>
				<li class="menu__link">
					<a href="#"
						><img src="../assets/images/hero.svg" alt="" />Антигерої
					</a>
				</li>
				<li class="menu__link">
					<a href="/cabinet"
						><img src="../assets/images/user.svg" alt="" />Кабінет</a
					>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
export default {
	name: 'Menu',
}
</script>
<style lang="scss" scoped>
@import '../assets/styles/main';

.menu-wrap {
	width: 100%;
	height: 76px;
	padding: 0px 0 8px 0;
	background-color: $black;
}
.menu {
	@include flex(row, space-between, flex-end);
	&__link {
		@include flex(column, flex-end, center);
	}
	&__link a {
		@include flex(column, flex-end, center);
		gap: 4px;
		color: $white;
		text-align: center;
		font-size: 10px;
		line-height: normal;
		padding: 12px 0px 16px 0px;
	}
}
</style>
