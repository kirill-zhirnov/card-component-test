import {describe, expect, it} from '@jest/globals';
import {BasicView} from '../src';

describe('BasicView should provide methods for events binding and data reactivity', () => {
	it('Should accept data initial values in the constructor',  () => {
		const view = new BasicView<{country?: string, city?: string}>({country: 'Denmark', city: 'Cph'});

		expect(view.data.country).toEqual('Denmark');
		expect(view.data.city).toEqual('Cph');
	});

	it('Should be able modify data',  () => {
		const view = new BasicView<{country?: string, city?: string}>({country: 'Denmark', city: 'Cph'});

		view.data.country = 'US';
		view.data.city = 'New York';

		expect(view.data.country).toEqual('US');
		expect(view.data.city).toEqual('New York');
	});
});