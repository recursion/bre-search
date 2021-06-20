<script>
    export let selected;
    export let name;
    export let set;
    const updateSelection = (n) => {
        selected = n;
        set(n);
    };
</script>

<div class="room">
    <h5>{name}</h5>
    <div class="buttons-row">
        <button class:selected={selected === 0 || selected === ""} on:click={() => updateSelection(0)}>Any</button>
        <button class:selected={selected === 1} on:click={() => updateSelection(1)}>1+</button>
        <button class:selected={selected === 2} on:click={() => updateSelection(2)}>2+</button>
        <button class:selected={selected === 3} on:click={() => updateSelection(3)}>3+</button>
        <button class:selected={selected === 4} on:click={() => updateSelection(4)}>4+</button>
        <button class:selected={selected === 5} on:click={() => updateSelection(5)}>5+</button>
    </div>
</div>

<style>
    h5 {
        text-align: left;
    }
    .selected {
        background-color: var(--e-global-color-primary);
        color: white;
    }
    .room {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    }
    .buttons-row {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
</style>