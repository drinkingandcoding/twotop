<script lang="ts">
  import { goto } from "$app/navigation";
  import DropdownItem from "$lib/dropdown/DropdownItem.svelte";
  import { createPopper } from "@popperjs/core";
  import Button from "$lib/button/Button.svelte";

  export let logout:() => void;
  export let user:any;

  $: dropdownPopoverShow = false;
  console.log(user);

  let btnDropdownRef:HTMLButtonElement;
  let popoverDropdownRef:HTMLElement;

  const toggleDropdown = () => {
    if (dropdownPopoverShow) {
      dropdownPopoverShow = false;
    } else {
      dropdownPopoverShow = true;
      createPopper(btnDropdownRef, popoverDropdownRef, {
        placement: "bottom-end"
      });
    }
  };
</script>

<button type="button" bind:this={btnDropdownRef} on:click={toggleDropdown} class={`${$$props.class} ${dropdownPopoverShow ? "open" : "closed"}`}>
  hey, {user.nickname}
</button>
<div bind:this={popoverDropdownRef} class={`dropdownMenu ${dropdownPopoverShow ? "open" : "closed"}`}>
  <DropdownItem on:click={() => goto("/me")}>
    My profile
  </DropdownItem>
  <div class="separator"/>
  <DropdownItem on:click={logout}>
    Log out
  </DropdownItem>
</div>

<style>
  .dropdownMenu.open {
    display: flex;
    flex-direction: column;
    width: max-content;
    position: absolute;
    border: 1px solid var(--accent);
    border-top: 0;
  }

  .separator {
    height: 1px;
    width: 100%;
    background-color: var(--primary-dark);
  }

  .dropdownMenu.closed {
    display: none;
  }

</style>
