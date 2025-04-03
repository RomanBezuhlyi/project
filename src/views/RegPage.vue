<template>
	<div class="container">
		<div class="reg">
			<a class="reg__logo" href="/../">
				<img src="../assets/images/logo.svg" alt="" />
			</a>
			<h1 class="reg__title">Регістрація нового користувача</h1>
			<Button
				class="reg__btn"
				:disabled="false"
				buttonClass="primary"
				text="За номером телефону"
				@click="openModalRegPhone"
			/>
			<Button
				class="reg__btn"
				:disabled="false"
				buttonClass="primary"
				text="За адресою E-Mail"
				@click="openModalRegEmail"
			/>
			<Button :disabled="false" buttonClass="outline">
				<img src="../assets/images/bank_id.svg" alt="" />
			</Button>
			<p class="reg__text">Вже маю аккаунт</p>
			<a class="reg__enter" href="/auth">Увійти</a>
		</div>
		<ModalRegEmail v-if="isModalRegEmailOpen" @close="closeModal" />
		<ModalRegPhone v-if="isModalRegPhoneOpen" @close="closeModal" />
	</div>
</template>

<script>
import Button from '../components/Button.vue'
import ModalRegEmail from '../components/ModalRegEmail.vue'
import ModalRegPhone from '../components/ModalRegPhone.vue'
import Notification from '../components/Notification.vue'

export default {
	name: 'Reg',
	components: {
		Button,
		Notification,
		ModalRegEmail,
		ModalRegPhone,
	},
	data() {
		return {
			isModalRegEmailOpen: false,
			isModalRegPhoneOpen: false,
		}
	},
	methods: {
		openModalRegEmail() {
			this.isModalRegEmailOpen = true
		},
		openModalRegPhone() {
			this.isModalRegPhoneOpen = true
		},
		closeModal() {
			this.isModalRegEmailOpen = false
			this.isModalRegPhoneOpen = false
		},
	},
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/main';

.reg {
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
