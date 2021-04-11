import { writable } from 'svelte/store';

// store original input elements
const initialRoomsMapState = () => ({
    bedrooms: '',
    bathrooms: ''
});

const createRoomsMap = () => {
    const { subscribe, set, update } = writable(initialRoomsMapState());
    return {
        subscribe,
        setBathroomsEl: (el) => {
            update(state => {
                return Object.assign(state, { bathrooms: document.querySelector(el) })
            });
        },
        setBedroomsEl: (el) => {
            update(state => {
                return Object.assign(state, { bedrooms: document.querySelector(el) })
            });
        },
        getBedrooms: () => {
            let current;
            update(state => {
                if (state.bedrooms) {
                    current = state.bedrooms.value;
                }
                return state;
            });
            return current || 0;
        },
        getBathrooms: () => {
            let current;
            update(state => {
                if (state.bathrooms) {
                    current = state.bathrooms.value;
                }
                return state;
            });
            return current || 0;
        },
        updateBedrooms: (n) => {
            update(state => {
                if (state.bedrooms) {
                    state.bedrooms.value = n;
                    state.bedrooms.dispatchEvent(new Event("change"));
                } else {
                    console.log("Updating bedrooms with: ", n);
                }
                return state;
            });
        },
        updateBathrooms: (n) => {
            update(state => {
                if (state.bathrooms) {
                    state.bathrooms.value = n;
                    state.bathrooms.dispatchEvent(new Event("change"));
                } else {
                    console.log("Updating bathrooms with: ", n);
                }
                return state;
            });
        }
    }
};

export const roomsMap = createRoomsMap();

