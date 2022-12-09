import Head from "next/head";
// import { withRouter } from "next/router";

export default function SEO({ title, description = title }: {
    title: string,
    description?: string
}) {
	// const domain = 'https://site-domain'
	const formattedTitle = title && title + " - authect";
	// const description = "magnus";
	const keywords = "authect";
	// url path
	// const url = url && url.path ? url.path : undefined
	// url path to home
	// const cononical = url && url === '/' ? domain : domain + url
	// const featuredImage = domain + image;

	return (
		<Head>
			<title>{formattedTitle}</title>
			{/* doesnt change */}
			<meta charSet="utf-8" />
			<meta content="IE=edge" httpEquiv="X-UA-Compatible" />
			{/* changes */}
			{description && <meta name="description" content={description} />}
			{keywords && <meta name="keywords" content={keywords} />}
			{/* DC */}
			<meta name="robots" content="follow, index" />
			<meta name="theme-color" content="#ffffff" />
			<meta name="msapplication-TitleColor" content="#ffffff" />
			{/* favicons */}
			<link rel="icon" href="/favicon.ico" />
			{/* C */}
			{/* {url && <link rel="canonical" href={cononical} />} */}
			<meta property="og:title" content={formattedTitle} />
			<meta property="og:decription" content={description} />
			{/* <meta property="og:url" content={canonical} /> */}
			{/* {featuredImage && (
				<>
					<meta property="og:image" content={featuredImage} />
					<meta property="og:image:alt" content={description} />
				</>
			)} */}
			{/* twitter */}
		</Head>
	);
}
