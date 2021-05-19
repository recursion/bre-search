<script>
	import Modal from "./components/Modal.svelte";
	import Nav from "./components/Nav.svelte";
	import Price from "./components/Price.svelte";
	import Rooms from "./components/Rooms.svelte";
	import HomeType from "./components/HomeTypes.svelte";
	import { navState } from "./stores/nav";
	import { locationsMap } from "./stores/locations";
	import { priceMap } from "./stores/price";
	import { roomsMap } from "./stores/rooms";
	import { propertyTypeMap } from './stores/propertyType';
	import { onMount } from "svelte";
	const saveSearch = () => console.log("Saving search!");
	export let locations, priceMin, priceMax, bedrooms, bathrooms, propertyType;
	onMount(() => {
		locationsMap.setLocationEl(locations);
		priceMap.setMaxPriceEl(priceMax);
		priceMap.setMinPriceEl(priceMin);
		roomsMap.setBedroomsEl(bedrooms);
		roomsMap.setBathroomsEl(bathrooms);
		propertyTypeMap.setPropertyTypeEl(propertyType)
	});
</script>

<Nav {saveSearch} />
<Modal>
	{#if $navState.current === "price"}
		<Price />
	{:else if $navState.current === "rooms"}
		<Rooms />
	{:else if $navState.current === "homeType"}
		<HomeType />
	{/if}
</Modal>