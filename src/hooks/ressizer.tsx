import React from 'react';
import { SetStateAction, useEffect } from 'react';

export const useResizer = () => {
	const [isMobile, setIsMobile] = React.useState<boolean>(true);
	const [clientWidth, setClientWidth] = React.useState(0);

	const resizer = (
		setIsMobile: {
			(value: SetStateAction<boolean>): void;
			(value: SetStateAction<boolean>): void;
			(arg0: boolean): void;
		},
		setClientWidth: {
			(value: SetStateAction<number>): void;
			(value: SetStateAction<number>): void;
			(arg0: number): void;
		}
	) => {
		if (document?.body?.clientWidth > 500) {
			setIsMobile(false);
			setClientWidth(document.body.clientWidth);
			return;
		}

		if (document?.body?.clientWidth < 500) {
			setIsMobile(true);
			setClientWidth(document?.body?.clientWidth);
			return;
		}
	};

	useEffect(() => {
		if (typeof window !== undefined) {
			window.addEventListener('resize', () => resizer(setIsMobile, setClientWidth), true);
			setIsMobile((document?.body?.clientWidth || 0) < 800);
			setClientWidth(document?.body?.clientWidth);
		}

		return () => {
			if (typeof window !== undefined) {
				window.removeEventListener('resize', () => resizer(setIsMobile, setClientWidth), true);
			}
		};
	}, []);


  return {
    isMobile, clientWidth
  }
};
