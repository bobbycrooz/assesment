import { LoginUserType, UserTypes } from '@types';
import service from '../index';

export function moviesBySeries() {
	// console.log('look i got here');
	return service({
		url: '/?apikey=e26be1f2&s=series',
		method: 'get'
	});
}

export function moviesBySeriesBy2() {
	// console.log('look i got here');
	return service({
		url: '/?apikey=e26be1f2&s=episodes',
		method: 'get'
	});
}

export function moviesByMovieType(data: string) {
	// console.log('look i got here');
	return service({
		url: `/?apikey=e26be1f2&s=${data}`,
		method: 'get'
	});
}
