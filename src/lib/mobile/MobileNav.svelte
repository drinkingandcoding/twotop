<script lang="ts">
	import { page } from '$app/stores';
	import Icon from '$lib/icon/Icon.svelte';
	const iconSize = '3em';
</script>

<nav class="mobileNav">
	<ul>
		<li class:active={$page.url.pathname === '/'}>
			<a sveltekit:prefetch href="/">
				<Icon name="home" size={iconSize} />
				<span>Home</span>
			</a>
		</li>
		<li class:active={$page.url.pathname.includes('/recipes')}>
			<a sveltekit:prefetch href="/recipes">
				<Icon name="file-text" size={iconSize} />
				<span>Recipes</span>
			</a>
		</li>
		<li class:active={$page.url.pathname.includes('/builder')}>
			<a sveltekit:prefetch href="/builder">
				<Icon name="edit-2" size={iconSize} />
				<span>Builder</span>
			</a>
		</li>
	</ul>
</nav>

<style>
	.mobileNav {
		position: fixed;
		width: 100%;
		bottom: 0;
		border-top: 2px solid var(--accent);
		border-radius: var(--global-border-radius);
		background: var(--base);
		display: none;
	}

	.mobileNav ul {
		padding: 0;
		margin: 0;
		display: flex;
		justify-content: space-around;
	}

	.mobileNav ul li {
		list-style: none;
	}

	a {
		display: flex;
		flex-direction: column;
		align-items: center;
		font-weight: 500;
		font-size: 0.4rem;
		text-transform: lowercase;
		letter-spacing: var(--global-letter-spacing);
		text-decoration: none;
		padding: 5px 0;
	}

	a :global(.icon) {
		padding-bottom: 5px;
	}

	li {
		width: 100%;
	}

	li.active a {
		font-weight: 900;
	}

	li.active :global(.icon) {
		stroke-width: 1.5px;
	}
</style>
