import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Marquee from 'react-fast-marquee';
import { Link, useLoaderData } from 'react-router-dom';
import SecCards from './SecCards';

export default function Home() {
  const brands = useLoaderData();

  const brandsOnSales = [...brands.filter((brand) => brand.isSaleOn)];

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Animation occurs only once
    });
  }, []);

  return (
    <div className="w-[90%] mx-auto my-5">
      {/* Carousel Section */}
      <div className="carousel w-full" data-aos="fade-up">
        <div id="slide1" className="carousel-item relative w-full">
          <img src="/images/image-1.png" className="w-full" alt="Slide 1" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src="/images/image-2.png" className="w-full" alt="Slide 2" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src="/images/image-3.png" className="w-full" alt="Slide 3" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src="/images/image-4.png" className="w-full" alt="Slide 4" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>

      {/* Top Brands Section */}
      <div
        className="top-brands text-center my-5 space-y-4"
        data-aos="fade-up"
      >
        <h1 className="font-semibold text-4xl my-12">Top Brands</h1>
        <Marquee pauseOnHover={true} className="cursor-pointer">
          {brands.map((brand) => (
            <Link
              to="/brands"
              key={brand._id}
              className="flex flex-col items-center justify-center font-semibold"
            >
              <img
                className="w-[150px] h-[100px] px-5 rounded-xl"
                src={brand.brand_logo}
                alt={brand.brand_name}
              />
              <h1>{brand.brand_name}</h1>
            </Link>
          ))}
        </Marquee>
      </div>

      {/* Brands on Sale Section */}
      <div
        className="brands-on-sale text-center my-5 space-y-5"
        data-aos="fade-up"
      >
        <h1 className="font-semibold text-4xl my-12">Brands on Sale</h1>
        <div className="cards grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {brandsOnSales.map((brand) => (
            <div key={brand._id} className="mt-5">
              <div
                className="card card-compact bg-base-100 shadow-xl"
                data-aos="zoom-in"
              >
                <figure>
                  <img
                    className="w-[400px] h-[200px]"
                    src={brand.brand_logo}
                    alt={brand.brand_name}
                  />
                </figure>
                <div className="card-body text-center font-semibold text-xl">
                  <h2 className="font-bold text-center text-2xl">
                    {brand.brand_name}
                  </h2>
                  <p>Total Coupons: {brand.coupons.length}</p>
                  <p>Category: {brand.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Promises Section */}
      <div className="promises text-center my-12" data-aos="fade-up">
        <h1 className="font-semibold text-4xl">
          Our Promises To Make A Better World Together
        </h1>
        <div className="mt-12 flex justify-center items-center gap-12 flex-wrap">
          <img
            className="rounded-full"
            src="https://klassy.com.bd/_next/image?url=https%3A%2F%2Fcdn.klassy.com.bd%2Fuploads%2Fwebsite%2Fpromotions%2F6QxBaiA56CLrMH6IrWb6xtpzxts6T4FWa7O04CLC.webp&w=256&q=75"
            alt="Promise 1"
          />
          <img
            className="rounded-full"
            src="https://klassy.com.bd/_next/image?url=https%3A%2F%2Fcdn.klassy.com.bd%2Fuploads%2Fwebsite%2Fpromotions%2F62Spuc3rmSJJD4gP4Li0XkBf4ayWeJxMe0Qqcvdx.webp&w=256&q=75"
            alt="Promise 2"
          />
          <img
            className="rounded-full"
            src="https://klassy.com.bd/_next/image?url=https%3A%2F%2Fcdn.klassy.com.bd%2Fuploads%2Fwebsite%2Fpromotions%2FgYBfX8tLCAZSg5mt4jIFauXAcjwT8q4kuZsYyAJN.webp&w=256&q=75"
            alt="Promise 3"
          />
        </div>
      </div>

      {/* App Section */}
      <div className="cards" data-aos="fade-up">
        <h1 className="font-semibold text-4xl text-center my-12">
          The Best Browser Extension and App for Discount Codes
        </h1>
        <SecCards />
      </div>
    </div>
  );
}
