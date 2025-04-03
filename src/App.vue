<template>
	<div id="app">
		<main>
			<transition name="fade" mode="out-in">
				<router-view />
			</transition>
		</main>
	</div>
</template>
<script setup lang="js"></script>
<style>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s ease;
}
.fade-enter,
.fade-leave-to {
	opacity: 0;
}
</style>
