<script>
    export let set;
    export let option;
    export let name;
    let btn;

    const getPosition = (el) => {
        const pos = el.getBoundingClientRect();
        return {
            top: pos.bottom.toFixed(2) + "px",
            left: pos.left.toFixed(2) + "px",
        };
    };
</script>

<button
    bind:this={btn}
    on:click={() => set(option, getPosition(btn))}
    class="bre-button">{name}</button
>

<style>
    button {
        border: 1px solid var(--e-global-color-primary);
        color: var(--e-global-color-primary);
        background: none;
        margin-top: 5px;
    }
    button:hover {
        background-color: var(--e-global-color-primary);
        color: white;
        transition: color 0.5s, background-color 0.5s;
    }
    @media only screen and (max-width: 767px) {
        button {
            grid-row-start: 2;
            padding: 0.25rem 0.5rem;
        }
    }
</style>
