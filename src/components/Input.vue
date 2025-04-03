<template>
	<div v-if="type === 'email'" class="input-wrapper">
		<label class="label" :class="{ error: isError }">Email</label>
		<input
			class="input"
			:class="{ error: isError }"
			type="email"
			placeholder="taras@gmail.com"
			:value="modelValue"
			@input="$emit('update:modelValue', $event.target.value)"
		/>
	</div>

	<div v-else-if="type === 'tel'" class="input-wrapper">
		<label class="label" :class="{ error: isError }">Номер телефону</label>
		<input
			class="input"
			v-mask="'+380 (XX) XXX-XX-XX'"
			:class="{ error: isError }"
			type="tel"
			placeholder="+380 (XX) XXX-XX-XX"
			:value="modelValue"
			@input="$emit('update:modelValue', $event.target.value)"
		/>
	</div>

	<div v-else-if="type === 'text'" class="input-wrapper">
		<label class="label">{{ label }}</label>
		<input
			class="input"
			type="text"
			:value="modelValue"
			@input="$emit('update:modelValue', $event.target.value)"
		/>
	</div>

	<div v-else-if="type === 'password'" class="input-wrapper">
		<label class="label" :class="{ error: isError }">{{ label }}</label>
		<div class="password">
			<input
				:type="passwordVisible ? 'text' : 'password'"
				:class="{ error: isError }"
				class="input"
				placeholder="Пароль"
				:value="modelValue"
				@input="$emit('update:modelValue', $event.target.value)"
			/>

			<svg
				v-if="!passwordVisible"
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="25"
				viewBox="0 0 24 25"
				fill="none"
				@click="togglePasswordVisibility"
			>
				<path
					d="M18.3434 16.1048L19.0456 16.812C20.5492 15.6188 21.7251 14.0613 22.4607 12.2857C20.7578 8.17661 16.7171 5.28564 12 5.28564C10.6658 5.28564 9.38491 5.51883 8.19594 5.94095L8.98026 6.72018C9.94183 6.44123 10.9613 6.28565 11.9999 6.28564L18.3434 16.1048ZM18.3434 16.1048C19.5759 15.1433 20.577 13.9137 21.2687 12.5062L21.3769 12.286L21.269 12.0657C20.4195 10.3315 19.1005 8.87051 17.4619 7.84873C15.8234 6.82696 13.931 6.28541 12 6.28564L18.3434 16.1048ZM2.62302 12.2852L2.73133 12.065C3.36132 10.784 4.23326 9.6701 5.27429 8.77629L5.6264 8.47397L5.95407 8.80261L9.35407 12.2126L9.47839 12.3373L9.49715 12.5124C9.55957 13.0946 9.81943 13.638 10.2335 14.0521C10.6476 14.4662 11.191 14.7261 11.7733 14.7885L11.9494 14.8074L12.0743 14.9329L14.3543 17.2229L14.9953 17.8667L14.1085 18.0637C13.4395 18.2124 12.7229 18.2856 12.0001 18.2856L2.62302 12.2852ZM2.62302 12.2852L2.73098 12.5056M2.62302 12.2852L2.73098 12.5056M2.73098 12.5056C3.58048 14.2398 4.8995 15.7008 6.53807 16.7226M2.73098 12.5056L6.53807 16.7226M6.53807 16.7226C8.17662 17.7443 10.069 18.2859 12 18.2856L6.53807 16.7226ZM19.2943 21.007L18.7286 21.5771L16.0036 18.8521L15.7857 18.6342L15.4931 18.7309C14.3942 19.094 13.2272 19.2856 12 19.2856C7.2827 19.2856 3.24193 16.3945 1.5391 12.2852C2.20287 10.6761 3.22771 9.25665 4.52001 8.12127L4.9207 7.76924L4.54355 7.39209L2.7085 5.55703L3.27862 4.99137L19.2943 21.007ZM14.4997 12.2483L12.0374 9.78592C12.6869 9.79563 13.3077 10.0579 13.7678 10.5179C14.2278 10.9779 14.49 11.5987 14.4997 12.2483Z"
					fill="black"
					stroke="black"
				/>
			</svg>
			<svg
				v-else
				xmlns="http://www.w3.org/2000/svg"
				width="22"
				height="17"
				viewBox="0 0 22 17"
				fill="none"
				@click="togglePasswordVisibility"
			>
				<path
					d="M11 1.28564C4.693 1.28564 1.633 6.96864 1.09 8.09364C1.06098 8.15349 1.0459 8.21913 1.0459 8.28564C1.0459 8.35216 1.06098 8.4178 1.09 8.47764C1.632 9.60264 4.692 15.2856 11 15.2856C17.308 15.2856 20.367 9.60264 20.91 8.47764C20.939 8.4178 20.9541 8.35216 20.9541 8.28564C20.9541 8.21913 20.939 8.15349 20.91 8.09364C20.368 6.96864 17.308 1.28564 11 1.28564Z"
					stroke="black"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M11 11.2856C12.6569 11.2856 14 9.9425 14 8.28564C14 6.62879 12.6569 5.28564 11 5.28564C9.34315 5.28564 8 6.62879 8 8.28564C8 9.9425 9.34315 11.2856 11 11.2856Z"
					stroke="black"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		</div>
	</div>

	<div v-if="type === 'code'" class="input-wrapper">
		<div class="code-input-wrapper">
			<input
				v-for="(digit, index) in codeLength"
				:key="index"
				ref="codeInputs"
				class="code-input"
				:class="{ error: isError }"
				type="text"
				maxlength="1"
				v-model="code[index]"
				placeholder="-"
				@input="onInput(index)"
				@focus="onFocus(index)"
				@keydown.backspace="onBackspace(index)"
			/>
		</div>
	</div>
</template>

<script>
import VueTheMask from 'vue-the-mask'

export default {
	name: 'Input',
	props: {
		type: {
			type: String,
		},
		label: {
			type: String,
		},
		modelValue: {
			type: String,
			default: '',
		},
		isError: {
			type: Boolean,
			default: false,
		},
	},
	directives: {
		mask: VueTheMask.mask,
	},
	data() {
		return {
			password: '',
			passwordVisible: false,
			code: Array(6).fill(''),
			codeLength: 6,
		}
	},
	computed: {
		codeValue() {
			return this.code.join('')
		},
	},
	methods: {
		togglePasswordVisibility() {
			this.passwordVisible = !this.passwordVisible
		},
		onInput(index) {
			if (this.code[index] && index < this.codeLength - 1) {
				this.$nextTick(() => {
					this.$refs.codeInputs[index + 1]?.focus()
				})
			}
		},
		onFocus(index) {
			if (this.code[index]) {
				this.code[index] = ''
			}
		},
		onBackspace(index, event) {
			if (!this.code[index] && index > 0) {
				this.$nextTick(() => {
					this.$refs.codeInputs[index - 1]?.focus()
				})
			}
		},
	},
	watch: {
		codeValue(newValue) {
			this.$emit('update:modelValue', newValue)
		},
	},
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/main';

.input-wrapper {
	width: 100%;
	margin-bottom: 16px;
}
.label {
	display: block;
	margin-bottom: 8px;
	&.error {
		color: $red;
	}
}
.input {
	@include flex(row, center, center);
	width: 100%;
	height: 54.857px;
	padding: 8px 12px 8px 16px;
	border-radius: 16px;
	background: $input;

	font-size: 16px;
	font-weight: 400;
	line-height: 22px;
	&::placeholder {
		color: #657773;
	}
	&:focus {
		border: 1px solid $grey;
	}
	&.error {
		color: $red;
		border: 1px solid $red;
	}
}

.password {
	position: relative;
	.input {
		padding-right: 45px;
	}
	svg {
		position: absolute;
		right: 12px;
		top: 50%;
		transform: translateY(-50%);
	}
}

.code-input-wrapper {
	@include flex(row, space-between, center);
	gap: 9px;
}
.code-input {
	@include flex(row, center, center);
	width: 50px;
	height: 56px;
	padding: 8px;
	border-radius: 16px;
	text-align: center;
	background: $input;

	font-size: 18px;
	font-weight: 300;
	line-height: normal;
	&::placeholder {
		color: #657773;
	}
	&:focus {
		border: 1px solid $grey;
	}
	&.error {
		color: $red;
		border: 1px solid $red;
	}
}
</style>
