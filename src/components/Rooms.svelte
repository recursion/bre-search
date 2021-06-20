<script>
    import { roomsMap } from "../stores/rooms";
    import Room from "./Room.svelte";
</script>

<div class="rooms-wrapper">
    <Room
        selected={$roomsMap.bedrooms || ""}
        set={roomsMap.updateBedrooms}
        name="Bedrooms"
    />
    <Room
        selected={$roomsMap.bathrooms || ""}
        set={roomsMap.updateBathrooms}
        name="Bathrooms"
    />
</div>

<style>
    .rooms-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>
