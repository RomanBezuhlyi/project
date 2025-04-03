<template>
	<div class="container">
		<div class="auth">
			<a class="auth__logo" href="/../">
				<img src="../assets/images/logo.svg" alt="" />
			</a>
			<h1 class="auth__title">Вітаємо! Увійдіть у свій аккаунт</h1>
			<Button
				class="auth__btn"
				:disabled="false"
				buttonClass="primary"
				text="За номером телефону"
				@click="openModalAuthPhone"
			/>
			<Button
				class="auth__btn"
				:disabled="false"
				buttonClass="primary"
				text="За адресою E-Mail"
				@click="openModalAuthEmail"
			/>
			<Button :disabled="false" buttonClass="outline">
				<img src="../assets/images/bank_id.svg" alt="" />
			</Button>
			<p class="auth__text">Ще немає аккаунта</p>
			<a class="auth__enter" href="/registration">Регістрація</a>
		</div>
		<ModalAuthEmail v-if="isModalAuthEmailOpen" @close="closeModal" />
		<ModalAuthPhone v-if="isModalAuthPhoneOpen" @close="closeModal" />
	</div>
</template>

<script>
import Button from '../components/Button.vue'
import ModalAuthEmail from '../components/ModalAuthEmail.vue'
import ModalAuthPhone from '../components/ModalAuthPhone.vue'
import Notification from '../components/Notification.vue'
export default {
	name: 'Auth',
	components: {
		ModalAuthEmail,
		ModalAuthPhone,
		Button,
		Notification,
	},
	data() {
		return {
			isModalAuthEmailOpen: false,
			isModalAuthPhoneOpen: false,
		}
	},
	methods: {
		openModalAuthEmail() {
			this.isModalAuthEmailOpen = true
		},
		openModalAuthPhone() {
			this.isModalAuthPhoneOpen = true
		},
		closeModal() {
			this.isModalAuthEmailOpen = false
			this.isModalAuthPhoneOpen = false
		},
	},
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/main';

.auth {
	padding-top: 42px;
	@include flex(column, center, center);
	&__logo {
		@include flex(row, center, center);
		overflow: hidden;
		border-radius: 16px;
		margin-bottom: 24px;
	}
	&__title {
		text-align: center;
		font-size: 28px;
		font-weight: 400;
		line-height: normal;
		margin-bottom: 24px;
	}
	&__btn {
		margin-bottom: 16px;
	}

	&__text {
		margin-top: 40px;
		text-align: center;
		font-size: 18px;
		font-weight: 300;
		line-height: normal;
	}

	&__enter {
		margin-top: 4px;
		color: $grey;
		text-align: center;
		text-decoration-line: underline;
		text-decoration-style: solid;
		text-decoration-skip-ink: auto;
		text-decoration-thickness: auto;
		text-underline-offset: auto;
		text-underline-position: from-font;
	}
}
</style>
