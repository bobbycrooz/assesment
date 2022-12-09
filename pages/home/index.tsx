import type { NextPage } from 'next';

import React from 'react';
import { useAuth } from '@contexts/auth-context';



const Auth: NextPage = () => {

	const [setLoader, toggleLoader] = React.useState(true)
	const data = useAuth()


	React.useEffect(() => {
		setTimeout(() => {
			toggleLoader(false)
		},300);
	},[])


	// if(setLoader) {
	// 	return (
	// 		<Loader visibility={true}/>
	// 	)
	// }

	// console.log(data, "this is whats stored in state");
	

	

	return (
		<div className="homepage">

		</div>
	);
};

// interface AppProps {
// 	name: string;
// }

export default Auth;
