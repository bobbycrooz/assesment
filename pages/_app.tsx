import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import AuthProvider from '@contexts/auth-context';
import React from 'react';
import '@styles/index.scss';
import { useResizer } from '@hooks/ressizer';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';

type NextPageWithLayout = NextPage & {
	getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;
};

function App({ Component, pageProps }: AppPropsWithLayout) {
	const getLayout = Component.getLayout || ((page) => page);

	const transObj = {
		initial: { opacity: 0, scale: 0.8 },
		animate: { opacity: 1, scale: 1 },
		exit: { opacity: 0, scale: 0.8 }
	};

	return (
		<AuthProvider>
			<AnimatePresence mode="wait">
				<motion.div
					variants={transObj}
					initial="initial"
					animate="animate"
					exit="exit"
					transition={{ duration: 0.2 }}
				>
					{getLayout(<Component {...pageProps} />)}
				</motion.div>
			</AnimatePresence>
		</AuthProvider>
	);
}

export default App;
