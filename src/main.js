import App from './App.svelte';

const app = new App({
	target: document.querySelector("#listings-nav"),
	props: {
		locations: '#sf5_advancedlocationtextsearch',
		priceMin: '#sf5_min_price',
		priceMax: '#sf5_max_price',
		bedrooms: '#sf5_tmin_bedrooms',
		bathrooms: '#sf5_tmin_bathrooms',
		propertyType: "#sf5_select_property_type",
		subPropertyType: "#sf5_feature_f_3009",
		searchButton: '#wpl_total_results5'
	}
});

export default app;