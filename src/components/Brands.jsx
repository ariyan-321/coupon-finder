import React, { useContext, useState, useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { authContext } from "../provider/AuthProvider";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Brands() {
  const brands = useLoaderData();
  const { user } = useContext(authContext);

  const [searchQuery, setSearchQuery] = useState("");

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Animates only once per scroll
    });
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      {/* Search bar */}
      <div className="flex items-center w-[80%] mx-auto mt-12">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered w-full"
          value={searchQuery}
          onChange={handleSearch}
        />
        <button className="btn">Search</button>
      </div>

      {/* Page title */}
      <h1
        className="font-semibold text-4xl text-center my-12"
        data-aos="fade-down"
      >
        All Brands
      </h1>

      {/* Cards section */}
      <div className="cards grid grid-cols-1 gap-7 mx-auto">
        {brands
          .filter((brand) =>
            brand.brand_name.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((brand, index) => (
            <div
              className="card bg-base-100 w-[90%] md:w-[60%] lg:w-[50%] 2xl:w-[40%] mx-auto shadow-xl"
              key={brand._id}
              data-aos="fade-up" // Animation effect
              data-aos-delay={index * 200} // Staggered animation
            >
              <figure>
                <img
                  src={brand.brand_logo}
                  alt={brand.name}
                  className="object-contain"
                />
              </figure>
              <div
                className="card-body text-center font-semibold space-y-4"
                data-aos="zoom-in" // Inner card animation
              >
                <h2 className="flex items-center flex-col gap-3 space-x-2">
                  <span className="text-4xl">{brand.brand_name}</span>
                  <span className="text-yellow-400">
                    {/* Rating with stars */}
                    {"★".repeat(brand.rating)}
                  </span>
                </h2>
                <p>{brand.description}</p>

                <div
                  className="card-actions justify-between"
                  data-aos="flip-up" // Action button animation
                >
                  <Link
                    to={
                     `/brand/${brand._id}`
                    }
                    className="btn btn-primary"
                  >
                    View Coupons
                  </Link>

                  {brand.isSaleOn && (
                    <span className="text-red-500 text-3xl font-semibold animate-bounce">
                      Sale is on!
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
