<template>
	<div class="search" @click="toggleSearchBlock">
		<input class="search__input" type="text" placeholder="Пошук" />
		<img class="search__icon" src="../assets/images/search.svg" alt="" />
	</div>
	<div
		class="search-block"
		:class="{ visible: isSearchBlockVisible }"
		@click="closeSearchBlock"
	>
		<div class="search-block__content" @click.stop>
			<div class="search-block__el"></div>
			<h6>Пошук</h6>
			<div class="search">
				<input class="search__input" type="text" placeholder="Пошук" />
				<img class="search__icon" src="../assets/images/search.svg" alt="" />
			</div>
			<span>Результатів немає</span>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			isSearchBlockVisible: false,
		}
	},
	methods: {
		toggleSearchBlock() {
			this.isSearchBlockVisible = !this.isSearchBlockVisible
		},
		closeSearchBlock() {
			this.isSearchBlockVisible = false
		},
	},
}
</script>
<style lang="scss" scoped>
@import '../assets/styles/main';
.search {
	position: relative;
	&__input {
		display: flex;
		height: 32px;
		padding: 6px 12px 6px 16px;
		border-radius: 50px;
		background: $input;
		font-size: 14px;
		font-weight: 300;
		line-height: 20px;
		&:placeholder {
			color: #657773;
		}
	}
	&__icon {
		position: absolute;
		top: 8px;
		right: 12px;
	}
}

.search-block {
	position: fixed;
	left: 0;
	bottom: 0;
	width: 100%;
	height: 100%;
	z-index: 2000;
	background: rgba(70, 82, 80, 0.9);
	opacity: 0;
	transform: translateY(100%);
	transition: opacity 0.3s ease, transform 0.3s ease;
	&.visible {
		opacity: 1;
		transform: translateY(0);
	}
	&__content {
		padding: 0 16px;
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 80%;
		background: $green;
		@include flex(column, flex-start, center);
	}
	&__el {
		margin: 16px 0;
		width: 32px;
		height: 4px;
		border-radius: 2px;
		opacity: 0.4;
		background: #959595;
	}
	h6 {
		text-align: center;
		font-size: 18px;
		font-weight: 400;
		line-height: normal;
		margin-bottom: 16px;
	}
	.search {
		width: 100%;
		input {
			width: 100%;
		}
	}
	span {
		display: block;
		margin-top: 16px;
		text-align: center;
		font-size: 14px;
		font-weight: 300;
		line-height: 20px; /* 142.857% */
	}
}
</style>
