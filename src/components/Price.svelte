<script>
    import { onMount } from "svelte";
    import { navState } from "../stores/nav";
    import { priceMap } from "../stores/price";

    onMount(() => {
        // get current price settings
        const max = priceMap.getMaxPrice();
        const min = priceMap.getMinPrice();
        // may just need to get/set the price
        priceMap.updateMaxPrice(max);
        priceMap.updateMinPrice(min);
    });

    let visible = "left";
    let maxEl;

    const updateVisible = (side) => (visible = side);
    const updateMin = (amt) => {
        priceMap.updateMinPrice(amt);
        maxEl.focus();
    };
    const updateMax = (amt) => {
        priceMap.updateMaxPrice(amt);
        navState.reset();
    };
    const minChange = (e) => {
        if (e && e.target && e.target.value) {
            if (isNaN(e.target.value)) {
                console.error("Must submit number values only");
            } else {
                priceMap.updateMinPrice(e.target.value);
            }
        }
    };
    const maxChange = (e) => {
        if (e && e.target && e.target.value) {
            if (isNaN(e.target.value)) {
                console.error("Must submit number values only");
            } else {
                priceMap.updateMaxPrice(e.target.value);
            }
        }
    };
</script>

<h5>Price Range</h5>
<div class="price-wrapper">
    <div class="column">
        <input
            on:input={minChange}
            type="tel"
            placeholder="min"
            value={$priceMap.minPrice || ""}
            on:focus={() => updateVisible("left")}
        />
        {#if visible === "left"}
            <button class="left" class:active={$priceMap.minPrice == 0} on:click={() => updateMin(0)}>$0+</button>
            <button class="left" class:active={$priceMap.minPrice == 100000} on:click={() => updateMin(100000)}
                >$100,000+</button
            >
            <button class="left"  class:active={$priceMap.minPrice == 200000} on:click={() => updateMin(200000)}
                >$200,000+</button
            >
            <button class="left" class:active={$priceMap.minPrice == 300000} on:click={() => updateMin(300000)}
                >$300,000+</button
            >
            <button class="left" class:active={$priceMap.minPrice == 400000} on:click={() => updateMin(400000)}
                >$400,000+</button
            >
            <button class="left" class:active={$priceMap.minPrice == 500000} on:click={() => updateMin(500000)}
                >$500,000+</button
            >
            <button class="left" class:active={$priceMap.minPrice == 600000} on:click={() => updateMin(600000)}
                >$600,000+</button
            >
            <button class="left" class:active={$priceMap.minPrice == 700000} on:click={() => updateMin(700000)}
                >$700,000+</button
            >
            <button class="left" class:active={$priceMap.minPrice == 800000} on:click={() => updateMin(800000)}
                >$800,000+</button
            >
            <button class="left" class:active={$priceMap.minPrice == 900000} on:click={() => updateMin(900000)}
                >$900,000+</button
            >
        {/if}
    </div>
    <div class="column">
        <input
            on:input={maxChange}
            bind:this={maxEl}
            type="tel"
            placeholder="max"
            value={$priceMap.maxPrice || ""}
            on:focus={() => updateVisible("right")}
        />
        {#if visible === "right"}
            <button class="right" class:active={$priceMap.maxPrice == 500000} on:click={() => updateMax(500000)}
                >$500,000</button
            >
            <button class="right" class:active={$priceMap.maxPrice == 600000} on:click={() => updateMax(600000)}
                >$600,000</button
            >
            <button class="right" class:active={$priceMap.maxPrice == 700000} on:click={() => updateMax(700000)}
                >$700,000</button
            >
            <button class="right" class:active={$priceMap.maxPrice == 800000} on:click={() => updateMax(800000)}
                >$800,000</button
            >
            <button class="right" class:active={$priceMap.maxPrice == 900000} on:click={() => updateMax(900000)}
                >$900,000</button
            >
            <button class="right" class:active={$priceMap.maxPrice == 1000000} on:click={() => updateMax(1000000)}
                >$1M</button
            >
            <button class="right" class:active={$priceMap.maxPrice == 1500000} on:click={() => updateMax(1500000)}
                >$1.5M</button
            >
            <button class="right" class:active={$priceMap.maxPrice == 1750000} on:click={() => updateMax(1750000)}
                >$1.75m</button
            >
            <button class="right" class:active={!$priceMap.maxPrice} on:click={() => updateMax()}>Any Price</button
            >
        {/if}
    </div>
</div>

<style>
    .active {
        background-color: var(--e-global-color-primary);
        color: white;
    }
    button {
        background: none;
        border: none;
        padding-top: 1px;
        padding-bottom: 1px;
    }
    .column {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
    .left {
        grid-column: 1/2;
    }
    .right {
        grid-column: 2/3;
    }
    .price-wrapper {
        width: 100%;
        display: grid;
        grid-gap: 10px;
        grid-template-columns: 48% 48%;
    }
    input {
        max-width: 200px;
    }
</style>
