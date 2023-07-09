import { error } from '@sveltejs/kit';

export const prerender = true;

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	switch (params.producer) {
		case 'eccocivi':
			return {
				title: 'Eccocivi',
				content:
					'Eccocivi is the first winery to join the partnership with Sunday Wine Seoul and the first winery to go zero-CO2 in Spain. Their commitment to sustainability is admirable while it is equally worthwhile to shed light on their effort in recovering the winemaking tradition in the area of Natural Interest of les Gavarres, in the municipality of Sant Martí Vell, “a village that has been able to keep intact its medieval air.” They are a pioneering young winery standing on the shoulders of tradition.'
			};
		case 'podere-sottoilnoce':
			return {
				title: 'Podere Sottoilnoce',
				content:
					'Podere Sottoilnoce is a biological certified winemaking venture located in the scenic village of Castelvetro di Modena, at the very heart of the Lambrusco Grasparossa DOC, where the owner Max Brondolo tends its 6.5ha of vineyards in Biodynamic since 2016 and all efforts are made to maintan a balance between vineyards and surrounding nature. Podere Sottoilnoce follows the (unwritten) rules of natural winemaking and bottles territorial – yet elegant – bottle refermented sparkling wines made with local – and sometimes forgotten – grapes, both black and white. “My dream would be to give you my land, the land where I am, by using traditional and maybe ancient and forgotten grapes tended in biodynamic harvested at full maturity, where my work is to try to blend them together in order that every one of them gives something to the glass,” says Max.'
			};
		case 'ket-diofas-pince':
			return {
				title: 'Ket Diofas Pince',
				content:
					'Located in the lovely land of Hungary, the winery is owned by Julia and Adam, a couple making wines together. Their goal is achieving a high vine and wine quality in connection with the nature. Their wines are all made in a natural way with spontaneous fementation and without pressing or artificial clarification. Low sulphur and long barrel aging are also notable characteristics of their wines. Julia says, “We like to make clear and unique wines in natural way. This way can emphasize the quality of our local grape varieties (Leányka, Hárslevelű, Olaszrizling, Zöldveltelíni, Turán, Kékfrankos) and our personal individuality.”'
			};
		default:
			throw error(404, 'Not found');
	}
}
