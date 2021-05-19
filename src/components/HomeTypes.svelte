<script>
</script>

<legend>Property Type</legend>
<fieldset class="home-type">
    <div class="">
        <label for="home-type_residential" class="">Residential</label>
        <input
            id="home-type_residential"
            class=""
            type="checkbox"
            checked="true"
        />        
    </div>
    <div class="">
        <label for="home-type_land" class="">Land</label>
        <input
            id="home-type_land"
            class=""
            type="checkbox"
            checked="true"
        />        
    </div>
    <div class="">
        <label for="home-type_commercial" class="">Commercial</label>
        <input
            id="home-type_commercial"
            class=""
            type="checkbox"
            checked="true"

        />        
    </div>
</fieldset>
            
<style>
    .home-type{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr; 
        grid-gap: 10px;
    }
    div {
        text-align: center;
    }
</style>