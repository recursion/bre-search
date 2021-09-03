<script>
    import { navState } from "../stores/nav";
    import { locationsMap } from "../stores/locations";
    import NavButton from "./NavButton.svelte";
    import SearchIcon from "./SearchIcon.svelte";
    export let searchButton;
    let resultsCount;

    // Watch the search results count for changes
    // and update our display as needed
    // This could probably be done as a mutation observer
    setInterval(() => {
        const target = document.querySelector(searchButton);
        if (!target) {
            console.log("Did not find search button: ", searchButton);
            return;
        }
        if (target.innerText === "()") {
            return;
        }

        if (target && target.innerText) {
            resultsCount = target.innerText;
        }
    }, 500);
</script>

<div class="wpl_search_buttons">
    <input
        on:input={locationsMap.updateLocation}
        value={locationsMap.getLocation() || ""}
        type="text"
        id="multi_text_search_input"
        data-test="true"
        placeholder="Keyword, Address, MLS #"
    />
    <SearchIcon />
    <NavButton
        set={navState.setModal}
        option={$navState.options.price}
        name="Price"
    />
    <NavButton
        set={navState.setModal}
        option={$navState.options.rooms}
        name="Beds &#38; Baths"
    />
    <NavButton
        set={navState.setModal}
        option={$navState.options.homeType}
        name="Property Type"
    />
    {#if resultsCount}
        <h5>{resultsCount} matches.</h5>
    {:else}
        <h5>Loading Properties...</h5>
    {/if}
    <!-- 
    <NavButton
        set={navState.setModal}
        option={$navState.options.more}
        name="More"
    />
    <button on:click={saveSearch} class="bre-button"> Save Search </button>
    -->
</div>

<style>
    input#multi_text_search_input {
        border-radius: none;
        border: 1px solid lightgray;
        width: auto !important;
    }
    .wpl_search_buttons {
        margin-left: 5px;
    }
    :global(.wpl_search_buttons button) {
        border: 1px solid var(--e-global-color-primary);
        color: var(--e-global-color-primary);
        background: none;
    }
    :global(.wpl_search_buttons button:hover) {
        background-color: var(--e-global-color-primary);
        color: white;
        transition: color 0.5s, background-color 0.5s;
    }
    h5 {
        display: inline-block;
    }
    @media only screen and (max-width: 768px) {
        h5 {
            display: none;
        }
    }
    /*
    @media only screen and (max-width: 768px) {
        .wpl_search_buttons {
            position: relative;
            background-color: white;
        }
        input {
            width: 100%;
        }
        .wpl_search_buttons {
            margin-left: 0;
        }
        h5, button.bre-button {
            display: none !important;
        }
    }
    */
</style>
