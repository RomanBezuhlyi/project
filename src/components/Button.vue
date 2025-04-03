<template>
	<button
		:disabled="disabled"
		:class="[buttonClass, { 'is-loading': isLoading }]"
		@click="handleClick"
		type="button"
		:style="{ pointerEvents: isLoading ? 'none' : 'auto' }"
	>
		<template v-if="isLoading">
			<span class="loader"></span>
		</template>
		<template v-else>
			<slot>{{ text }}</slot>
		</template>
	</button>
</template>

<script>
export default {
	name: 'Button',
	props: {
		text: {
			type: String,
		},
		buttonClass: {
			type: String,
			default: 'primary',
		},
		disabled: {
			type: Boolean,
			default: false,
		},
		loader: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {
			isLoading: false,
		}
	},
	methods: {
		handleClick() {
			if (this.loader) {
				this.isLoading = true
				setTimeout(() => {
					this.isLoading = false
					this.$emit('click')
				}, 2000)
			} else {
				this.$emit('click')
			}
		},
	},
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/main';

.primary {
	@include flex(row, center, center);
	width: 100%;
	height: 48px;
	padding: 8px 32px;
	gap: 8px;
	border-radius: 16px;
	background: $black;
	border: 2px solid $black;
	color: $white;
	font-size: 16px;
	font-weight: 400;
	line-height: 22px;
	position: relative;
	overflow: hidden;

	&:hover {
		background: transparent;
		color: $black;
		border: 2px solid $black;
	}

	&:disabled {
		color: $grey;
		background: $disBut;
		border-color: $disBut;
		cursor: not-allowed;
	}

	&.is-loading {
		&:hover {
			background: $black; // Не змінюється ховер при завантаженні
			color: $white;
			border-color: $black;
		}
	}
}

.outline {
	@include flex(row, center, center);
	width: 100%;
	height: 48px;
	padding: 8px 32px;
	gap: 8px;
	border-radius: 16px;
	border: 1px solid $black;
}

/* СТИЛІ ДЛЯ ЛОАДЕРА */
.loader {
	width: 24px;
	height: 24px;
	border: 3px solid transparent;
	border-top-color: #fff;
	border-radius: 50%;
	animation: spin 1s linear infinite; /* анімація для обертання */
}

@keyframes spin {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}
</style>
