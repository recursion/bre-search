<script>
    export let selected;
    export let name;
</script>

<div class="room">
    <h5>{name}</h5>
    <div class="buttons-row">
        <button
            class:selected={selected === ""}
            on:click={() => (selected = "")}>Any</button
        >
        <button class:selected={selected === 1} on:click={() => (selected = 1)}
            >1+</button
        >
        <button class:selected={selected === 2} on:click={() => (selected = 2)}
            >2+</button
        >
        <button class:selected={selected === 3} on:click={() => (selected = 3)}
            >3+</button
        >
        <button class:selected={selected === 4} on:click={() => (selected = 4)}
            >4+</button
        >
        <button class:selected={selected === 5} on:click={() => (selected = 5)}
            >5+</button
        >
    </div>
</div>

<style>
    h5 {
        text-align: left;
    }
    .selected {
        border: 1px solid blue;
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
