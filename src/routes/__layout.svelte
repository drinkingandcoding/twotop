<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import MobileNav from '$lib/mobile/MobileNav.svelte';
	import '../app.css';
</script>

<Header />

<main>
	<slot />
</main>

<footer>
	<span
		>found an issue? <a href="https://github.com/drinkingandcoding/twotop">send us a message</a
		></span
	>
</footer>

<MobileNav />

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		color: var(--primary-medium);
		font-size: 0.75rem;
		letter-spacing: var(--global-letter-spacing);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
	}

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}

	@media (max-width: 480px) {
		:global(.mobileNav) {
			display: block !important;
		}
		:global(.desktopNav) {
			display: none !important;
		}
	}
</style>
