import { writable } from 'svelte/store';

const getInitialState = () => ({
    current: '', // price | rooms | homeType | more
    position: { top: 0, left: 0 },
    options: {
        price: "price",
        rooms: "rooms",
        homeType: "homeType",
        more: "more",
    }
});

const createNavState = () => {
    const { subscribe, set } = writable(getInitialState());
    return {
        subscribe,
        setModal: (name, position) => set(Object.assign(getInitialState(), { current: name, position })),
        reset: () => set(getInitialState())
    }
}
export const navState = createNavState();
