<div class={`card ${$$props.class}`}>
	<slot />
</div>

<style>
	.card {
		background-color: #fff;
		/*border: 1px solid var(--primary-light);*/
		border-radius: var(--global-border-radius);
	}
</style>
