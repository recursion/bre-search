<script>
    export let saveSearch;
    import { navState } from "../stores/nav";
    import { locationsMap } from "../stores/locations";
    import NavButton from "./NavButton.svelte";
    import SearchIcon from "./SearchIcon.svelte";
</script>

<div class="wpl_search_buttons">
    <input
        on:input={locationsMap.updateLocation}
        value={locationsMap.getLocation() || ""}
        type="text"
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
        name="Home Type"
    />
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
    input {
        width: 300px;
        border-radius: none;
        border: 1px solid lightgray;
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
        button.bre-button {
            display: none !important;
        }
    }
</style>
