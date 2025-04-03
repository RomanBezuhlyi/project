<template>
	<div class="modal" @click.self="$emit('close')">
		<button v-if="step === 1" class="modal__back" @click="back()">
			<img src="../assets/images/back.svg" alt="close" />
		</button>
		<button v-else class="modal__close" @click="step = 1">
			<img src="../assets/images/close.svg" alt="close" />
		</button>
		<div class="container">
			<h3 class="modal__name">Відновлення паролю</h3>
			<div v-if="step === 1 && $route.query.type === 'email'">
				<h2 class="modal__action">Введіть свію Email адресу</h2>
				<Input
					class="modal__input"
					type="email"
					v-model="email"
					:isError="isError"
				/>
				<Button
					class="modal__btn"
					loader
					text="Відправити"
					:disabled="!email.length"
					@click="handleSubmit"
				/>
			</div>
			<div v-else-if="step === 1 && $route.query.type === 'tel'">
				<h2 class="modal__action">Введіть свій номер телефону</h2>
				<Input
					class="modal__input"
					type="tel"
					v-model="tel"
					:isError="isError"
				/>
				<Button
					class="modal__btn"
					loader
					text="Відправити"
					:disabled="!tel.length"
					@click="handleSubmit"
				/>
			</div>
			<div v-else>
				<h3 class="modal__success">
					На вашу потову скриньку відпралено лист з паролем
				</h3>
				<Button class="modal__btn" loader text="OK" @click="handleSubmit" />
			</div>
		</div>
		<Notification
			v-if="showNotification"
			:type="'error'"
			text="Користувача не існує"
		/>
	</div>
</template>

<script>
import Button from '../components/Button.vue'
import Input from '../components/Input.vue'
import Notification from '../components/Notification.vue'

export default {
	name: 'ResetPassword',
	components: {
		Notification,
		Input,
		Button,
	},
	data() {
		return {
			step: 1,
			email: '',
			tel: '',
			showNotification: false,
			isError: false,
		}
	},
	computed: {
		isValidEmail() {
			return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email)
		},
	},
	methods: {
		handleSubmit() {
			if (!this.isValidEmail) {
				this.isError = true
				this.showNotification = true
				setTimeout(() => {
					this.isError = false
					this.showNotification = false
					this.email = ''
				}, 2000)
			} else {
				this.step = 2
				this.isError = false
				this.showNotification = false
			}
		},
		back() {
			this.$router.push({ name: 'Auth' })
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
		font-size: 18px;
		line-height: normal;
		font-weight: 400;
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
		margin-top: 8px;
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
