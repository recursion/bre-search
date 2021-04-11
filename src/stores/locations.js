import { writable } from 'svelte/store';

// store original input elements
const initialLocationsState = () => ({
    locations: ''
});

const createLocationsMap = () => {
    const { subscribe, set, update } = writable(initialLocationsState());
    return {
        subscribe,
        setLocationEl: (loc) => {
            update(state => {
                return Object.assign(state, { locations: document.querySelector(loc) })
            });
        },
        getLocation: () => {
            let currentLoc;
            update(state => {
                if (state.locations) {
                    currentLoc = state.locations.value;
                }
                return state;
            });
            return currentLoc;
        },
        updateLocation: (event) => {
            update(state => {
                if (state.locations) {
                    state.locations.value = event.target.value;
                    state.locations.dispatchEvent(new Event("input"));
                } else {
                    console.log("Updating Location with: ", event.target.value);
                }
                return state;
            });
        }
    }

};

export const locationsMap = createLocationsMap();