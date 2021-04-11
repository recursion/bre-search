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
    @media only screen and (max-width: 768px) {
        .bre-button {
            display: none;
        }
    }
</style>
