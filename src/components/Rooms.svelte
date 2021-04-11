<script>
    import { roomsMap } from "../stores/rooms";
    import Room from "./Room.svelte";
</script>

<div class="rooms-wrapper">
    <Room
        value={roomsMap.getBedrooms() || ""}
        set={roomsMap.updateBedrooms}
        name="Bedrooms"
    />
    <Room
        value={roomsMap.getBathrooms() || ""}
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
