<script>
    import { propertyTypeMap } from "../stores/propertyType";
    let seeAllCheckbox;


    const handleClick = e => {
        const value = e.target.getAttribute("data-attribute-raw-value");
        const typeTarget = e.target.getAttribute("data-attribute-raw-target");
        
        if (!value && !typeTarget) {
            propertyTypeMap.reset();
            const inputs = document.querySelectorAll(".home-type input");
            inputs.forEach(el => el.checked = false);
            seeAllCheckbox.checked = true;
            return;
        };
        
        const updateProperty = (target, fn) => {
            if (target.checked) {
                if (seeAllCheckbox) {
                    seeAllCheckbox.checked = false;
                }
                fn(value, true);
            } else {
                fn(value, true);
            }

        };

        if (typeTarget === 'propertyType') {
            updateProperty(e.target, propertyTypeMap.updatePropertyType);
        } else if (typeTarget === 'subPropertyType') {
            updateProperty(e.target, propertyTypeMap.updateSubPropertyType);
        }
    };
</script>

<legend>Property Type</legend>
<fieldset class="home-type">
    <div class="see-all control">
        <label for="home-type_residential" class="">See All</label>
        <input
            id="home-type_all"
            type="checkbox"
            checked=true
            bind:this={seeAllCheckbox}
            on:click={handleClick}
        />        
    </div>
    <div class="container">
        <div class="control">
            <label for="home-type_residential" class="">Residential</label>
            <input
                id="home-type_residential"
                type="checkbox"
                data-attribute-raw-value=17
                data-attribute-raw-target="propertyType"
                on:click={handleClick}
            />        
        </div>
        <div class="control">
            <label for="home-type_singleFamily" class="">Single Family</label>
            <input
                id="home-type_singleFamily"
                type="checkbox"
                data-attribute-raw-value=4
                data-attribute-raw-target="subPropertyType"
                on:click={handleClick}
            />        
        </div>
        <div class="control">
            <label for="home-type_condos" class="">Condos</label>
            <input
                id="home-type_condos"
                type="checkbox"
                data-attribute-raw-value=5
                data-attribute-raw-target="subPropertyType"
                on:click={handleClick}
            />        
        </div>
    </div>
    <div class="container">
        <div class="control">
            <label for="home-type_land" class="">Land</label>
            <input
                id="home-type_land"
                type="checkbox"
                data-attribute-raw-value=18
                data-attribute-raw-target="propertyType"
                on:click={handleClick}
            />        
        </div>
        <div class="control">
            <label for="home-type_acreage" class="">Acreage</label>
            <input
                id="home-type_acreage"
                type="checkbox"
                data-attribute-raw-value=0
                data-attribute-raw-target="subPropertyType"
                on:click={handleClick}
            />        
        </div>
        <div class="control">
            <label for="home-type_subdivision" class="">Subdivision</label>
            <input
                id="home-type_subdivision"
                type="checkbox"
                data-attribute-raw-value=3
                data-attribute-raw-target="subPropertyType"
                on:click={handleClick}
            />        
        </div>
    </div>

    <div class="container">
        <div class="control">
            <label for="home-type_commercial" class="">Commercial</label>
            <input
                id="home-type_commercial"
                type="checkbox"
                data-attribute-raw-value=19
                data-attribute-raw-target="propertyType"
                on:click={handleClick}
            />        
        </div>
    </div>
</fieldset>
            
<style>
    .home-type{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr; 
        grid-template-rows: 25px 1fr;
        grid-gap: 10px;
        border: none;
    }
    .container {
        border: 1px solid var(--e-global-color-primary);
        border-radius: 20px;
        padding: 10px;
    }
    .control {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 125px;
    }
    .see-all {
        grid-column-start: 1;
        grid-column-end: 4;
        justify-content: center;;
        width: 100%;
    }
    .see-all input {
        margin-left: 10px;
    }
    div {
        text-align: center;
    }
</style>