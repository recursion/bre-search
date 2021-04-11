<script>
    import { navState } from "../stores/nav";
    import { priceMap } from "../stores/price";

    let visible = "left";
    let min, max;
    const updateVisible = (side) => (visible = side);
    const updateMin = (amt) => {
        min.value = amt;
        priceMap.updateMinPrice(amt);
        navState.reset();
    };
    const updateMax = (amt) => {
        amt ? (max.value = amt) : (max.value = "");
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
            bind:this={min}
            on:input={minChange}
            type="tel"
            placeholder="min"
            value={priceMap.getMinPrice() || ""}
            on:focus={() => updateVisible("left")}
        />
        {#if visible === "left"}
            <button class="left" on:click={() => updateMin(0)}>$0+</button>
            <button class="left" on:click={() => updateMin(100000)}
                >$100,000+</button
            >
            <button class="left" on:click={() => updateMin(200000)}
                >$200,000+</button
            >
            <button class="left" on:click={() => updateMin(300000)}
                >$300,000+</button
            >
            <button class="left" on:click={() => updateMin(400000)}
                >$400,000+</button
            >
            <button class="left" on:click={() => updateMin(500000)}
                >$500,000+</button
            >
            <button class="left" on:click={() => updateMin(600000)}
                >$600,000+</button
            >
            <button class="left" on:click={() => updateMin(700000)}
                >$700,000+</button
            >
            <button class="left" on:click={() => updateMin(800000)}
                >$800,000+</button
            >
            <button class="left" on:click={() => updateMin(900000)}
                >$900,000+</button
            >
        {/if}
    </div>
    <div class="column">
        <input
            bind:this={max}
            on:input={maxChange}
            type="tel"
            placeholder="max"
            value={priceMap.getMaxPrice() || ""}
            on:focus={() => updateVisible("right")}
        />
        {#if visible === "right"}
            <button class="right" on:click={() => updateMax(500000)}
                >$500,000</button
            >
            <button class="right" on:click={() => updateMax(600000)}
                >$600,000</button
            >
            <button class="right" on:click={() => updateMax(700000)}
                >$700,000</button
            >
            <button class="right" on:click={() => updateMax(800000)}
                >$800,000</button
            >
            <button class="right" on:click={() => updateMax(900000)}
                >$900,000</button
            >
            <button class="right" on:click={() => updateMax(1000000)}
                >$1M</button
            >
            <button class="right" on:click={() => updateMax(1500000)}
                >$1.5M</button
            >
            <button class="right" on:click={() => updateMax(1750000)}
                >$1.75m</button
            >
            <button class="right" on:click={() => updateMax()}>Any Price</button
            >
        {/if}
    </div>
</div>

<style>
    button {
        background: none;
        border: none;
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
