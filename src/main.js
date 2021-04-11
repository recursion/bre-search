import App from './App.svelte';

const app = new App({
	target: document.querySelector("#listings-nav"),
	props: {
		locations: '#sf6_advancedlocationtextsearch',
		priceMin: '#sf6_min_price',
		priceMax: '#sf6_max_price',
		bedrooms: '#sf6_tmin_bedrooms',
		bathrooms: '#sf6_tmin_bathrooms'
	}
});

export default app;