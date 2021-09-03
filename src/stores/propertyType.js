import { writable } from 'svelte/store';

// store original input elements
const initialPropertyTypeMapState = () => ({
    propertyTypeEl: null,
    propertyType: [], // all | residential | commercial | land
    subPropertyTypeEl: null,
    subPropertyType: [], // all | residential | commercial | land
});
const createPropertyTypeMap = () => {
    const { subscribe, set, update } = writable(initialPropertyTypeMapState());
    return {
        subscribe,
        setPropertyTypeEl: (selector) => {
            update(state => {
                state.propertyTypeEl = document.querySelector(selector);
                if (state && state.propertypeEl) {
                    state.propertyTypeEl.parentElement.querySelectorAll("input [type='checkbox']").forEach(el => {
                        if (el.checked) {
                            state.propertyType.push(el.value);
                        }
                    });
                }
                return state;
            });
        },
        setSubPropertyTypeEl: (selector) => {
            update(state => {
                state.subPropertyTypeEl = document.querySelector(selector);
                if (state && state.subPropertyTypeEl) {
                    for (let el of state.subPropertyTypeEl.selectedOptions) {
                        state.subPropertyType.push(el.value);
                    }
                }
                return state;
            });
        },
        /**
         * Anytime a top level property type is selected we should remove all subtypes
         */
        updatePropertyType: (value, selected) => {
            update(state => {
                console.log("-----> #-> ", value);
                if (state && state.propertyTypeEl) {
                    // find the input element and update its state
                    for (let el of state.propertyTypeEl.options) {
                        if (String(el.value) === String(value)) {
                            el.selected = selected;
                        }
                    }
                    // state.subPropertyTypeEl.value = state.subPropertyType.join(",");
                    state.propertyTypeEl.dispatchEvent(new Event("change"));
                }

                if (selected && state.propertyType.indexOf(value) === -1) {
                    // this doesnt need to be an array (did it ever?)
                    // but using for now since thats how it was built
                    console.log("Setting value: ", state.propertyType, " to: " , [value]);
                    state.propertyType = [value];
                } else if (!selected && state.propertyType.indexOf(value) !== -1) {
                    console.log("Removing value: ", value, " from: ", state.propertyType);
                    // Old way of removing (no longer needed)
                    // state.propertyType = state.propertyType.filter(n => n!== value);
                    state.propertyType = [];
                    console.log("#> ", state.propertyType);
                }
                return state;
            });
        },

        /**
         * Any time a sub type is selected we should update the coinciding top level nav
         */
        updateSubPropertyType: (value, selected) => {
            console.log("Update SubProperty Type.")
            update(state => {
                console.log("-----> #-> ", value, selected);
                if (state && state.subPropertyTypeEl) {
                    // find the input element and update its state
                    for (let el of state.subPropertyTypeEl.options) {
                        if (String(el.value) === String(value)) {
                            el.selected = selected;
                        }
                    }
                    // state.subPropertyTypeEl.value = state.subPropertyType.join(",");
                    state.subPropertyTypeEl.dispatchEvent(new Event("change"));
                }

                if (selected && state.subPropertyType.indexOf(value) === -1) {
                    // this doesnt need to be an array (did it ever?)
                    // but using for now since thats how it was built
                    console.log("Setting value: ", state.subPropertyType, " to: " , [value]);
                    state.subPropertyType = [value];
                } else if (!selected && state.subPropertyType.indexOf(value) !== -1) {
                    console.log("Removing value: ", value, " from: ", state.subPropertyType);
                    // Old way of removing (no longer needed)
                    // state.propertyType = state.propertyType.filter(n => n!== value);
                    state.subPropertyType = [];
                    console.log("#> ", state.subPropertyType);
                }
                return state;
            });
        },
        reset: () => {
            update(state => {
                state.propertyType = [];
                state.subPropertyType = [];
                state.propertyTypeEl.selectedIndex = -1;
                state.propertyTypeEl.dispatchEvent(new Event("change"));
                return state;
            });
        }
    }
};


export const propertyTypeMap = createPropertyTypeMap();