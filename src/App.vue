<template>
	<main class="app">
		<router-view></router-view>
	</main>
	<img src="/public/company.png" alt="Logo Company">

</template>

<style scoped>
	.app {
		@apply min-h-screen bg-black p-5 lg:p-5 w-full md:px-28 lg:w-4/12 md:mx-auto xl:w-3/12
	}

	img {
		position: fixed;
		top: 0;
		left: 0;
		width: auto;
		height: 6rem;
	}
</style>
