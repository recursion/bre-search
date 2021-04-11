import { writable } from 'svelte/store';

// store original input elements
const initialPriceMapState = () => ({
    priceMin: '',
    priceMax: ''
});

const createPriceMap = () => {
    const { subscribe, set, update } = writable(initialPriceMapState());
    return {
        subscribe,
        setMinPriceEl: (price) => {
            update(state => {
                return Object.assign(state, { priceMin: document.querySelector(price) })
            });
        },
        setMaxPriceEl: (price) => {
            update(state => {
                return Object.assign(state, { priceMax: document.querySelector(price) })
            });
        },
        getMinPrice: () => {
            let currentMin;
            update(state => {
                if (state.priceMin) {
                    currentMin = state.priceMin.value;
                }
                return state;
            });
            return currentMin;
        },
        getMaxPrice: () => {
            let currentMax;
            update(state => {
                if (state.priceMax) {
                    currentMax = state.priceMax.value;
                }
                return state;
            });
            return currentMax;
        },
        updateMaxPrice: (p) => {
            update(state => {
                if (state.priceMax) {
                    console.log("PMAX: ", state.priceMax, p);
                    state.priceMax.value = p;
                    state.priceMax.dispatchEvent(new Event("change"));
                } else {
                    console.log("Updating Max price with: ", p);
                }
                return state;
            });
        },
        updateMinPrice: (p) => {
            update(state => {
                if (state.priceMin) {
                    console.log("PMIN: ", state.priceMin, p);
                    state.priceMin.value = p;
                    state.priceMin.dispatchEvent(new Event("change"));
                } else {
                    console.log("Updating Min price with: ", p);
                }
                return state;
            });
        }
    }
};

export const priceMap = createPriceMap();
