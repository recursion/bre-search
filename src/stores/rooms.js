import { writable } from 'svelte/store';

// store original input elements
const initialRoomsMapState = () => ({
    bedroomsEl: null,
    bathroomsEl: null,
    bedrooms: 0,
    bathrooms:0 
});

const createRoomsMap = () => {
    const { subscribe, set, update } = writable(initialRoomsMapState());
    return {
        subscribe,
        setBathroomsEl: (el) => {
            update(state => {
                const bathroomsEl = document.querySelector(el);
                if (bathroomsEl) {
                    state.bathrooms = Number(bathroomsEl.value);
                }
                return Object.assign(state, { bathroomsEl })
            });
        },
        setBedroomsEl: (el) => {
            update(state => {
                const bedroomsEl = document.querySelector(el);
                if (bedroomsEl) {
                    state.bedrooms = Number(bedroomsEl.value);
                }
                return Object.assign(state, { bedroomsEl });
            });
        },
        updateBedrooms: (n) => {
            update(state => {
                if (state.bedroomsEl) {
                    state.bedroomsEl.value = n;
                    state.bedroomsEl.dispatchEvent(new Event("change"));
                } else {
                    console.log("Updating bedrooms with: ", n);
                }
                state.bedrooms = n;
                return state;
            });
        },
        updateBathrooms: (n) => {
            update(state => {
                if (state.bathroomsEl) {
                    state.bathroomsEl.value = n;
                    state.bathroomsEl.dispatchEvent(new Event("change"));
                } else {
                    console.log("Updating bathrooms with: ", n);
                }
                state.bathrooms = n;
                return state;
            });
        }
    }
};

export const roomsMap = createRoomsMap();

