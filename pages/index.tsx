import type { NextPage } from 'next';
// import Head from 'next/head';
import Image from 'next/image';
import SEO from 'src/interface/components/SEO';
import LogoAnimate from '@images/Logo.svg';
import arrowDown from '@images/arrow-down.svg';
import arrowRight from '@images/arrow-right.svg';
import green from '@images/green.svg';
import { useAuth } from '@contexts/auth-context';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { moviesByMovieType, moviesBySeries } from '@axios/admin';
import { useEffect, useState } from 'react';

const Home = (props: { isMobile: any }) => {
	const [movies, setMovies] = useState();
	const [searchParam, setSearchParam] = useState('');

	async function getMovies() {
		// @ts-ignore
		const resp = await moviesBySeries();
		// @ts-ignore
		if (resp.search) {
			// @ts-ignore
			setMovies(resp.search.Search);
		}
	}

	async function searchMovies(e: any) {
		e.preventDefault();

		if (searchParam.length > 3) {
			// @ts-ignore
			const resp = await moviesByMovieType(searchParam);
			// @ts-ignore
			if (resp.search) {
				// @ts-ignore
				setMovies(resp.search.Search);
			}
		}

		return;
	}

	useEffect(() => {
		getMovies();
	}, []);
	// @ts-ignore

	return (
		<div className="home">
			<SEO title="home" />

			<div className="navba h-20 bg-pri text-white middle justify-center md:justify-start md:pl-11">
				<div className="logo_box border border-white p-2 ">
					<h1 className="title capitalize">mytest app</h1>
				</div>
			</div>

			<div className="hero_section p-11">
				<div className="hero_section_contentn justify-center md:justify-start">
					<h1 className="hero_title font-dm-sans  fond-bold text-[45px] text-white text-center md:text-left md:w-[200px]">
						Watch something incredible.
					</h1>
				</div>
			</div>

			<main className="movie_actions bg-white w-full pl-11 stack-xl my-11">
				<div className="search_box  w-full pr-11">
					<form onSubmit={searchMovies} className="input_group stack-sm">
						<label htmlFor="serach">Search</label>
						<input
							type="search"
							name="search"
							id=""
							onChange={(e) => setSearchParam(e.target.value)}
							placeholder="series"
							className="border h-12 border-black w-full p-3 text-lg"
						/>
					</form>
				</div>

				<div className="movie_section stack-lg">
					{!movies ? (
						<div className="centered w-full h-11">
							<h1>fetching movie list ..</h1>
						</div>
					) : (
						<MovieListCarousel movies={movies} categoryName="Movies by series" />
					)}
				</div>
			</main>
		</div>
	);
};

function MovieListCarousel({ categoryName, movies }: { categoryName?: Name; movies: any }) {
	return (
		<div className="movie_category_component  stack-md">
			<h1 className="title text-2xl font-dm-sans font-medium">{categoryName}</h1>

			<div className="slider_container h-[300px] ">
				<Swiper
					breakpoints={{
						340: {
							slidesPerView: 1.5
						},
						// when window width is >= 640px
						640: {
							slidesPerView: 2.5
						},
						// when window width is >= 768px
						768: {
							slidesPerView: 4.5,
							spaceBetween: 10
						}
					}}
					spaceBetween={20}
					// slidesPerView={4.5}

					modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
					// pagination={{ clickable: true }}
					loop={true}
					// autoplay={{
					// 	delay: 2000,
					// 	disableOnInteraction: false
					// }}
				>
					{movies?.map((item: { Poster: string | undefined }, index: any) => (
						<SwiperSlide key={`${index} -swiper one`} className="">
							<img
								src={item.Poster}
								alt=""
								className=" w-full  rounded-lg full bg-pri h-[300px]"
							/>
						</SwiperSlide>
					))}
					...
				</Swiper>
			</div>
		</div>
	);
}

type Name = string;

export default Home;
