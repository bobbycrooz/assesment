import axios, { AxiosRequestConfig } from 'axios';
// import Router from 'next/router';
// import utils from '@utils';

function fmtResponse(responseData: any, error: boolean) {
	let { statusText, status, data: search } = responseData;

	console.log(search);

	if (error) {
		return {
			status,
			search,
			statusText,
			error: true
		};
	} else {
		return {
			status,
			search,
			statusText,
			error: false
		};
	}
}

const service = axios.create({
	baseURL: `http://www.omdbapi.com`
	// headers: {
	// 	'X-API-KEY': '95e03ddd3572374c5a61d596e0eafffa',
	// 	'iden-unique_key': 'quadraple-and-hello-edfojoidfj'
	// 	// authorization: `bearer token-helo-mvfkgkfgfgknknlgkslnkfjn`
	// }
});

// request interceptor
service.interceptors.request.use(
	async (config: AxiosRequestConfig) => {
		if (config.headers === undefined) {
			config.headers = {};
		}

		return config;
	},

	(error) => {
		console.log('this error came from axio request error', error);

		return Promise.reject(error);
	}
);

// Add a response interceptor
service.interceptors.response.use(
	// @ts-ignore
	function (response) {
		const { data } = response;

		return fmtResponse(response, false);
	},

	function (error) {
		const { response } = error;
		console.log(response, 'dthis error is comming from here');

		// check if error is an axios error
		// if (error?.name && error.name === 'AxiosError') {
		if (error && !error.response.data) {
			return {
				error: true,
				serverResponse: error.message
			};
		} else {
			const {
				response: {
					data: { message }
				}
			} = error;
			return {
				error: true,
				serverResponse: message
			};
		}

		// return fmtResponse(response, true);
	}
);

export default service;
