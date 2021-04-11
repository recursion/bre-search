<script>
    let bedsSelected = "";
    let bathsSelected = "";
    import Room from "./Room.svelte";
</script>

<div class="rooms-wrapper">
    <Room selected={bedsSelected} name="Bedrooms" />
    <Room selected={bathsSelected} name="Bathrooms" />
</div>

<style>
    .rooms-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>
