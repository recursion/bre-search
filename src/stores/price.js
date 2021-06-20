/**
 * price.js - store for price info
 * stores the real element from WPL so that it can pass changes back to the real element
 * If we dont have an element it just stores the actual value 
 */
import { writable } from 'svelte/store';

// store original input elements
const initialPriceMapState = () => ({
    priceMin: 0,
    priceMax: 0,
    priceMinEl: null,
    priceMaxEl: null 
});

const createPriceMap = () => {
    const { subscribe, set, update } = writable(initialPriceMapState());
    return {
        subscribe,
        setMinPriceEl: (sel) => {
            update(state => {
                const priceMinEl = document.querySelector(sel); 
                if (priceMinEl) {
                    state.priceMin = Number(priceMinEl.value);
                }
                return Object.assign(state, { priceMinEl });
            });
        },
        setMaxPriceEl: (sel) => {
            update(state => {
                const priceMaxEl = document.querySelector(sel);
                if (priceMaxEl) {
                    state.priceMax  = Number(priceMaxEl.value);
                }
                return Object.assign(state, { priceMaxEl });
            });
        },
        getMinPrice: () => {
            let currentMin;
            update(state => {
                if (state.priceMin) {
                    currentMin = state.priceMinEl.value;
                } else {
                    currentMin = state.priceMin;
                }
                return state;
            });
            return currentMin;
        },
        getMaxPrice: () => {
            let currentMax;
            update(state => {
                if (state.priceMaxEl) {
                    currentMax = state.priceMaxEl.value;
                } else {
                    currentMax = state.priceMax;
                }
                return state;
            });
            return currentMax;
        },
        updateMaxPrice: (p) => {
            update(state => {
                if (state.priceMaxEl) {
                    state.priceMax = p;
                    state.priceMaxEl.value = p;
                    state.priceMaxEl.dispatchEvent(new Event("change"));
                }
                state.maxPrice = p;
                return state;
            });
        },
        updateMinPrice: (p) => {
            update(state => {
                if (state.priceMinEl) {
                    state.priceMin = p;
                    state.priceMinEl.value = p;
                    state.priceMinEl.dispatchEvent(new Event("change"));
                }
                state.minPrice = p;
                return state;
            });
        }
    }
};

export const priceMap = createPriceMap();
