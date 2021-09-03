<script>
    import { onMount } from "svelte";
    import { propertyTypeMap } from "../stores/propertyType";
    let seeAllCheckbox;

    onMount(() => {
        const currentValue = $propertyTypeMap.propertyType[0];
        if (currentValue && seeAllCheckbox) {
            const sel = "[data-attribute-raw-value='"+ currentValue +"']";
            const target = document.querySelector(sel);
            if (target) {
                seeAllCheckbox.checked = false;
                target.checked = true;
            }
        }
    });

    const handleClick = e => {
        const value = e.target.getAttribute("data-attribute-raw-value");
        const typeTarget = e.target.getAttribute("data-attribute-raw-target");

        const resetInputs = () => {
            const inputs = document.querySelectorAll(".home-type input");
            inputs.forEach(el => el.checked = false);
        }
        
        if (!value && !typeTarget) {
            propertyTypeMap.reset();
            resetInputs();
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
                fn(value, false);
            }
            // reset all check boxes
            // but keep the current one checked
            // this is a bit of a hack, and should be
            // radio boxes - but this will do for now.
            const checked = e.target.checked;
            resetInputs();
            target.checked = checked;
        };

        if (typeTarget === 'propertyType') {
            updateProperty(e.target, propertyTypeMap.updatePropertyType);
        } else if (typeTarget === 'subPropertyType') {
            updateProperty(e.target, propertyTypeMap.updateSubPropertyType);
        } else {
            console.log("Unknown type target: ", typeTarget);
        }
    };
</script>

<legend>Property Type</legend>
<fieldset class="home-type">
    <div class="control">
        <label for="home-type_all" class="">See All</label>
        <input
            id="home-type_all"
            type="checkbox"
            checked=true
            bind:this={seeAllCheckbox}
            on:click={handleClick}
        />        
    </div>
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
        <label for="home-type_commercial" class="">Commercial</label>
        <input
            id="home-type_commercial"
            type="checkbox"
            data-attribute-raw-value=19
            data-attribute-raw-target="propertyType"
            on:click={handleClick}
        />        
    </div>
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
        <!--
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
        -->
</fieldset>
            
<style>
    .home-type{
        display: flex;
        flex-direction: column;
        border: none;
        border-top: 1px solid var(--e-global-color-secondary);
    }
    .control {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 125px;
    }
    div {
        text-align: center;
    }
</style>