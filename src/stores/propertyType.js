import { writable } from 'svelte/store';

// store original input elements
const initialPropertyTypeMapState = () => ({
    element: null,
    propertyType: 'all', // all | residential | commercial | land
});
const createPropertyTypeMap = () => {
    const { subscribe, set, update } = writable(initialPropertyTypeMapState());
    return {
        subscribe,
        setPropertyTypeEl: (selector) => {
            update(state => {
                state.element = document.querySelector(selector);
                console.log("Got: ", state.element);
                console.log(state.element.options[state.element.selectedIndex].value)
                return state;
            })
        }
    }
};


export const propertyTypeMap = createPropertyTypeMap();