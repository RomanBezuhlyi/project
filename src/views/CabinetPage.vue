<template>
	<div class="cabinet container">
		<a class="cabinet__bell" href="#"
			><img src="../assets/images/bell.svg" alt=""
		/></a>
		<h3 class="cabinet__title">Кабінет користувача</h3>
		<ul class="cabinet__list">
			<li class="cabinet__item"><a href="#">Мої скарги</a></li>
			<li class="cabinet__item"><a href="#">Особисті дані</a></li>
			<li class="cabinet__item"><a href="#">Контактні дані</a></li>
			<li class="cabinet__item"><a href="#">Документи</a></li>
			<li class="cabinet__item"><a href="#">Конфіденційність</a></li>
			<li class="cabinet__item"><a href="#">Сповіщення</a></li>
		</ul>
	</div>
	<Menu />
</template>
<script>
import Menu from '../components/Menu.vue'
export default {
	components: {
		Menu,
	},
}
</script>
<style lang="scss" scoped>
@import '../assets/styles/main';

.cabinet {
	position: relative;
	width: 100%;
	height: calc(100vh - 76px);
	&__bell {
		position: absolute;
		right: 16px;
		top: 22px;
	}

	&__title {
		padding: 20px 16px;
		text-align: center;
		text-overflow: ellipsis;
		font-size: 18px;
		font-weight: 400;
		line-height: normal;
	}

	&__list {
		margin-top: 75px;
		@include flex(column, flex-start, flex-start);
		gap: 20px;
	}

	&__item {
	}
}
.container {
}
</style>
