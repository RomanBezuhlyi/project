<template>
	<AppBar />
	<swiper
		:direction="'vertical'"
		:pagination="{
			clickable: true,
		}"
		:modules="modules"
		class="mySwiper"
		@slideChange="onSlideChange"
	>
		<swiper-slide v-for="(video, index) in videos" :key="index">
			<div class="overlay"></div>
			<div class="video-head">
				<div class="container">
					<ul class="video-head__list">
						<li class="video-head__list-item">
							<button>
								<img src="../assets/images/skarga.svg" alt="" />
								скарга
							</button>
						</li>
						<li class="video-head__list-item">
							<button>
								<img src="../assets/images/share.svg" alt="" />
								Поділитись
							</button>
						</li>
						<li class="video-head__list-item">
							<button>
								<img src="../assets/images/comment.svg" alt="" />
								Коментарi
							</button>
						</li>
					</ul>
					<div class="video-head__list">
						<a class="video-head__user" href="#">
							<img src="../assets/images/avatar.svg" alt="" />
							<img src="../assets/images/fire.svg" alt="" />
							Голова Василь
						</a>
						<div class="video-head__tag">
							<p>#корупція</p>
						</div>
					</div>
				</div>
			</div>
			<div class="video-foot__bottom container">
				<h6 class="video-foot__bottom-name">Шевченко Тарас</h6>
				<p
					class="video-foot__bottom-text"
					@click="toggleFullText"
					:class="{ expanded: showFullText }"
				>
					{{ showFullText ? video.fullText : video.shortText }}
				</p>
				<ul class="video-foot__bottom-list">
					<li class="video-foot__bottom-item">
						<button>
							<img src="../assets/images/attention.svg" alt="" />
							постраждав
						</button>
					</li>
					<li class="video-foot__bottom-item">
						<button>
							<img src="../assets/images/cross.svg" alt="" />
							Не вірю
						</button>
					</li>
					<li class="video-foot__bottom-item">
						<button>
							<img src="../assets/images/check.svg" alt="" />
							Вірю
						</button>
					</li>
				</ul>
				<ul class="video-right">
					<li class="video-right__item">
						<a href="#"><img src="../assets/images/eye.svg" alt="" />525</a>
					</li>
					<li class="video-right__item">
						<a href="#"><img src="../assets/images/fire_2.svg" alt="" />315</a>
					</li>
					<li class="video-right__item">
						<a href="#"
							><img src="../assets/images/comment_2.svg" alt="" />71</a
						>
					</li>
					<li class="video-right__item">
						<a href="#"><img src="../assets/images/more.svg" alt="" /></a>
					</li>
				</ul>
			</div>
			<video
				class="video"
				ref="video"
				@mouseover="playVideo(index)"
				@click="togglePause(index)"
				:src="video.src"
				:autoplay="index === 0 ? 'autoplay' : ''"
				:muted="index === 0 ? 'muted' : ''"
			/>
		</swiper-slide>
	</swiper>
	<Menu />
</template>

<script>
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/vue'
import AppBar from '../components/AppBar.vue'
import Menu from '../components/Menu.vue'

export default {
	name: 'Home',
	components: {
		Swiper,
		SwiperSlide,
		Menu,
		AppBar,
	},
	data() {
		return {
			videos: [
				{
					src: 'https://cdn.create.vista.com/api/media/medium/357081302/stock-video-two-men-baseball-bats-fighting-street?token=',
					shortText: 'Останнім часом стан будівлі значно погіршився...',
					fullText:
						'Останнім часом стан будівлі значно погіршився: (характер руйнувань – тріщини у стінах, просідання фундаменту, обвалення частин будівлі тощо). Це створює небезпеку для мешканців та оточуючих.',
				},
				{
					src: 'https://cdn.create.vista.com/api/media/medium/303338678/stock-video-successful-man-sweater-showing-money-isolated-yellow?token=',
					shortText: 'Останнім часом стан будівлі значно погіршився...',
					fullText:
						'Останнім часом стан будівлі значно погіршився: (характер руйнувань – тріщини у стінах, просідання фундаменту, обвалення частин будівлі тощо). Це створює небезпеку для мешканців та оточуючих.',
				},
				{
					src: 'https://cdn.create.vista.com/api/media/medium/246254408/stock-video-male-doctor-white-coat-sitting-table-diagnosis-counting-putting-money?token=',
					shortText: 'Останнім часом стан будівлі значно погіршився...',
					fullText:
						'Останнім часом стан будівлі значно погіршився: (характер руйнувань – тріщини у стінах, просідання фундаменту, обвалення частин будівлі тощо). Це створює небезпеку для мешканців та оточуючих.',
				},
			],
			currentVideoIndex: 0,
			showFullText: false,
		}
	},
	mounted() {
		this.playVideo(0)
	},
	methods: {
		toggleFullText() {
			this.showFullText = !this.showFullText
		},
		playVideo(index) {
			if (this.currentVideoIndex !== null && this.currentVideoIndex !== index) {
				this.pauseVideo(this.currentVideoIndex)
			}
			this.$refs.video[index].play()
			this.currentVideoIndex = index
		},
		togglePause(index) {
			const video = this.$refs.video[index]
			if (video.paused) {
				video.play()
			} else {
				video.pause()
			}
		},
		onSlideChange() {
			if (this.currentVideoIndex !== null) {
				this.pauseVideo(this.currentVideoIndex)
			}
			this.currentVideoIndex = this.$swiper.swiper.realIndex
			this.playVideo(this.currentVideoIndex)
		},
		pauseVideo(index) {
			this.$refs.video[index].pause()
		},
	},
}
</script>

<style scoped lang="scss">
@import '../assets/styles/main';

.swiper {
	width: 100%;
	height: calc(100vh - 140px);
}

.swiper-slide {
	position: relative;
	padding: 16px 0;
}

.swiper-slide .video {
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	object-fit: cover;
}
.video-head {
	position: relative;
	z-index: 10;
	&__list {
		@include flex(row, space-between, center);
		gap: 8px;
		margin-bottom: 16px;
	}

	&__list-item {
		@include flex(row, center, center);
		width: 109px;
		& > button {
			@include flex(row, center, center);
			gap: 4px;
			width: 100%;
			padding: 8px 16px;
			gap: 4px;
			border-radius: 50px;
			border: 1px solid $white;
			background: transparent;
			color: $white;
			text-align: center;
			font-size: 10px;
			font-weight: 300;
			line-height: normal;
			text-transform: capitalize;
		}
	}
	&__user {
		@include flex(row, flex-start, center);
		gap: 8px;
		color: $white;
		font-size: 14px;
		font-weight: 400;
		line-height: normal;
	}
	&__tag {
		display: flex;
		padding: 4px 12px;
		justify-content: center;
		align-items: center;
		gap: 8px;
		border-radius: 50px;
		background: $black;
		color: $white;
		font-size: 10px;
		font-weight: 400;
		line-height: normal;
		text-transform: uppercase;
	}
}

.video-foot {
	&__bottom {
		position: absolute;
		z-index: 10;
		left: 0;
		bottom: 0;
		width: 100%;
	}

	&__bottom-name {
		color: $white;
		font-size: 16px;
		font-weight: 500;
		line-height: normal;
		margin-bottom: 8px;
	}

	&__bottom-text {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		font-weight: 300;
		line-height: normal;
		margin-bottom: 8px;
		cursor: pointer;
		max-height: 1.2em;
		margin-right: 40px;
		opacity: 1;
		color: $white;
		transition: max-height 0.3s ease-out, opacity 0.3s ease-out;
	}

	&__bottom-text.expanded {
		white-space: normal;
		max-height: 1000px;
		opacity: 1;
	}

	&__bottom-list {
		@include flex(row, space-between, center);
		gap: 8px;
		padding: 16px 0px 24px 0px;
	}

	&__bottom-item {
		width: 109px;
		height: 44px;
		button {
			width: 100%;
			height: 100%;
			@include flex(column, center, center);
			gap: 4px;
			border-radius: 50px;
			border: 1px solid $white;
			background: transparent;
			color: $white;
			text-align: center;
			font-size: 10px;
			font-weight: 300;
			line-height: normal;
		}
	}
}

.video-right {
	position: absolute;
	right: 0;
	bottom: 80px;
	@include flex(column, center, center);
	gap: 24px;
	&__item {
		@include flex(column, center, center);
		a {
			@include flex(column, center, center);
			color: $white;
			text-align: center;
			font-weight: 400;
			line-height: normal;
		}
	}
}

.overlay {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 9;
	background: linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 30%),
		linear-gradient(180deg, rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 1) 100%);
	pointer-events: none;
}
</style>
