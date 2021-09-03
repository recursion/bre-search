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
        /*
            update(state => {
                if (state && state.propertyTypeEl) {
                    // find the input element and update its state
                    state.propertyTypeEl.parentElement.querySelectorAll("input[type='checkbox']").forEach(el => {
                        if (String(el.value) === String(value)) {
                            el.checked = checked;
                            el.dispatchEvent(new Event("click"));
                        }
                    });
                    state.propertyTypeEl.value = state.propertyType.join(",");
                    state.propertyTypeEl.dispatchEvent(new Event("change"));
                }
                if (checked && state && state.propertyType.includes(value) === -1) {
                    state.propertyType.push(value);
                } else if (!checked && state.propertyType.includes(value) !== -1) {
                    state.propertyType = state.propertyType.filter(n => n!== value);
                }
                return state;
            });
        */
        },

        /**
         * Any time a sub type is selected we should update the coinciding top level nav
         */
        updateSubPropertyType: (value, selected) => {
            console.log("got -> ", value, selected);
            update(state => {
                if (state && state.subPropertyTypeEl) {
                    // find the input element and update its state

                    for (let el of state.subPropertyTypeEl.options) {
                        if (String(el.value) === String(value)) {
                            console.log("Setting option: ", el, " to: ", selected);
                            el.selected = selected;
                        }
                    }
                    // state.subPropertyTypeEl.value = state.subPropertyType.join(",");
                    state.subPropertyTypeEl.dispatchEvent(new Event("change"));
                }

                if (selected && state.subPropertyType.includes(value) === -1) {
                    state.subPropertyType.push(value);
                } else if (!selected && state.subPropertyType.includes(value) !== -1) {
                    state.subPropertyType = state.subPropertyType.filter(n => n!== value);
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