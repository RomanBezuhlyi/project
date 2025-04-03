<template>
	<div class="modal" @click.self="$emit('close')">
		<button class="modal__back" @click="$emit('close')">
			<img src="../assets/images/back.svg" alt="close" />
		</button>
		<div class="container">
			<h3 class="modal__name">За номером телефону</h3>
			<div>
				<h2 class="modal__action">Вхід</h2>
				<Input
					class="modal__input"
					type="tel"
					v-model="tel"
					:isError="isErrorTel"
				/>
				<Input
					class="modal__input"
					type="password"
					v-model="password"
					label="Пароль"
					:isError="isErrorPassword"
				/>
				<a class="modal__enter" :href="`/reset-password?type=tel`"
					>Забули пароль?</a
				>
				<Button
					class="modal__btn"
					loader
					text="Увійти"
					:disabled="!tel.length || !password.length"
					@click="handleSubmit"
				/>
			</div>
		</div>
		<Notification
			v-if="showNotificationPassword"
			:type="'error'"
			text="Невірний пароль"
		/>
		<Notification
			v-if="showNotificationTel"
			:type="'error'"
			text="Користувача не існує"
		/>
	</div>
</template>

<script>
import Button from './Button.vue'
import Input from './Input.vue'
import Notification from './Notification.vue'

export default {
	name: 'ModalAuthTel',
	components: {
		Notification,
		Input,
		Button,
	},
	data() {
		return {
			tel: '',
			password: '',
			showNotificationTel: false,
			showNotificationPassword: false,
			isErrorTel: false,
			isErrorPassword: false,
		}
	},
	methods: {
		handleSubmit() {
			if (this.password.length < 6) {
				this.isErrorPassword = true
				this.showNotificationPassword = true
				setTimeout(() => {
					this.isErrorPassword = false
					this.showNotificationPassword = false
					this.tel = ''
				}, 2000)
			} else {
				this.isErrorTel = false
				this.isErrorPassword = false
				this.showNotificationTel = false
				this.showNotificationPassword = false
				this.$router.push({ name: 'Home' })
			}
		},
	},
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/main';

.modal {
	width: 100%;
	min-height: 100vh;
	position: absolute;
	top: 0;
	left: 0;
	background: $gradient;
	&__name {
		text-align: center;
		font-size: 18px;
		font-weight: 400;
		line-height: normal;
		padding: 20px 0;
	}
	&__action {
		text-align: center;
		font-size: 28px;
		font-weight: 400;
		line-height: normal;
		padding: 16px 0;
	}
	&__success {
		font-size: 20px;
		font-weight: 700;
		line-height: normal;
		padding: 16px 0;
	}
	&__back {
		position: absolute;
		top: 20px;
		left: 20px;
	}
	&__close {
		position: absolute;
		top: 20px;
		right: 20px;
	}
	&__btn {
		margin-top: 16px;
	}
	&__text {
		margin-top: 40px;
		text-align: center;
		font-size: 18px;
		font-weight: 300;
		line-height: normal;
	}

	&__enter {
		display: block;
		margin-top: 4px;
		color: $grey;
		text-align: center;
		text-decoration-line: underline;
		text-decoration-style: solid;
		text-decoration-skip-ink: auto;
		text-decoration-thickness: auto;
		text-underline-offset: auto;
		text-underline-position: from-font;
		&.disabled {
			pointer-events: none;
			color: $disBut;
		}
	}
}
</style>
