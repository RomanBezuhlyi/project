<template>
	<div class="modal" @click.self="$emit('close')">
		<button v-if="step === 2" class="modal__back" @click="step = 1">
			<img src="../assets/images/back.svg" alt="close" />
		</button>
		<button class="modal__close" @click="$emit('close')">
			<img src="../assets/images/close.svg" alt="close" />
		</button>
		<div class="container">
			<h3 class="modal__name">Регістрація номеру</h3>
			<div v-if="step === 1">
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
					text="Далі"
					:disabled="!tel.length"
					@click="handleSubmit"
				/>
			</div>
			<div v-else-if="step === 2">
				<h2 class="modal__action">Введіть код з SMS</h2>
				<Input
					class="modal__input"
					type="code"
					v-model="code"
					:isError="isError"
				/>
				<Button
					class="modal__btn"
					loader
					text="Далі"
					:disabled="!code.length"
					@click="handleSubmit"
				/>
				<p class="modal__text">{{ resendText }}</p>
				<a
					class="modal__enter"
					href="#"
					@click.prevent="resendCode"
					:class="{ disabled: isResending }"
					>Відправити знову</a
				>
			</div>
			<div v-else-if="step === 3" style="padding-bottom: 30px">
				<h2 class="modal__action">
					До завершення реєстрації залишивля один крок. Заповніть свої дані та
					задайте пароль для входу.
				</h2>
				<Input
					class="modal__input"
					type="text"
					label="Прізвище"
					v-model="last_name"
				/>
				<Input
					class="modal__input"
					type="text"
					label="Ім'я"
					v-model="first_name"
				/>
				<Input
					class="modal__input"
					type="text"
					label="По батькові"
					v-model="middle_name"
				/>
				<Input
					class="modal__input"
					type="password"
					label="Пароль"
					v-model="password"
				/>
				<Input
					class="modal__input"
					type="password"
					label="Підвердити пароль"
					v-model="repeat_password"
				/>
				<Button
					class="modal__btn"
					loader
					text="Завершити реєстрацію"
					:disabled="
						!last_name.length ||
						!first_name.length ||
						!middle_name.length ||
						!password.length ||
						!repeat_password.length
					"
					@click="handleSubmit"
				/>
			</div>
			<div v-else>
				<h3 class="modal__success">Вітаємо! Ви зареєстровані</h3>
				<Button class="modal__btn" loader text="OK" @click="handleSubmit" />
			</div>
		</div>
		<Notification
			v-if="showNotificationStepOne"
			:type="'error'"
			text="Такий номера не існує"
		/>
		<Notification
			v-if="showNotificationStepTwo"
			:type="'error'"
			text="Невірний код"
		/>
	</div>
</template>

<script>
import Button from './Button.vue'
import Input from './Input.vue'
import Notification from './Notification.vue'

export default {
	name: 'ModalRegPhone',
	components: {
		Notification,
		Input,
		Button,
	},
	data() {
		return {
			step: 1,
			tel: '',
			code: '',
			last_name: '',
			second_name: '',
			middle_name: '',
			password: '',
			repeat_password: '',
			showNotificationStepOne: false,
			showNotificationStepTwo: false,
			isError: false,
			isResending: false,
			resendTimer: 30,
			timerInterval: null,
		}
	},
	computed: {
		resendText() {
			return this.isResending
				? `Наступна спроба за ${this.resendTimer} сек`
				: 'Не отримав код'
		},
	},
	methods: {
		handleSubmit() {
			if (this.step === 1) {
				this.isError = false
				this.showNotificationStepOne = false
				this.step = 2
			} else if (this.step === 2) {
				if (!this.code.length) {
					this.isError = true
					return
				} else if (this.code.length !== 6) {
					setTimeout(() => {
						this.isError = true
						this.showNotificationStepTwo = true
					}, 2000)
				} else {
					this.isError = false
					this.showNotificationStepTwo = false
					this.step = 3
				}
			} else if (this.step === 3) {
				this.step = 4
			} else {
				this.$router.push({ name: 'Home' })
			}
		},
		resendCode() {
			if (this.isResending) return
			this.isResending = true
			this.resendTimer = 30
			this.timerInterval = setInterval(() => {
				if (this.resendTimer > 1) {
					this.resendTimer--
				} else {
					this.isResending = false
					clearInterval(this.timerInterval)
				}
			}, 1000)
		},
	},
	beforeUnmount() {
		if (this.timerInterval) {
			clearInterval(this.timerInterval)
		}
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
		margin-top: 24px;
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
