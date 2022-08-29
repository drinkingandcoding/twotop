<script lang="ts">
  export let formType:string | undefined = undefined;
  export let variant:string = "primary";
</script>

<button class={`${variant} ${$$props.class}`} type={formType} on:click><slot/></button>

<style>
  button {
    background-color: var(--white);
    border: none;
    cursor: pointer;
    outline: 1px solid var(--outline-color);
    display: inline-block;
    padding: var(--global-padding-y) var(--global-padding-x);
    border-radius: var(--global-padding-y);
    font-weight: 700;
		font-size: 0.8rem;
		text-transform: lowercase;
		letter-spacing: var(--global-letter-spacing);
    color: var(--primary-dark);
  }

  button:hover, button:focus{
    background-color: var(--white-dark);
  }

  button.link {
    color: var(--primary);
    text-decoration: none;
    background: none;
    border: none;
    outline: none;
    font-weight: bold;
    text-transform: lowercase;
    font-size: .8rem;
    color: var(--primary-medium);
  }

  button.accent {
    color: var(--accent);
  }

  button.accent:hover, button.accent:focus {
    background-color: var(--accent);
    color: var(--white);
  }

</style>
