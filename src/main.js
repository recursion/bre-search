import App from './App.svelte';

const app = new App({
	target: document.querySelector("#listings-nav"),
	props: {
		locations: '#sf6_advancedlocationtextsearch',
		priceMin: '#sf6_min_price',
		priceMax: '#sf6_max_price'
	}
});

export default app;